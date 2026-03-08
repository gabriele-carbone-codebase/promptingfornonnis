import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container py-12 flex-1">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground"><strong>Last updated:</strong> March 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Data Controller</h2>
            <p className="text-muted-foreground leading-relaxed">
              The data controller for this website is <strong className="text-foreground">Gabriele Carbone</strong>.<br />
              For any privacy-related inquiries, you can contact us at:{" "}
              <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
                info@gabrielecarbone.it
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. What Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">When you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Email address</strong> — used for authentication and account recovery.</li>
              <li><strong className="text-foreground">Display name</strong> — chosen by you during registration, shown publicly in the community.</li>
              <li><strong className="text-foreground">Prompts you create</strong> — stored to let you save, manage, and optionally share them.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do <strong className="text-foreground">not</strong> collect sensitive personal data, payment information, or location data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">Your data is used exclusively to:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Provide and maintain your account.</li>
              <li>Allow you to save and retrieve your prompts.</li>
              <li>Display your public prompts in the community section (only if you choose to share them).</li>
              <li>Send password reset emails when requested.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do <strong className="text-foreground">not</strong> sell, rent, or share your personal data with third parties for marketing purposes.
              Your data is stored securely using industry-standard cloud infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is retained for as long as your account is active. If you wish to delete your account and all
              associated data, please contact us at{" "}
              <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
                info@gabrielecarbone.it
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">Under applicable data protection laws (including GDPR), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
                info@gabrielecarbone.it
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses only essential cookies required for authentication and session management.
              We do not use tracking cookies or third-party analytics.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be reflected on this page
              with an updated "Last updated" date.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
