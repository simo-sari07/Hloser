"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: `When you join U.T.M, we may collect personal information such as your name, email address, username, and any other information you voluntarily provide.

We may also automatically collect certain data related to your use of the platform, including account details, payment information, device information, and operating system.

Additionally, we may collect information when you communicate with us through emails, messages, or any other forms of interaction.`,
    },
    {
      title: "How We Use Your Information",
      content: `We may use the information we collect for various purposes, including but not limited to:

• Operating and maintaining U.T.M and its features.
• Communicating with you regarding your account or membership.
• Personalizing your user experience.
• Improving the content, structure, and offerings available within U.T.M.
• Analyzing trends, managing the platform, and gathering demographic insights.
• Complying with legal requirements and protecting our rights.`,
    },
    {
      title: "How We Share Your Information",
      content: `We may share your personal information with third parties under specific circumstances, such as:

• Service providers who assist in operating U.T.M and delivering our services.
• With your consent or at your direction, for example when you choose to share information publicly within the community.
• To comply with legal obligations or to enforce our policies.`,
    },
    {
      title: "Your Choices",
      content: `You have certain options regarding the personal information we collect, including:

• Choosing not to provide some types of information, understanding that this may limit access to certain features of U.T.M.
• Requesting updates or corrections to your personal information by contacting us.
• Opting out of promotional communications by following the instructions included in such messages.`,
    },
    {
      title: "Data Security",
      content: `We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, disclosure, alteration, or destruction.

These measures may include encryption, firewalls, access controls, and periodic security assessments.

However, please be aware that no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute protection. While we strive to safeguard your information, any transmission of data to us is done at your own risk.`,
    },
    {
      title: "Children's Privacy",
      content: `U.T.M is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors.

If you are under 18, please do not provide any personal information on the platform.`,
    },
    {
      title: "Changes to This Privacy Policy",
      content: `We may update or modify this Privacy Policy from time to time, and any changes will be posted on this page.

By continuing to use U.T.M after such changes are applied, you acknowledge and accept the updated Privacy Policy.`,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          
          <p className="text-base text-gray-600 mb-8">
            This Privacy Policy explains how University of Trading MA ("U.T.M", "we", "us", or "our") collects, uses, and shares personal information from users ("you", "your") of our educational trading community.
          </p>

          <div className="mb-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-base text-gray-700">
              By accessing or using U.T.M, you acknowledge and agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">{index + 1}. {section.title}</h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact Us</h2>
            <p className="text-base text-gray-700">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:{" "}
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