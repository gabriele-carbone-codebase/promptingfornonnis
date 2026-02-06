import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, Copy, Users, Globe, Lock, Trash2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Prompt {
  id: string;
  title: string;
  content: string;
  is_public: boolean;
  likes_count: number;
  created_at: string;
}

const MyPrompts = () => {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
      toast.error("Failed to load prompts");
    } else {
      setPrompts(data || []);
    }
    setLoading(false);
  };

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success("Prompt copied!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const handleTogglePublic = async (promptId: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("prompts")
      .update({ is_public: !currentStatus })
      .eq("id", promptId);

    if (error) {
      toast.error("Failed to update");
    } else {
      setPrompts(prompts.map(p => 
        p.id === promptId ? { ...p, is_public: !currentStatus } : p
      ));
      toast.success(currentStatus ? "Prompt is now private" : "Prompt is now public");
    }
  };

  const handleDelete = async (promptId: string) => {
    const { error } = await supabase
      .from("prompts")
      .delete()
      .eq("id", promptId);

    if (error) {
      toast.error("Failed to delete");
    } else {
      setPrompts(prompts.filter(p => p.id !== promptId));
      toast.success("Prompt deleted");
    }
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
              <h2 className="text-xl font-semibold">Sign in to see your prompts</h2>
              <p className="text-muted-foreground">
                Create an account to save and manage your prompts.
              </p>
              <Button asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">My Prompts</h1>
            <p className="text-muted-foreground">
              Manage your saved prompts
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search your prompts..."
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
              <CardContent className="py-12 text-center space-y-4">
                <p className="text-muted-foreground">
                  {searchQuery ? "No prompts match your search" : "You haven't saved any prompts yet"}
                </p>
                <Button asChild>
                  <Link to="/">Build Your First Prompt</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredPrompts.map((prompt) => (
                <Card key={prompt.id} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium text-foreground truncate">
                            {prompt.title}
                          </h3>
                          <Badge variant={prompt.is_public ? "default" : "secondary"} className="flex-shrink-0">
                            {prompt.is_public ? (
                              <>
                                <Globe className="w-3 h-3 mr-1" />
                                Public
                              </>
                            ) : (
                              <>
                                <Lock className="w-3 h-3 mr-1" />
                                Private
                              </>
                            )}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {prompt.content}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {prompt.likes_count} likes
                          </span>
                          <span>
                            {new Date(prompt.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
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
                          onClick={() => handleTogglePublic(prompt.id, prompt.is_public)}
                        >
                          {prompt.is_public ? (
                            <Lock className="w-4 h-4" />
                          ) : (
                            <Globe className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(prompt.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
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

export default MyPrompts;
