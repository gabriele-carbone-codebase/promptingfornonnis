import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, Copy, Users, Loader2 } from "lucide-react";
import chatgptLogo from "@/assets/chatgpt-logo.svg";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { fakeCommunityPrompts } from "@/data/fakeCommunityPrompts";
import { fakeCommunityPromptsIt } from "@/data/fakeCommunityPrompts.it";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";

interface PublicPrompt {
  id: string;
  title: string;
  content: string;
  likes_count: number;
  created_at: string;
  user_id: string;
  display_name?: string | null;
}

const Community = () => {
  const t = useTranslation();
  const { lang } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [prompts, setPrompts] = useState<PublicPrompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());
  const [likingIds, setLikingIds] = useState<Set<string>>(new Set());

  const fakePrompts = lang === "it" ? fakeCommunityPromptsIt : fakeCommunityPrompts;

  useEffect(() => {
    fetchPrompts();
    if (user) {
      fetchUserLikes();
    }
  }, [user, lang]);

  const fetchPrompts = async () => {
    setLoading(true);
    
    const { data: promptsData, error: promptsError } = await supabase
      .from("prompts")
      .select("id, title, content, likes_count, created_at, user_id")
      .eq("is_public", true)
      .eq("language", lang)
      .order("likes_count", { ascending: false })
      .limit(50);

    if (promptsError) {
      console.error("Error fetching prompts:", promptsError);
      setLoading(false);
      return;
    }

    if (promptsData && promptsData.length > 0) {
      const userIds = [...new Set(promptsData.map(p => p.user_id))];
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("user_id, display_name")
        .in("user_id", userIds);

      const profilesMap = new Map(profilesData?.map(p => [p.user_id, p.display_name]) || []);
      
      const promptsWithProfiles = promptsData.map(p => ({
        ...p,
        display_name: profilesMap.get(p.user_id) || null,
      }));
      
      setPrompts([...promptsWithProfiles, ...fakePrompts]);
    } else {
      setPrompts(fakePrompts);
    }
    
    setLoading(false);
  };

  const fetchUserLikes = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from("prompt_likes")
      .select("prompt_id")
      .eq("user_id", user.id);

    if (data) {
      setUserLikes(new Set(data.map(l => l.prompt_id)));
    }
  };

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(t.community.promptCopied);
    } catch (err) {
      toast.error(t.community.failedCopy);
    }
  };

  const handleOpenChatGPT = (content: string) => {
    const url = `https://chat.openai.com/?q=${encodeURIComponent(content)}`;
    window.open(url, "_blank");
  };

  const isFakePrompt = (id: string) => id.startsWith("fake-");

  const handleLike = async (promptId: string) => {
    if (!isAuthenticated) {
      toast.error(t.community.signInToLike);
      return;
    }

    if (isFakePrompt(promptId)) {
      toast.info(t.community.examplePrompt);
      return;
    }

    if (likingIds.has(promptId)) return;
    setLikingIds(prev => new Set([...prev, promptId]));

    const isLiked = userLikes.has(promptId);

    try {
      if (isLiked) {
        const { error } = await supabase
          .from("prompt_likes")
          .delete()
          .eq("prompt_id", promptId)
          .eq("user_id", user!.id);

        if (!error) {
          setUserLikes(prev => {
            const next = new Set(prev);
            next.delete(promptId);
            return next;
          });
          setPrompts(prompts.map(p => 
            p.id === promptId ? { ...p, likes_count: p.likes_count - 1 } : p
          ));
        }
      } else {
        const { error } = await supabase
          .from("prompt_likes")
          .insert({ prompt_id: promptId, user_id: user!.id });

        if (!error) {
          setUserLikes(prev => new Set([...prev, promptId]));
          setPrompts(prompts.map(p => 
            p.id === promptId ? { ...p, likes_count: p.likes_count + 1 } : p
          ));
        }
      }
    } finally {
      setLikingIds(prev => {
        const next = new Set(prev);
        next.delete(promptId);
        return next;
      });
    }
  };

  const filteredPrompts = prompts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t.community.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.community.pageSubtitle}
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t.community.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label={t.community.searchPlaceholder}
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredPrompts.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {searchQuery ? t.community.noPromptsFound : t.community.beFirst}
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    {searchQuery 
                      ? t.community.tryDifferent 
                      : t.community.signUpMessage
                    }
                  </p>
                </div>
                {!searchQuery && (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {!isAuthenticated && (
                      <Button asChild>
                        <LocalizedLink to="/auth?mode=signup">{t.community.createAccount}</LocalizedLink>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <LocalizedLink to="/">{t.community.buildPrompt}</LocalizedLink>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredPrompts.map((prompt) => (
                <Card key={prompt.id} className="shadow-card hover:shadow-soft transition-shadow">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground line-clamp-1">
                            {prompt.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {t.community.by} {prompt.display_name || t.community.anonymous}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-wrap">
                        {prompt.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(prompt.created_at).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(prompt.id)}
                            className={userLikes.has(prompt.id) ? "text-destructive" : ""}
                            disabled={likingIds.has(prompt.id)}
                          >
                            <Heart className={`w-4 h-4 mr-1 ${userLikes.has(prompt.id) ? "fill-current" : ""}`} />
                            {prompt.likes_count}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(prompt.content)}
                            aria-label={t.community.promptCopied}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenChatGPT(prompt.content)}
                            aria-label="Open in ChatGPT"
                          >
                            <img src={chatgptLogo} alt="" className="w-4 h-4" />
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
    </div>
  );
};

export default Community;
