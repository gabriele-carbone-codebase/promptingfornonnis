import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/i18n/useTranslation";

const Privacy = () => {
  const t = useTranslation();
  const s = t.privacy.sections;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container py-12 flex-1">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.privacy.title}</h1>
            <p className="text-muted-foreground"><strong>{t.privacy.lastUpdated}</strong> {t.privacy.date}</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s1.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s1.content }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s2.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.s2.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s2.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s2.outro }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s3.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.s3.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s3.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s4.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s4.intro }} />
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s4.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s4.outro }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s5.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s5.content }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s6.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.s6.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s6.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s6.outro }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s7.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s7.intro }} />
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s7.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s7.outro }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s8.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s8.content }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s9.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s9.intro }} />
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {s.s9.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{s.s10.title}</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.s10.content }} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
