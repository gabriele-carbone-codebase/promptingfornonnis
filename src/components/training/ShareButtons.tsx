import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Link, Twitter, Linkedin, Check } from "lucide-react";
import html2canvas from "html2canvas";
import { useTranslation } from "@/i18n/useTranslation";

interface ShareButtonsProps {
  certificateRef: React.RefObject<HTMLDivElement>;
  score: number;
  total: number;
}

export function ShareButtons({ certificateRef, score, total }: ShareButtonsProps) {
  const t = useTranslation();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const shareText = t.share.shareText
    .replace("{score}", String(score))
    .replace("{total}", String(total));
  const shareUrl = window.location.origin + "/training";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    setDownloading(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      });
      
      const link = document.createElement("a");
      link.download = "prompt-engineering-certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Failed to download:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="gap-2"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
        {copied ? t.share.copiedLink : t.share.copyLink}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleDownload}
        disabled={downloading}
        className="gap-2"
      >
        <Download className="w-4 h-4" />
        {downloading ? t.share.downloading : t.share.downloadImage}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleTwitterShare}
        className="gap-2"
      >
        <Twitter className="w-4 h-4" />
        {t.share.shareOnX}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleLinkedInShare}
        className="gap-2"
      >
        <Linkedin className="w-4 h-4" />
        {t.share.shareOnLinkedIn}
      </Button>
    </div>
  );
}
