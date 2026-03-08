import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, UsersRound, Lightbulb, LogIn, LogOut, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Build", icon: Heart },
    { href: "/use-cases", label: "Use Cases", icon: Lightbulb },
    { href: "/training", label: "Training", icon: GraduationCap },
    { href: "/community", label: "Community", icon: UsersRound },
  ];

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Desktop: nav centered below logo row / Mobile: logo centered */}
      <div className="container relative flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Prompting for Nonnis" className="w-9 h-9" />
          <span className="text-sm sm:text-lg font-bold text-[#d4621a] whitespace-nowrap" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Prompting for Nonnis
          </span>
        </Link>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "gap-2",
                location.pathname === item.href && "bg-accent text-accent-foreground"
              )}
            >
              <Link to={item.href}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Right: auth + hamburger */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {user?.user_metadata?.display_name || user?.email?.split("@")[0]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/my-prompts" className="cursor-pointer">
                    My Prompts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <Link to="/auth">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </Button>
              <Button size="sm" asChild className="hidden sm:flex">
                <Link to="/auth?mode=signup">
                  Get Started
                </Link>
              </Button>
            </>
          )}

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start gap-2",
                location.pathname === item.href && "bg-accent text-accent-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to={item.href}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            </Button>
          ))}
          <hr className="border-border" />
          {isAuthenticated ? (
            <>
              <Button variant="ghost" asChild className="w-full justify-start gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/my-prompts">
                  <User className="w-4 h-4" />
                  My Prompts
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-destructive"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignOut();
                }}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className="w-full justify-start gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/auth">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
              </Button>
              <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/auth?mode=signup">
                  Get Started
                </Link>
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
