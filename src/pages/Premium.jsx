import React, { useState } from "react";
import {
  ShieldCheck,
  Code,
  Trophy,
  Clock,
  BarChart3,
  Users,
  Zap,
  Lock,
  Layers,
  Headphones,
  ChevronDown
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Hands-on Coding",
    desc: "Solve carefully curated, real-world coding problems that mirror industry scenarios, helping you build practical skills rather than just theoretical knowledge.",
    color: "text-indigo-600",
    bg: "bg-indigo-100"
  },
  {
    icon: Trophy,
    title: "Competitive Challenges",
    desc: "Take part in timed coding contests, benchmark your performance against peers, and steadily improve your problem-solving speed and accuracy.",
    color: "text-yellow-600",
    bg: "bg-yellow-100"
  },
  {
    icon: ShieldCheck,
    title: "Interview-Ready Preparation",
    desc: "Practice problems and patterns frequently asked in technical interviews, designed to strengthen both your confidence and structured thinking.",
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    icon: Clock,
    title: "Flexible Learning Experience",
    desc: "Learn at your own pace with full access to content anytime, allowing you to balance studies, work, and personal commitments effortlessly.",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    icon: BarChart3,
    title: "Advanced Progress Tracking",
    desc: "Track your learning journey with detailed insights, performance metrics, and progress reports that highlight strengths and improvement areas.",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    icon: Users,
    title: "Community-Driven Learning",
    desc: "Collaborate, compete, and grow with a vibrant developer community where learning is enhanced through shared knowledge and discussions.",
    color: "text-pink-600",
    bg: "bg-pink-100"
  },
  {
    icon: Zap,
    title: "Instant Feedback & Results",
    desc: "Receive immediate feedback on your submissions with detailed explanations, enabling faster learning and continuous improvement.",
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  {
    icon: Lock,
    title: "Exclusive Premium Content",
    desc: "Unlock advanced challenges, premium problem sets, and curated content available only to subscribed members.",
    color: "text-red-600",
    bg: "bg-red-100"
  },
  {
    icon: Layers,
    title: "Structured Learning Paths",
    desc: "Follow well-defined learning paths designed to take you from fundamentals to advanced concepts in a clear, step-by-step manner.",
    color: "text-teal-600",
    bg: "bg-teal-100"
  },
  {
    icon: Headphones,
    title: "Expert Guidance & Support",
    desc: "Get reliable assistance from experienced mentors and technical experts whenever you need help during your learning journey.",
    color: "text-cyan-600",
    bg: "bg-cyan-100"
  }
];

const faqs = [
  {
    question: "What do I get with a premium subscription?",
    answer:
      "A premium subscription gives you full access to all advanced features, including exclusive problem sets, structured learning paths, detailed progress analytics, premium challenges, and priority support."
  },
  {
    question: "What are premium solutions? Can I see a sample?",
    answer:
      "Premium solutions include expert-written, step-by-step explanations focusing on problem-solving strategies, edge cases, and optimization techniques."
  },
  {
    question: "How are questions grouped by company?",
    answer:
      "Questions are grouped based on real interview patterns and frequently asked topics reported by candidates."
  },
  {
    question: "I subscribed but still don’t have access. What should I do?",
    answer:
      "Try logging out and back in. If the issue continues, contact support with payment details."
  },
  {
    question: "What if I subscribe and want to cancel?",
    answer:
      "You can cancel anytime. Access continues until the billing period ends."
  },
  {
    question: "Can I subscribe with my current rates?",
    answer:
      "Yes. Your current rate remains valid for the active billing cycle."
  }
];

const Premium = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // 🔐 ROLE CHECK
  const role = sessionStorage.getItem("role");
  const isStudent = role === "student";

  // 🎨 TEXT THEMES
  const headingText = isStudent ? "text-gray-300" : "text-gray-900";
  const subText = isStudent ? "text-gray-300" : "text-gray-600";

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-6 lg:px-20 py-20">

      {/* HEADER */}
      <div className="text-center space-y-4 mb-16">
        <h1 className={`text-5xl font-bold ${headingText}`}>Premium</h1>
        <p className={`text-lg ${subText}`}>
          Smart plans. Real results. Zero compromise.
        </p>
      </div>

      {/* PRICING */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Monthly */}
        <div className="bg-white rounded-2xl p-8 shadow-md border">
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Monthly</h3>
          <p className="text-gray-500 mb-6 font-bold ">Billed monthly</p>
          <div>
            <p className="text-gray-500 mb-6 font-semibold " >Get complete access to all premium features with our monthly plan perfect for short-term commitments.</p>
          </div>
          <div className="text-4xl font-bold mb-6 text-gray-800 "> ₹ 1500 <span className="text-base font-medium text-gray-500">/mo

          </span>
          </div>
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

        {/* Yearly */}
        <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-400 h-full flex flex-col">
          <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full"> Most popular </span>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">Yearly</h3>
          <p className="text-gray-500 mb-4  font-bold text-gary-800">Billed yearly (₹ 12000 )</p>
          <p className="text-gray-500 mb-6 font-semibold" > Upgrade to our most popular plan at ₹12,000/year and enjoy premium access for just ₹1,000/month, saving 33% compared to the monthly plan.</p>
          <div className="text-4xl font-bold mb-2 text-gray-800"> ₹ 1000
            <span className="text-base font-medium text-gray-500">/mo</span>
          </div>
          <p className="text-sm text-gray-600 mb-6 font-semibold"> Save over 30% compared to monthly billing </p>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className={`text-4xl font-bold text-center mb-16 ${headingText}`}>
          Everything you need to succeed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className={`w-24 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${headingText}`}>
                    {item.title}
                  </h4>
                  <p className={`${subText} font-medium`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 ${headingText}`}>
          Need Help?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-xl">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between px-6 py-5 text-left"
              >
                <span className=" text-gray-900 font-bold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 font-semibold">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Premium;
