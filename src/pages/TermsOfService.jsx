import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavigationHeader from "@/components/landing/NavigationHeader";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">
            Last Updated: November 12, 2025
          </p>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <p className="leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of AWA Finance's DeFi API platform and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="leading-relaxed text-yellow-400/80">
                <strong>IMPORTANT:</strong> Please read these Terms carefully. They contain important information about your legal rights, remedies, and obligations, including mandatory arbitration and class action waiver provisions.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed mb-4">
                By creating an account, accessing our API, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use our Services.
              </p>
              <p className="leading-relaxed">
                These Terms constitute a legally binding agreement between you ("you," "your," or "User") and AWA Finance ("we," "our," or "us").
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Service Description
              </h2>
              <p className="leading-relaxed mb-4">
                AWA Finance provides a unified API platform for accessing decentralized finance (DeFi) protocols and blockchain infrastructure. Our Services enable businesses to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Generate yield through DeFi protocols</li>
                <li>Access lending and borrowing services</li>
                <li>Execute multi-chain token swaps</li>
                <li>Interact with tokenized assets (including RWAs)</li>
                <li>Process cross-border payments</li>
                <li>Integrate blockchain functionality into applications</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We offer both custodial (Enterprise Managed Model) and non-custodial (ERC-4337 Smart Accounts) frameworks to meet different business needs.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Eligibility
              </h2>
              <p className="leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be located in a jurisdiction where our Services are prohibited</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Complete our KYC/AML verification process</li>
                <li>Represent a legitimate business entity (for business accounts)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Account Registration and Security
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.1 Account Creation
              </h3>
              <p className="leading-relaxed mb-4">
                You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.2 API Keys and Authentication
              </h3>
              <p className="leading-relaxed mb-4">
                API keys and authentication tokens are sensitive credentials. You must:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keep API keys confidential and secure</li>
                <li>Never share API keys publicly or in client-side code</li>
                <li>Rotate API keys regularly</li>
                <li>Immediately revoke compromised keys</li>
                <li>Use appropriate access controls and permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.3 Account Security
              </h3>
              <p className="leading-relaxed mb-4">
                You must immediately notify us of any unauthorized access or security breaches. We are not liable for losses resulting from unauthorized use of your account unless caused by our negligence.
              </p>
            </section>

            {/* Service Models */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Custodial vs. Non-Custodial Services
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                5.1 Custodial Services (Enterprise Managed Model)
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="mb-4">When you use our custodial services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                  <li>We maintain custody of private keys and digital assets on your behalf</li>
                  <li>We are responsible for key management and security</li>
                  <li>You authorize us to execute transactions per your API requests</li>
                  <li>Enhanced KYC/AML compliance requirements apply</li>
                  <li>We maintain insurance coverage for custodied assets (where available)</li>
                  <li>You grant us limited power of attorney to act on your behalf</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                5.2 Non-Custodial Services (ERC-4337 Smart Accounts)
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4">
                <p className="mb-4">When you use our non-custodial services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                  <li>You maintain full custody and control of your private keys</li>
                  <li>You are solely responsible for key security and backup</li>
                  <li>We only process transactions you explicitly sign</li>
                  <li>You bear full risk of key loss or compromise</li>
                  <li>We cannot recover lost keys or reverse transactions</li>
                  <li>You must secure your own wallet and authentication methods</li>
                </ul>
              </div>

              <p className="leading-relaxed mt-4 text-yellow-400/80">
                <strong>WARNING:</strong> Lost private keys cannot be recovered. Ensure you have secure backup procedures in place.
              </p>
            </section>

            {/* Fees and Payments */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Fees and Payments
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                6.1 Service Fees
              </h3>
              <p className="leading-relaxed mb-4">
                AWA Finance operates on a transaction-based fee model:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We charge a small percentage fee on each on-chain transaction</li>
                <li>No setup fees or monthly minimums</li>
                <li>Fees scale with your usage volume</li>
                <li>Custom enterprise pricing available for high-volume users</li>
                <li>Fees are clearly displayed before transaction execution</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                6.2 Blockchain Network Fees (Gas)
              </h3>
              <p className="leading-relaxed mb-4">
                In addition to our service fees, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Blockchain network transaction fees (gas fees)</li>
                <li>Smart contract execution costs</li>
                <li>Network congestion surcharges</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These fees are paid directly to blockchain validators and are outside our control. We will provide fee estimates but actual costs may vary based on network conditions.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                6.3 Payment Terms
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fees are automatically deducted from transactions</li>
                <li>Enterprise accounts may receive monthly invoicing</li>
                <li>Payment must be made in cryptocurrency or fiat (as agreed)</li>
                <li>Late payments may result in service suspension</li>
                <li>We reserve the right to modify fees with 30 days' notice</li>
              </ul>
            </section>

            {/* User Obligations */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. User Obligations and Acceptable Use
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                7.1 Compliance
              </h3>
              <p className="leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comply with all applicable laws, including AML/KYC regulations</li>
                <li>Not use our Services for illegal activities</li>
                <li>Implement appropriate sanctions screening</li>
                <li>Maintain accurate records for regulatory purposes</li>
                <li>Cooperate with regulatory inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                7.2 Prohibited Activities
              </h3>
              <p className="leading-relaxed mb-4">You must NOT:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Engage in money laundering, terrorist financing, or fraud</li>
                <li>Process transactions from sanctioned jurisdictions or entities</li>
                <li>Manipulate markets or engage in wash trading</li>
                <li>Violate intellectual property rights</li>
                <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                <li>Use our API to build competing services</li>
                <li>Abuse rate limits or engage in denial-of-service attacks</li>
                <li>Impersonate others or provide false information</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                7.3 Consequences
              </h3>
              <p className="leading-relaxed">
                Violation of these terms may result in immediate account suspension, termination, legal action, and reporting to authorities.
              </p>
            </section>

            {/* Blockchain Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Blockchain-Specific Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                8.1 Irreversibility of Transactions
              </h3>
              <p className="leading-relaxed mb-4">
                Blockchain transactions are <strong>irreversible</strong>. Once a transaction is confirmed, it cannot be reversed, refunded, or cancelled. We are not responsible for transactions sent to incorrect addresses or smart contracts.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                8.2 Network Risks
              </h3>
              <p className="leading-relaxed mb-4">
                Blockchain networks carry inherent risks:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Network congestion may delay transactions</li>
                <li>Blockchain forks may cause temporary disruptions</li>
                <li>Smart contract bugs may result in loss of funds</li>
                <li>51% attacks or consensus failures are theoretically possible</li>
                <li>Regulatory changes may impact blockchain operations</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                8.3 Volatility and Financial Risk
              </h3>
              <p className="leading-relaxed text-yellow-400/80">
                <strong>WARNING:</strong> Cryptocurrency and digital assets are highly volatile. Prices can fluctuate dramatically. You may lose all invested capital. We do not provide investment advice. Consult financial advisors before making investment decisions.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                8.4 Smart Contract Risks
              </h3>
              <p className="leading-relaxed mb-4">
                DeFi protocols use smart contracts which may contain bugs or vulnerabilities. While we conduct due diligence, we cannot guarantee the security of third-party protocols. Use at your own risk.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Intellectual Property
              </h2>
              <p className="leading-relaxed mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and API design, are owned by AWA Finance and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our API for your business purposes in accordance with these Terms. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reproduce, modify, or create derivative works</li>
                <li>Reverse engineer or decompile our software</li>
                <li>Remove proprietary notices or labels</li>
                <li>Use our trademarks without permission</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-4 uppercase text-yellow-400/90">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our Services are provided "AS IS" without warranties of any kind</li>
                <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                <li>Our total liability is limited to fees paid in the 12 months preceding the claim</li>
                <li>We are not liable for blockchain network failures, smart contract bugs, or third-party protocol losses</li>
                <li>We are not responsible for user error, lost keys, or unauthorized access</li>
                <li>We do not guarantee uptime, transaction success, or specific outcomes</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Indemnification
              </h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless AWA Finance, its affiliates, officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Your use or misuse of our Services</li>
                <li>Violation of these Terms</li>
                <li>Violation of any laws or regulations</li>
                <li>Infringement of third-party rights</li>
                <li>Your transactions or business activities</li>
              </ul>
            </section>

            {/* Service Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Service Modifications and Termination
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                12.1 Service Changes
              </h3>
              <p className="leading-relaxed mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with reasonable notice. We may also impose usage limits or restrictions.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                12.2 Account Termination
              </h3>
              <p className="leading-relaxed mb-4">
                We may suspend or terminate your account:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>For violation of these Terms</li>
                <li>For illegal or fraudulent activity</li>
                <li>To comply with legal requirements</li>
                <li>For extended inactivity</li>
                <li>At our discretion with 30 days' notice</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You may terminate your account at any time with 30 days' notice. Termination does not relieve you of obligations incurred before termination.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Dispute Resolution and Arbitration
              </h2>
              <p className="leading-relaxed mb-4">
                Any disputes arising from these Terms or our Services shall be resolved through binding arbitration, except where prohibited by law. You waive the right to participate in class action lawsuits.
              </p>
              <p className="leading-relaxed">
                Arbitration shall be conducted under the rules of the American Arbitration Association (AAA). The arbitration location and governing law shall be determined based on your jurisdiction and business location.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles. Any legal action must be brought in the courts of [Jurisdiction].
              </p>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                15. Miscellaneous
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and AWA Finance</li>
                <li><strong>Severability:</strong> If any provision is found invalid, the remaining provisions remain in effect</li>
                <li><strong>Waiver:</strong> Failure to enforce any right does not waive that right</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays caused by events beyond our control</li>
                <li><strong>Relationship:</strong> Nothing creates a partnership, joint venture, or agency relationship</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                16. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or platform notification at least 30 days before taking effect. Continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                17. Contact Information
              </h2>
              <p className="leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">AWA Finance</strong></p>
                <p className="mb-2">Email: <a href="mailto:legal@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">legal@awafinance.com</a></p>
                <p className="mb-2">Support: <a href="mailto:support@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">support@awafinance.com</a></p>
                <p>Website: <a href="https://awafinance.com" className="text-purple-400 hover:text-purple-300 underline">awafinance.com</a></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-purple-500/30 pt-8 mt-8">
              <p className="leading-relaxed text-yellow-400/90">
                <strong>BY USING AWA FINANCE'S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</strong>
              </p>
            </section>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
