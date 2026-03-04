import React, { useState } from "react";

const faqs = [
  {
    q: "What is Zophrix Arena?",
    a: "Zophrix Arena is an intelligent learning platform designed to help developers build real-world skills through hands-on challenges, guided paths, and competitions."
  },
  {
    q: "Is Arena suitable for beginners?",
    a: "Yes. Arena is structured for beginners to advanced learners, with step-by-step paths and practical problem-solving exercises."
  },
  {
    q: "Do you offer certificates?",
    a: "Yes. Industry-recognized certificates are provided upon successful completion of premium learning paths."
  },
  {
    q: "How does the premium subscription work?",
    a: "Premium unlocks structured paths, advanced problems, analytics, certificates, and priority support."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. You can cancel your subscription at any time from your account settings."
  }
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white px-6 lg:px-16 py-20 space-y-24">

      {/* ================= HOW CAN WE HELP ================= */}
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-900">
          How can we help?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Getting Started",
              desc: "New to Arena? Learn how to begin your journey effectively."
            },
            {
              title: "Billing & Plans",
              desc: "Questions about pricing, subscriptions, or payments."
            },
            {
              title: "Courses & Challenges",
              desc: "Explore learning paths, problems, and competitions."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900"
              >
                {item.q}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Still need help?
        </h2>

        <p className="text-gray-600 text-lg">
          Send us a message and our team will get back to you within 24 hours.
        </p>

        <form className=" rounded-2xl p-8 space-y-6 text-left">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Describe your issue..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#070127] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Submit Request
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contact;
