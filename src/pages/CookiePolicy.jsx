import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavigationHeader from "@/components/landing/NavigationHeader";
import Footer from "@/components/landing/Footer";

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-gray-400 mb-8">
            Last Updated: November 12, 2025
          </p>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <p className="leading-relaxed mb-4">
                This Cookie Policy explains how AWA Finance ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website and use our services. This policy should be read together with our Privacy Policy.
              </p>
              <p className="leading-relaxed">
                By using our website, you consent to the use of cookies in accordance with this policy. If you do not agree to our use of cookies, you should adjust your browser settings or refrain from using our website.
              </p>
            </section>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="leading-relaxed">
                Cookies can be "persistent" (remain on your device after you close your browser) or "session" (deleted when you close your browser).
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                2.1 Essential Cookies
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="mb-3"><strong className="text-white">Purpose:</strong> These cookies are necessary for our website and services to function properly.</p>
                <p className="mb-3"><strong className="text-white">What they do:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Enable user authentication and account access</li>
                  <li>Maintain API session states</li>
                  <li>Remember your cookie consent preferences</li>
                  <li>Provide security features and fraud prevention</li>
                  <li>Enable core platform functionality</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Duration:</strong> Session or up to 1 year</p>
                <p className="mt-2 text-yellow-400/80 text-sm">
                  <strong>Note:</strong> These cookies cannot be disabled as they are essential for the service to work.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                2.2 Functional Cookies
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="mb-3"><strong className="text-white">Purpose:</strong> These cookies enhance your experience by remembering your preferences.</p>
                <p className="mb-3"><strong className="text-white">What they do:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Remember your language preference</li>
                  <li>Store your dashboard layout preferences</li>
                  <li>Remember your selected blockchain networks</li>
                  <li>Save your API documentation preferences</li>
                  <li>Remember form data to improve user experience</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Duration:</strong> Up to 2 years</p>
                <p className="mt-2 text-gray-400 text-sm">
                  You can disable these cookies, but some features may not work as expected.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                2.3 Analytics and Performance Cookies
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="mb-3"><strong className="text-white">Purpose:</strong> These cookies help us understand how visitors interact with our website and API platform.</p>
                <p className="mb-3"><strong className="text-white">What they do:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Track page views and user journeys</li>
                  <li>Measure API usage patterns and performance</li>
                  <li>Identify popular features and content</li>
                  <li>Detect errors and troubleshooting issues</li>
                  <li>Analyze conversion rates and user engagement</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Third-party services:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Google Analytics (anonymized IP)</li>
                  <li>Mixpanel (product analytics)</li>
                  <li>Sentry (error tracking)</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Duration:</strong> Up to 2 years</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Data collected is anonymized and used only for improving our services.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                2.4 Marketing and Advertising Cookies
              </h3>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-4">
                <p className="mb-3"><strong className="text-white">Purpose:</strong> These cookies are used to deliver relevant advertising and measure campaign effectiveness.</p>
                <p className="mb-3"><strong className="text-white">What they do:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Track ad impressions and clicks</li>
                  <li>Deliver targeted advertising based on interests</li>
                  <li>Measure advertising campaign performance</li>
                  <li>Prevent showing the same ad repeatedly</li>
                  <li>Enable remarketing to previous visitors</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Third-party services:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Google Ads</li>
                  <li>LinkedIn Marketing</li>
                  <li>Twitter Ads</li>
                  <li>Facebook Pixel</li>
                </ul>
                <p className="mt-3"><strong className="text-white">Duration:</strong> Up to 2 years</p>
                <p className="mt-2 text-gray-400 text-sm">
                  You can opt out of these cookies through your cookie preferences or browser settings.
                </p>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Third-Party Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and they are governed by the privacy policies of the respective third parties.
              </p>
              <p className="leading-relaxed mb-4">
                Third-party services we use include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Analytics Providers:</strong> Google Analytics, Mixpanel, Amplitude</li>
                <li><strong>Advertising Networks:</strong> Google Ads, LinkedIn, Twitter, Facebook</li>
                <li><strong>Communication Tools:</strong> Intercom, Zendesk (customer support)</li>
                <li><strong>Payment Processors:</strong> Stripe (for enterprise billing)</li>
                <li><strong>CDN Providers:</strong> Cloudflare, AWS</li>
                <li><strong>Security Services:</strong> reCAPTCHA, Cloudflare (bot protection)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We recommend reviewing the privacy policies of these third parties to understand their data practices.
              </p>
            </section>

            {/* Local Storage and Similar Technologies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Local Storage and Similar Technologies
              </h2>
              <p className="leading-relaxed mb-4">
                In addition to cookies, we may use other browser storage technologies:
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.1 Local Storage
              </h3>
              <p className="leading-relaxed mb-4">
                HTML5 local storage allows us to store data locally in your browser. We use it for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Caching API responses for better performance</li>
                <li>Storing user preferences and settings</li>
                <li>Maintaining application state</li>
                <li>Reducing API calls and improving load times</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.2 Session Storage
              </h3>
              <p className="leading-relaxed mb-4">
                Session storage is cleared when you close your browser and is used for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining temporary session data</li>
                <li>Storing non-sensitive temporary information</li>
                <li>Managing multi-step workflows</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                4.3 Blockchain Wallet Connections
              </h3>
              <p className="leading-relaxed mb-4">
                When you connect a Web3 wallet (e.g., MetaMask), the connection state may be stored locally. This is managed by the wallet provider, not by cookies.
              </p>
            </section>

            {/* Cookie Consent */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Cookie Consent and Your Choices
              </h2>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                5.1 Consent Banner
              </h3>
              <p className="leading-relaxed mb-4">
                When you first visit our website, you will see a cookie consent banner. You can choose to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences by category</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                5.2 Managing Cookie Preferences
              </h3>
              <p className="leading-relaxed mb-4">
                You can change your cookie preferences at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clicking the "Cookie Settings" link in our website footer</li>
                <li>Accessing your account settings (for logged-in users)</li>
                <li>Using your browser's cookie management settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mb-3 mt-6">
                5.3 Browser Settings
              </h3>
              <p className="leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Set exceptions for specific websites</li>
              </ul>
              <p className="leading-relaxed mt-4 mb-4">
                To learn how to manage cookies in your browser:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
              <p className="leading-relaxed mt-4 text-yellow-400/80">
                <strong>Note:</strong> Blocking essential cookies may prevent you from accessing certain features of our platform.
              </p>
            </section>

            {/* Do Not Track */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Do Not Track Signals
              </h2>
              <p className="leading-relaxed">
                Some browsers offer a "Do Not Track" (DNT) signal. Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals, but we provide cookie opt-out mechanisms as described above. We will update this policy if industry standards change.
              </p>
            </section>

            {/* Opt-Out Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Opt-Out of Third-Party Tracking
              </h2>
              <p className="leading-relaxed mb-4">
                You can opt out of third-party advertising cookies through these resources:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">adssettings.google.com</a></li>
                <li><strong>NAI Opt-Out:</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">optout.networkadvertising.org</a></li>
                <li><strong>DAA Opt-Out:</strong> <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">optout.aboutads.info</a></li>
                <li><strong>Your Online Choices (EU):</strong> <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">youronlinechoices.eu</a></li>
              </ul>
            </section>

            {/* Mobile App Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Mobile Applications
              </h2>
              <p className="leading-relaxed mb-4">
                If you access AWA Finance through a mobile application, we may use mobile identifiers and SDKs for similar purposes as cookies. You can control mobile tracking through your device settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking → Disable "Allow Apps to Request to Track"</li>
                <li><strong>Android:</strong> Settings → Privacy → Ads → Opt out of Ads Personalization</li>
              </ul>
            </section>

            {/* Changes to Cookie Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Cookie Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. We will post the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">AWA Finance</strong></p>
                <p className="mb-2">Email: <a href="mailto:privacy@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">privacy@awafinance.com</a></p>
                <p className="mb-2">Cookie Questions: <a href="mailto:cookies@awafinance.com" className="text-purple-400 hover:text-purple-300 underline">cookies@awafinance.com</a></p>
                <p>Website: <a href="https://awafinance.com" className="text-purple-400 hover:text-purple-300 underline">awafinance.com</a></p>
              </div>
            </section>

            {/* Summary Table */}
            <section className="border-t border-purple-500/30 pt-8 mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookie Summary Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-3 px-2 text-white">Category</th>
                      <th className="text-left py-3 px-2 text-white">Purpose</th>
                      <th className="text-left py-3 px-2 text-white">Can Be Disabled?</th>
                      <th className="text-left py-3 px-2 text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-500/20">
                      <td className="py-3 px-2 text-purple-400">Essential</td>
                      <td className="py-3 px-2">Authentication, security, core functionality</td>
                      <td className="py-3 px-2 text-red-400">No</td>
                      <td className="py-3 px-2">Session - 1 year</td>
                    </tr>
                    <tr className="border-b border-purple-500/20">
                      <td className="py-3 px-2 text-purple-400">Functional</td>
                      <td className="py-3 px-2">Preferences, settings, user experience</td>
                      <td className="py-3 px-2 text-green-400">Yes</td>
                      <td className="py-3 px-2">Up to 2 years</td>
                    </tr>
                    <tr className="border-b border-purple-500/20">
                      <td className="py-3 px-2 text-purple-400">Analytics</td>
                      <td className="py-3 px-2">Usage tracking, performance monitoring</td>
                      <td className="py-3 px-2 text-green-400">Yes</td>
                      <td className="py-3 px-2">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-purple-400">Marketing</td>
                      <td className="py-3 px-2">Advertising, remarketing, campaigns</td>
                      <td className="py-3 px-2 text-green-400">Yes</td>
                      <td className="py-3 px-2">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
