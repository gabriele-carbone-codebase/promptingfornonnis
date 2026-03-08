import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "nonni_popup_dismissed";

export function NonniPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onScroll = () => {
      const ratio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (ratio > 0.7) setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative rounded-xl border bg-card text-card-foreground shadow-lg p-5 pr-10">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-sm font-semibold mb-1">
          🇮🇹 What does <em>"Nonni"</em> mean?
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          "Nonni" is the Italian word for "grandparents." This project was born to make AI technology accessible to everyone — no matter your age or tech experience.
        </p>
      </div>
    </div>
  );
}
