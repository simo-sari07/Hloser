"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  const sections = [
    {
      title: "Subscription Suspension and Cancellation",
      content: "If you subscribe to any paid features or premium services offered by U.T.M, we reserve the right to suspend or cancel your subscription at any time, without prior notice, and for any reason, including but not limited to violations of these Terms or failure to pay subscription fees.",
    },
    {
      title: "Disclaimer and Non-Refundable Policy",
      content: `All information provided within U.T.M is for educational and informational purposes only and should not be interpreted as financial, investment, or trading advice.

We do not guarantee the accuracy, completeness, or reliability of any content, and you agree that you use such information at your own risk.

All subscription fees and payments are non-refundable.`,
    },
    {
      title: "Limitations on Financial Guidance",
      content: `U.T.M does not provide financial, investment, or trading advice.

Any opinions, analyses, or insights shared by members or moderators are strictly educational and should not be considered professional financial advice.

You are solely responsible for your trading decisions and must conduct your own independent research before making any financial choices.`,
    },
    {
      title: "Breaches of Terms and Conditions",
      content: `We reserve the right to suspend or terminate your access to U.T.M if you breach these Terms or engage in harmful or disruptive behavior within the community.

We may pursue appropriate legal action against individuals or entities responsible for any violations.`,
    },
    {
      title: "Non-Disclosure Agreement (NDA)",
      content: `By joining U.T.M, you agree to be bound by the Non-Disclosure Agreement.

This NDA strictly prohibits sharing any confidential information, content, or material shared within U.T.M with third parties.

You agree to maintain full confidentiality and refrain from distributing or revealing internal information without prior authorization.`,
    },
    {
      title: "Service Modifications",
      content: `U.T.M reserves the right to modify, update, or discontinue the service at any time, with or without prior notice.

This includes changes to features, functionality, pricing, or service availability.

You understand and agree that U.T.M will not be liable for any modifications or discontinuation of the service, and that such changes are made at our sole discretion.

You are responsible for reviewing these Terms periodically for any updates.`,
    },
    {
      title: "Changes to Terms",
      content: `We may update or revise these Terms at any time without prior notice.

Any changes become effective immediately upon being posted on the platform.

Your continued use of U.T.M after such updates constitutes your acceptance of the revised Terms.`,
    },
    {
      title: "Governing Law",
      content: `These Terms and your use of U.T.M shall be governed by and construed in accordance with the laws of the United States.

Any disputes arising in connection with these Terms shall fall under the exclusive jurisdiction of the U.S. courts.`,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>
          
          <p className="text-base text-gray-600 mb-8">
            These Terms of Service ("Terms") govern your use of University of Trading MA ("U.T.M", "we", "us", or "our"). By accessing or using U.T.M, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you may not access or use the platform or any of its services.
          </p>

          <div className="mb-8 bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-base text-red-800 font-medium">
              ⚠️ Important: By accessing or using U.T.M, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact</h2>
            <p className="text-base text-gray-700">
              If you have any questions or concerns regarding these Terms of Service, please contact us at:{" "}
              <a href="mailto:support@universityoftradingma.com" className="text-blue-600 underline hover:text-blue-800">
                support@universityoftradingma.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}