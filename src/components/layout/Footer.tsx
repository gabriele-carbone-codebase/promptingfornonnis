import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-4 text-sm text-muted-foreground">
        {/* Left: Logo */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Prompting for Nonnis" className="w-7 h-7" />
        </Link>

        {/* Center: Privacy Policy */}
        <Link to="/privacy" className="hover:text-foreground transition-colors underline underline-offset-2">
          Privacy Policy
        </Link>

        {/* Right: Copyright */}
        <span>© 2026 Gabriele Carbone</span>
      </div>
    </footer>
  );
}
