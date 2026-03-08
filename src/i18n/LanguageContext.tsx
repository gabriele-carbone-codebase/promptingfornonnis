import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export type Language = "en" | "it";

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  localePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLanguage: () => {},
  localePath: (p) => p,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

function detectLangFromPath(pathname: string): Language {
  return pathname.startsWith("/it") ? "it" : "en";
}

function stripLangPrefix(pathname: string): string {
  if (pathname.startsWith("/it")) {
    const rest = pathname.slice(3);
    return rest || "/";
  }
  return pathname;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Language>(() => detectLangFromPath(location.pathname));

  // Sync lang with URL on navigation
  useEffect(() => {
    const urlLang = detectLangFromPath(location.pathname);
    if (urlLang !== lang) {
      setLangState(urlLang);
    }
  }, [location.pathname]);

  // On first load, check localStorage / DB preference
  useEffect(() => {
    const stored = localStorage.getItem("preferred_language") as Language | null;
    if (stored && stored !== lang && location.pathname === "/") {
      // Only auto-redirect on root if user has a stored preference
      if (stored === "it") {
        navigate("/it", { replace: true });
      }
    }
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_language", newLang);

    // Save to DB for authenticated users
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase
          .from("profiles")
          .update({ preferred_language: newLang })
          .eq("user_id", user.id)
          .then(() => {});
      }
    });

    // Navigate to same page in new language
    const basePath = stripLangPrefix(location.pathname);
    const search = location.search;
    if (newLang === "it") {
      navigate(`/it${basePath === "/" ? "" : basePath}${search}`, { replace: true });
    } else {
      navigate(`${basePath}${search}`, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  const localePath = useCallback((path: string): string => {
    if (lang === "it") {
      return `/it${path === "/" ? "" : path}`;
    }
    return path;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
}
