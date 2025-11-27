import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavigationHeader from "@/components/landing/NavigationHeader";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#210921] via-black to-[#4f185a]">
      <NavigationHeader />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">
            Last Updated: November 12, 2025
          </p>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <p className="leading-relaxed">
                AWA Finance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our DeFi API platform and services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                1.1 Personal Information
              </h3>
              <p className="leading-relaxed mb-4">
                When you register for our services, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information (business name, tax ID, business address)</li>
                <li>Account credentials and authentication data</li>
                <li>Payment information and billing details</li>
                <li>Identity verification documents (KYC/AML compliance)</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                1.2 Google OAuth Data
              </h3>
              <p className="leading-relaxed mb-4">
                When you sign in using Google OAuth, we collect the following information from your Google account:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Email address:</strong> Used as your account identifier and for communication</li>
                <li><strong>Name:</strong> Used to personalize your experience</li>
                <li><strong>Profile picture:</strong> Displayed in your account settings (optional)</li>
              </ul>
              <p className="leading-relaxed mt-4 mb-2">
                <strong className="text-white">How we use Google OAuth data:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To create and authenticate your AWA Finance account</li>
                <li>To send you important service notifications and updates</li>
                <li>To provide customer support</li>
              </ul>
              <p className="leading-relaxed mt-4 mb-2">
                <strong className="text-white">How we share Google OAuth data:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not sell your Google account data to third parties</li>
                <li>We do not share your Google account data with advertising networks</li>
                <li>We may share your email with service providers who assist in operating our platform (e.g., email delivery services) under strict confidentiality agreements</li>
                <li>We may disclose your information if required by law or to protect our legal rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                1.3 Blockchain and Wallet Data
              </h3>
              <p className="leading-relaxed mb-4">
                As a DeFi API platform, we process blockchain-related data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wallet addresses (public keys)</li>
                <li>Transaction hashes and blockchain network data</li>
                <li>Smart contract interactions</li>
                <li>Token balances and holdings</li>
                <li>On-chain transaction history</li>
              </ul>
              <p className="leading-relaxed mt-4 text-yellow-400/80">
                <strong>Important:</strong> Blockchain data is inherently public and transparent. Any transaction you make through our platform will be recorded on the respective blockchain and may be visible to anyone.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                1.4 Custodial vs. Non-Custodial Data Differences
              </h3>
              <p className="leading-relaxed mb-4">
                The data we collect and control varies based on your service model:
              </p>

              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Custodial Services</h4>
                <p className="mb-2">When you use our custodial framework (Enterprise Managed Model):</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>We maintain control of private keys on your behalf</li>
                  <li>We store encrypted wallet credentials</li>
                  <li>We process and authorize transactions</li>
                  <li>We maintain detailed transaction records</li>
                  <li>Enhanced KYC/AML data collection applies</li>
                </ul>
              </div>

              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Non-Custodial Services (ERC-4337 Smart Accounts)</h4>
                <p className="mb-2">When you use our non-custodial framework:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>You maintain control of your private keys</li>
                  <li>We do not have access to your wallet credentials</li>
                  <li>We only process transaction requests you sign</li>
                  <li>Limited data collection (transaction metadata only)</li>
                  <li>You are responsible for key management and security</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                1.5 Technical and Usage Data
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>API usage statistics and logs</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Access times and session duration</li>
                <li>Error logs and performance metrics</li>
                <li>Referral source and navigation patterns</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our DeFi API services</li>
                <li>Processing blockchain transactions and smart contract interactions</li>
                <li>Authentication and account security</li>
                <li>Compliance with KYC/AML regulations and legal obligations</li>
                <li>Fraud prevention and risk assessment</li>
                <li>Customer support and communication</li>
                <li>Service improvement and analytics</li>
                <li>Billing and payment processing</li>
                <li>Sending important service updates and notifications</li>
              </ul>
            </section>

            {/* Transaction Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Transaction Privacy and Blockchain Transparency
              </h2>
              <p className="leading-relaxed mb-4">
                Understanding privacy in the context of blockchain technology:
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                3.1 On-Chain Data
              </h3>
              <p className="leading-relaxed mb-4">
                All transactions processed through our platform are recorded on public blockchains. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Transaction amounts and token types</li>
                <li>Sender and receiver wallet addresses</li>
                <li>Transaction timestamps</li>
                <li>Smart contract interactions</li>
                <li>Gas fees and network costs</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This information is <strong>permanently recorded</strong> on the blockchain and is <strong>publicly accessible</strong> to anyone. We cannot delete or modify this data.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                3.2 Off-Chain Data
              </h3>
              <p className="leading-relaxed mb-4">
                We maintain private records that are not recorded on the blockchain:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your identity linked to wallet addresses (for custodial services)</li>
                <li>API request metadata</li>
                <li>Internal transaction notes and tags</li>
                <li>Customer support communications</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This off-chain data is subject to this Privacy Policy and is protected by industry-standard security measures.
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (hosting, analytics, customer support)</li>
                <li><strong>Blockchain Networks:</strong> Transaction data is broadcast to decentralized blockchain networks</li>
                <li><strong>Compliance Partners:</strong> KYC/AML verification services and regulatory authorities when required by law</li>
                <li><strong>Business Partners:</strong> DeFi protocols and liquidity providers integrated with our API (with your consent)</li>
                <li><strong>Legal Obligations:</strong> Law enforcement, regulators, or courts when legally required</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Security
              </h2>
              <p className="leading-relaxed mb-4">
                We implement institutional-grade security measures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure key management systems (HSM) for custodial services</li>
                <li>Multi-factor authentication (MFA)</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 compliance (in progress)</li>
                <li>Secure API authentication (OAuth 2.0, API keys)</li>
                <li>24/7 security monitoring and incident response</li>
              </ul>
              <p className="leading-relaxed mt-4 text-yellow-400/80">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data Retention
              </h2>
              <p className="leading-relaxed mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services to you</li>
                <li>Comply with legal and regulatory obligations (typically 5-7 years)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain audit trails for financial transactions</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Blockchain transaction data cannot be deleted as it is permanently recorded on decentralized networks.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain data processing activities</li>
                <li><strong>Restriction:</strong> Request limitation of data processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">privacy@awafinance.com</a>
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. International Data Transfers
              </h2>
              <p className="leading-relaxed">
                Our services operate globally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place through standard contractual clauses and compliance with applicable data protection laws (GDPR, CCPA, etc.).
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Third-Party Services and Links
              </h2>
              <p className="leading-relaxed">
                Our platform may integrate with third-party DeFi protocols, wallets, and services. We are not responsible for their privacy practices. We encourage you to review their privacy policies before using these services.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">AWA Finance</strong></p>
                <p className="mb-2">Email: <a href="mailto:privacy@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">privacy@awafinance.com</a></p>
                <p className="mb-2">Data Protection Officer: <a href="mailto:dpo@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">dpo@awafinance.com</a></p>
                <p>Website: <a href="https://awafinance.com" className="text-purple-400 hover:text-purple-300 underline">awafinance.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
