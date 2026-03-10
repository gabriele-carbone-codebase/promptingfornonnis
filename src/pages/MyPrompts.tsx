import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, Copy, Users, Globe, Lock, Trash2, Loader2, ExternalLink } from "lucide-react";
import chatgptLogo from "@/assets/chatgpt-logo.svg";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/components/LocalizedLink";

interface Prompt {
  id: string;
  title: string;
  content: string;
  is_public: boolean;
  likes_count: number;
  created_at: string;
}

const MyPrompts = () => {
  const t = useTranslation();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchPrompts();
    }
  }, [isAuthenticated, user]);

  const fetchPrompts = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("prompts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      toast.error(t.myPrompts.failedLoad);
    } else {
      setPrompts(data || []);
    }
    setLoading(false);
  };

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(t.community.promptCopied);
    } catch (err) {
      toast.error(t.community.failedCopy);
    }
  };

  const handleTogglePublic = async (promptId: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("prompts")
      .update({ is_public: !currentStatus })
      .eq("id", promptId);

    if (error) {
      toast.error(t.myPrompts.failedUpdate);
    } else {
      setPrompts(prompts.map(p => 
        p.id === promptId ? { ...p, is_public: !currentStatus } : p
      ));
      toast.success(currentStatus ? t.myPrompts.nowPrivate : t.myPrompts.nowPublic);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    
    const { error } = await supabase
      .from("prompts")
      .delete()
      .eq("id", deleteTarget);

    if (error) {
      toast.error(t.myPrompts.failedDelete);
    } else {
      setPrompts(prompts.filter(p => p.id !== deleteTarget));
      toast.success(t.myPrompts.promptDeleted);
    }
    setDeleteTarget(null);
  };

  const filteredPrompts = prompts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12">
          <Card className="max-w-md mx-auto shadow-card">
            <CardContent className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">{t.myPrompts.signInTitle}</h2>
              <p className="text-muted-foreground">
                {t.myPrompts.signInSubtitle}
              </p>
              <Button asChild>
                <LocalizedLink to="/auth">{t.myPrompts.signIn}</LocalizedLink>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{t.myPrompts.pageTitle}</h1>
            <p className="text-muted-foreground">
              {t.myPrompts.pageSubtitle}
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t.myPrompts.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label={t.myPrompts.searchPlaceholder}
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredPrompts.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="py-12 text-center space-y-4">
                <p className="text-muted-foreground">
                  {searchQuery ? t.myPrompts.noMatch : t.myPrompts.noPrompts}
                </p>
                <Button asChild>
                  <LocalizedLink to="/">{t.myPrompts.buildFirst}</LocalizedLink>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredPrompts.map((prompt) => (
                <Card key={prompt.id} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-foreground line-clamp-1 flex-1">
                          {prompt.title}
                        </h3>
                        <Badge
                          variant={prompt.is_public ? "default" : "secondary"}
                          className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleTogglePublic(prompt.id, prompt.is_public)}
                        >
                          {prompt.is_public ? (
                            <>
                              <Globe className="w-3 h-3 mr-1" />
                              {t.myPrompts.public}
                            </>
                          ) : (
                            <>
                              <Lock className="w-3 h-3 mr-1" />
                              {t.myPrompts.private}
                            </>
                          )}
                        </Badge>
                      </div>
                      <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
                        {prompt.content}
                      </pre>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {prompt.likes_count} {t.myPrompts.likes}
                          </span>
                          <span>
                            {new Date(prompt.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(prompt.content)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            className="bg-[#74aa9c] hover:bg-[#74aa9c]/90 text-white"
                            onClick={() => window.open(`https://chat.openai.com/?q=${encodeURIComponent(prompt.content)}`, '_blank')}
                            title={t.wizard?.output?.openInChatGPT || "Open in ChatGPT"}
                          >
                            <img src={chatgptLogo} alt="ChatGPT" className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeleteTarget(prompt.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.myPrompts.deleteTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.myPrompts.deleteDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.myPrompts.cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {t.myPrompts.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MyPrompts;
