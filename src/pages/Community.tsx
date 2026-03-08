import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, Copy, Users, Loader2 } from "lucide-react";
import chatgptLogo from "@/assets/chatgpt-logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { fakeCommunityPrompts } from "@/data/fakeCommunityPrompts";

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
  const { user, isAuthenticated } = useAuth();
  const [prompts, setPrompts] = useState<PublicPrompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchPrompts();
    if (user) {
      fetchUserLikes();
    }
  }, [user]);

  const fetchPrompts = async () => {
    setLoading(true);
    
    // First fetch public prompts
    const { data: promptsData, error: promptsError } = await supabase
      .from("prompts")
      .select("id, title, content, likes_count, created_at, user_id")
      .eq("is_public", true)
      .order("likes_count", { ascending: false })
      .limit(50);

    if (promptsError) {
      console.error("Error fetching prompts:", promptsError);
      setLoading(false);
      return;
    }

    // Then fetch profiles for those prompts
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
      
      setPrompts([...promptsWithProfiles, ...fakeCommunityPrompts]);
    } else {
      setPrompts(fakeCommunityPrompts);
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
      toast.success("Prompt copied!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const handleOpenChatGPT = (content: string) => {
    const url = `https://chat.openai.com/?q=${encodeURIComponent(content)}`;
    window.open(url, "_blank");
  };

  const handleLike = async (promptId: string) => {
    if (!isAuthenticated) {
      toast.error("Sign in to like prompts");
      return;
    }

    const isLiked = userLikes.has(promptId);

    if (isLiked) {
      // Unlike
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
      // Like
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
  };

  const filteredPrompts = prompts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Community Prompts
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover and share prompts created by our community
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Prompts list */}
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
                    {searchQuery ? "No prompts found" : "Be the first to share!"}
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    {searchQuery 
                      ? "Try a different search term" 
                      : "Sign up to save your prompts and share them with the community."
                    }
                  </p>
                </div>
                {!searchQuery && (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {!isAuthenticated && (
                      <Button asChild>
                        <Link to="/auth?mode=signup">Create Account</Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link to="/">Build a Prompt</Link>
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
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium text-foreground">
                            {prompt.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            by {prompt.display_name || "Anonymous"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-wrap">
                          {prompt.content}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                          <span>
                            {new Date(prompt.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(prompt.id)}
                          className={userLikes.has(prompt.id) ? "text-destructive" : ""}
                        >
                          <Heart className={`w-4 h-4 mr-1 ${userLikes.has(prompt.id) ? "fill-current" : ""}`} />
                          {prompt.likes_count}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopy(prompt.content)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenChatGPT(prompt.content)}
                          title="Open in ChatGPT"
                        >
                          <img src={chatgptLogo} alt="ChatGPT" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Community;
