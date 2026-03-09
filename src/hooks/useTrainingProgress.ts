import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const LOCAL_STORAGE_KEY = "training_completed_lessons";

function loadFromLocalStorage(): number[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveToLocalStorage(lessons: number[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lessons));
}

export function useTrainingProgress() {
  const { user, loading: authLoading } = useAuth();
  const [completedLessons, setCompletedLessons] = useState<number[]>(loadFromLocalStorage);
  const [loading, setLoading] = useState(true);

  // Sync with DB when user is authenticated
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setLoading(false);
      return;
    }

    const syncWithDb = async () => {
      try {
        const { data } = await supabase
          .from("training_progress")
          .select("completed_lessons")
          .eq("user_id", user.id)
          .maybeSingle();

        const dbLessons: number[] = (data?.completed_lessons as number[]) ?? [];
        const localLessons = loadFromLocalStorage();

        // Merge: union of local + db
        const merged = Array.from(new Set([...localLessons, ...dbLessons])).sort(
          (a, b) => a - b
        );

        setCompletedLessons(merged);
        saveToLocalStorage(merged);

        // Upsert merged result to DB
        if (merged.length > 0) {
          await supabase.from("training_progress").upsert(
            {
              user_id: user.id,
              completed_lessons: merged,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "user_id" }
          );
        }
      } catch (err) {
        console.error("Error syncing training progress:", err);
      } finally {
        setLoading(false);
      }
    };

    syncWithDb();
  }, [user, authLoading]);

  const markLessonComplete = useCallback(
    async (lessonId: number) => {
      setCompletedLessons((prev) => {
        if (prev.includes(lessonId)) return prev;
        const updated = [...prev, lessonId].sort((a, b) => a - b);
        saveToLocalStorage(updated);

        // Save to DB if authenticated (fire and forget)
        if (user) {
          supabase
            .from("training_progress")
            .upsert(
              {
                user_id: user.id,
                completed_lessons: updated,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id" }
            )
            .then(({ error }) => {
              if (error) console.error("Error saving training progress:", error);
            });
        }

        return updated;
      });
    },
    [user]
  );

  return { completedLessons, markLessonComplete, loading };
}
