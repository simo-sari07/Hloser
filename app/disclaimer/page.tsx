"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerRefund() {
  const disclaimerItems = [
    {
      title: "Risk of Loss",
      content: "Trading stocks, options, futures, forex, or crypto carries substantial risk and may result in partial or total loss of your investment. You should only trade with money you can afford to lose. All trading decisions are your responsibility, and past performance is not indicative of future results.",
    },
    {
      title: "Educational Purposes Only",
      content: "Content shared within U.T.M, including discussions, analyses, and livestreams, is for educational purposes only and does not constitute financial, investment, or trading advice. Conduct your own research before making decisions.",
    },
    {
      title: "No Guarantees",
      content: "U.T.M does not guarantee accuracy, completeness, or any specific trading outcomes. All trading decisions are made at your own risk, and U.T.M, its owners, moderators, and members are not liable for any losses.",
    },
    {
      title: "Independent Evaluation",
      content: "You are responsible for evaluating the suitability of any strategies or recommendations based on your individual circumstances.",
    },
    {
      title: "Testimonials",
      content: "User experiences shared in U.T.M or on associated channels are individual and may not reflect typical results. They are not guarantees of future performance.",
    },
    {
      title: "Not an Endorsement",
      content: "Mentions of financial products, services, or platforms do not constitute endorsements. Perform your own due diligence before using any mentioned services.",
    },
    {
      title: "Accepted Risk",
      content: "By participating in U.T.M, you accept that trading involves inherent risks, and U.T.M is not responsible for any trading outcomes, losses, or damages.",
    },
  ]

  const refundItems = [
    {
      title: "All Sales Are Final",
      content: "Due to the digital nature of our services and instant access to premium content, all payments are non-refundable.",
    },
    {
      title: "Recurring Payments",
      content: "Subscriptions are billed automatically each month. They will renew unless canceled at least 3 days before the next billing date.",
    },
    {
      title: "Cancellation Policy",
      content: "To avoid being charged for the next month, cancel your subscription at least 3 days before renewal. Late cancellations do not prevent the next payment.",
    },
    {
      title: "No Refund After Renewal",
      content: "Once a renewal payment is processed, it cannot be refunded under any circumstances, even if the service was unused.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
      
          
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Disclaimer & Refund Policy</h1>
          
          <div className="text-base text-gray-700 leading-relaxed space-y-10">
            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-900">Disclaimer</h2>
              <p className="mb-6">
                University of Trading MA (U.T.M) is a community for traders to share knowledge, insights, and experiences related to financial markets. By participating in U.T.M, you acknowledge and agree to the following:
              </p>
              <div className="space-y-4">
                {disclaimerItems.map((item) => (
                  <div key={item.title}>
                    <span className="font-semibold text-gray-900">{item.title}:</span> {item.content}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-900">Refund Policy</h2>
              <div className="space-y-4">
                {refundItems.map((item) => (
                  <div key={item.title}>
                    <span className="font-semibold text-gray-900">{item.title}:</span> {item.content}
                  </div>
                ))}
              </div>
              <p className="mt-6 font-medium">By continuing your subscription, you fully accept and agree to these terms.</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="font-semibold text-xl mb-3 text-gray-900">Contact</h2>
              <p>
                For any questions or concerns regarding these policies, please contact:{" "}
                <a href="mailto:support@universityoftradingma.com" className="text-blue-600 underline hover:text-blue-800">
                  support@universityoftradingma.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}