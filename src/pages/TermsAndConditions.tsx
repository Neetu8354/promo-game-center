import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";

const SITE_URL = "https://www.babu8.online";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using Babu88 (available at www.babu8.online), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of any changes."
  },
  {
    title: "2. Eligibility",
    content: "You must be at least 18 years of age to register and use Babu88. By registering, you confirm that you are 18 or older and that using our services is lawful in your jurisdiction. We reserve the right to request age verification at any time and to suspend accounts that do not meet eligibility requirements."
  },
  {
    title: "3. Account Registration",
    content: "You are responsible for maintaining the confidentiality of your account credentials. Each user is permitted one account only. Duplicate accounts may be suspended. You must provide accurate and truthful information during registration. Babu88 reserves the right to suspend or terminate accounts that provide false information."
  },
  {
    title: "4. Deposits and Withdrawals",
    content: "All transactions are processed in Indian Rupees (INR). Deposits are credited to your account upon confirmation. Withdrawal requests are processed within 24 hours subject to verification. Babu88 reserves the right to conduct KYC (Know Your Customer) checks before processing withdrawals. Fraudulent transactions will result in immediate account suspension."
  },
  {
    title: "5. Bonuses and Promotions",
    content: "Bonuses and promotional offers are subject to wagering requirements and specific terms communicated at the time of offer. Babu88 reserves the right to modify, suspend, or cancel promotions at any time. Abuse of bonus systems, including creating multiple accounts to exploit offers, will result in account termination and forfeiture of bonuses."
  },
  {
    title: "6. Responsible Gaming",
    content: "Babu88 is committed to responsible gaming. We provide tools including session limits, self-exclusion, and reality checks. Gaming should be treated as entertainment, not a source of income. If you feel you have a gaming problem, please contact our support team or seek professional help. We reserve the right to impose limits or close accounts if we suspect problem gaming."
  },
  {
    title: "7. Fair Play",
    content: "All games on Babu88 use certified Random Number Generators (RNG) to ensure fair outcomes. Any attempt to manipulate game outcomes, use automated tools, or exploit software vulnerabilities is strictly prohibited and will result in immediate account termination and forfeiture of funds."
  },
  {
    title: "8. Prohibited Activities",
    content: "Users are prohibited from: creating multiple accounts, using VPNs to circumvent geographic restrictions, money laundering through the platform, sharing account credentials, using abusive language toward staff, or engaging in any activity that violates applicable laws. Violations may result in account suspension and reporting to relevant authorities."
  },
  {
    title: "9. Intellectual Property",
    content: "All content on Babu88 including logos, graphics, text, and software is the intellectual property of Babu88 and is protected by applicable copyright and trademark laws. Users may not copy, reproduce, or distribute any content without prior written permission."
  },
  {
    title: "10. Limitation of Liability",
    content: "Babu88 shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform. We do not guarantee uninterrupted access to services and shall not be liable for any losses caused by technical failures, service interruptions, or events beyond our reasonable control."
  },
  {
    title: "11. Privacy Policy",
    content: "We collect and process personal data in accordance with our Privacy Policy. By using Babu88, you consent to the collection and use of your information for account management, security verification, and improving our services. We do not sell your personal data to third parties."
  },
  {
    title: "12. Governing Law",
    content: "These terms are governed by the laws applicable in the jurisdiction where Babu88 operates. Any disputes shall be resolved through binding arbitration before resorting to litigation. By using our platform, you agree to this dispute resolution mechanism."
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms and Conditions | Babu88</title>
        <meta name="description" content="Read Babu88's Terms and Conditions covering account registration, deposits, withdrawals, responsible gaming, fair play and more for Indian players." />
        <link rel="canonical" href={`${SITE_URL}/terms-and-conditions`} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Terms and Conditions | Babu88" />
        <meta property="og:url" content={`${SITE_URL}/terms-and-conditions`} />
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Terms & Conditions</li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: January 2026</p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground font-medium">⚠️ Please read these terms carefully before using Babu88. By accessing our platform, you agree to these terms in full.</p>
        </div>

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          {sections.map((s, i) => (
            <section key={i} className="bg-card border border-border rounded-lg p-5">
              <h2 className="font-heading text-sm md:text-base font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link to="/about-us" className="inline-block border border-primary text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors mr-3">
            About Us
          </Link>
          <Link to="/faq" className="inline-block border border-border text-muted-foreground px-4 py-2 rounded-full text-sm font-bold hover:text-foreground transition-colors">
            FAQ
          </Link>
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default TermsAndConditions;
