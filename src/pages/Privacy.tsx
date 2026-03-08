import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container py-12 flex-1">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground"><strong>Last updated:</strong> March 2026</p>

          <h2>1. Data Controller</h2>
          <p>
            The data controller for this website is <strong>Gabriele Carbone</strong>.<br />
            For any privacy-related inquiries, you can contact us at:{" "}
            <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
              info@gabrielecarbone.it
            </a>
          </p>

          <h2>2. What Data We Collect</h2>
          <p>When you create an account, we collect:</p>
          <ul>
            <li><strong>Email address</strong> — used for authentication and account recovery.</li>
            <li><strong>Display name</strong> — chosen by you during registration, shown publicly in the community.</li>
            <li><strong>Prompts you create</strong> — stored to let you save, manage, and optionally share them.</li>
          </ul>
          <p>
            We do <strong>not</strong> collect sensitive personal data, payment information, or location data.
          </p>

          <h2>3. How We Use Your Data</h2>
          <p>Your data is used exclusively to:</p>
          <ul>
            <li>Provide and maintain your account.</li>
            <li>Allow you to save and retrieve your prompts.</li>
            <li>Display your public prompts in the community section (only if you choose to share them).</li>
            <li>Send password reset emails when requested.</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.
            Your data is stored securely using industry-standard cloud infrastructure.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            Your data is retained for as long as your account is active. If you wish to delete your account and all
            associated data, please contact us at{" "}
            <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
              info@gabrielecarbone.it
            </a>.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under applicable data protection laws (including GDPR), you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:info@gabrielecarbone.it" className="text-primary hover:underline">
              info@gabrielecarbone.it
            </a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This website uses only essential cookies required for authentication and session management.
            We do not use tracking cookies or third-party analytics.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected on this page
            with an updated "Last updated" date.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
