import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is mental therapy, and how can it help me?",
    answer:
      "It's essential to feel comfortable and understood by your therapist. If you don't feel a connection, it's okay to discuss your concerns.",
  },
  {
    question: "What if I don't feel a connection with my therapist?",
    answer:
      "You can talk to your therapist about your concerns or consider finding another therapist who better suits your needs.",
  },
  {
    question: "What should I expect in my first session?",
    answer:
      "Your first session typically involves discussing your history, concerns, and goals for therapy.",
  },
  {
    question: "Will therapy be covered by my insurance?",
    answer:
      "It depends on your insurance provider. Check with them to see if mental health services are covered.",
  },
  {
    question: "How long does therapy usually take?",
    answer:
      "The duration varies depending on your personal needs and progress, ranging from a few months to long-term therapy.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-500 text-white py-16 px-6 lg:px-10 flex flex-col lg:flex-row items-start justify-between">
      {/* Left Side - Title & Contact */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>

        <div className="mt-6 p-6 flex flex-col items-center">
          {/* User Avatars */}
          <div className="flex -space-x-2 mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="w-12 h-12 rounded-full border-2 border-gray-700"
              alt="User 1"
            />
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="w-12 h-12 rounded-full border-2 border-gray-700"
              alt="User 2"
            />
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              className="w-12 h-12 rounded-full border-2 border-gray-700"
              alt="User 3"
            />
          </div>

          {/* Question Text */}
          <p className="text-gray-300 text-center text-lg font-medium">
            Still have any question?
          </p>

          {/* Phone Number with Icon */}
          <p className="text-gray-300 text-center text-lg flex items-center gap-2 mt-2">
            <FaPhone /> +01 789 859 664
          </p>
        </div>
      </div>

      {/* Right Side - FAQ List (Transparent Questions) */}
      <div className="lg:w-2/3 mt-10 lg:mt-0">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center text-lg font-medium text-white hover:text-gray-400 transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
