import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Link, Twitter, Linkedin, Check } from "lucide-react";
import { jsPDF } from "jspdf";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";

interface ShareButtonsProps {
  userName: string;
  score: number;
  total: number;
  completionDate: Date;
  grade: string;
  percentage: number;
}

export function ShareButtons({ userName, score, total, completionDate, grade, percentage }: ShareButtonsProps) {
  const t = useTranslation();
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const shareText = t.share.shareText
    .replace("{score}", String(score))
    .replace("{total}", String(total));
  const shareUrl = window.location.origin + "/training";

  const formattedDate = completionDate.toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownloadPdf = () => {
    setDownloading(true);
    try {
      const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const w = doc.internal.pageSize.getWidth();
      const h = doc.internal.pageSize.getHeight();

      // Background
      doc.setFillColor(252, 250, 245);
      doc.rect(0, 0, w, h, "F");

      // Border ornament
      doc.setDrawColor(200, 160, 80);
      doc.setLineWidth(1.5);
      doc.rect(12, 12, w - 24, h - 24);
      doc.setLineWidth(0.5);
      doc.rect(15, 15, w - 30, h - 30);

      // Title
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.setTextColor(150, 120, 60);
      const certOfLabel = lang === "it" ? "CERTIFICATO DI COMPLETAMENTO" : "CERTIFICATE OF COMPLETION";
      doc.text(certOfLabel, w / 2, 38, { align: "center" });

      // Course title
      doc.setFontSize(22);
      doc.setTextColor(40, 40, 40);
      doc.setFont("helvetica", "bold");
      doc.text(t.certificate.courseTitle, w / 2, 55, { align: "center" });

      // Divider
      doc.setDrawColor(200, 160, 80);
      doc.setLineWidth(0.5);
      doc.line(w / 2 - 40, 62, w / 2 + 40, 62);

      // Awarded to label
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(120, 120, 120);
      doc.text(t.certificate.awardedTo, w / 2, 75, { align: "center" });

      // User name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.setTextColor(40, 40, 40);
      doc.text(userName, w / 2, 90, { align: "center" });

      // Stats row
      const statsY = 115;
      const col1 = w / 2 - 60;
      const col2 = w / 2;
      const col3 = w / 2 + 60;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor(200, 160, 80);
      doc.text(grade, col1, statsY, { align: "center" });
      doc.text(`${score}/${total}`, col2, statsY, { align: "center" });
      doc.text(`${percentage}%`, col3, statsY, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text(t.certificate.grade, col1, statsY + 7, { align: "center" });
      doc.text(t.certificate.score, col2, statsY + 7, { align: "center" });
      doc.text(t.certificate.accuracy, col3, statsY + 7, { align: "center" });

      // Date
      doc.setFontSize(11);
      doc.setTextColor(120, 120, 120);
      doc.text(
        t.certificate.completedOn.replace("{date}", formattedDate),
        w / 2,
        145,
        { align: "center" }
      );

      // Footer
      doc.setFontSize(9);
      doc.setTextColor(160, 160, 160);
      doc.text("Prompting for Nonnis — promptingfornonnis.lovable.app", w / 2, h - 20, { align: "center" });

      doc.save("prompt-engineering-certificate.pdf");
    } catch (err) {
      console.error("Failed to generate PDF:", err);
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
        onClick={handleDownloadPdf}
        disabled={downloading}
        className="gap-2"
      >
        <Download className="w-4 h-4" />
        {downloading ? t.share.downloading : t.share.downloadPdf}
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
