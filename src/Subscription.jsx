import React from "react";
import BannerImage from "./assets/Banner image.png";  // Update with correct path

const Subscription = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Basic Stress Management Tips",
        "General Anxiety Guidance",
        "Limited Community Support",
      ],
      highlight: false,
    },
    {
      name: "Basic Plan",
      price: "$29",
      features: [
        "Individual Therapy Sessions",
        "Personalized Care Plan",
        "Initial Assessment",
        "Flexible Scheduling",
      ],
      highlight: false,
    },
    {
      name: "Standard Plan",
      price: "$39",
      features: [
        "Everything in Basic Plan",
        "24/7 Chat Support",
        "Meditation & Mindfulness Tools",
      ],
      highlight: true, // Highlights the most popular plan
    },
    {
      name: "Premium Plan",
      price: "$49",
      features: [
        "Everything in Standard Plan",
        "One-on-One Sessions",
        "Advanced Psychological Reports",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4">
      
      {/* Banner Section */}
      <div className="relative w-full h-[320px] flex items-center">
        <img
          src={BannerImage}
          alt="About Us"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative text-center text-white w-full">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-lg">Home • Services</p>
        </div>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-10 mb-6 text-center">
        Choose Your Plan
      </h2>

      {/* Grid for Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-3 md:p-4 rounded-lg shadow-lg text-center ${
              plan.highlight ? "bg-[#9b9a84] text-white" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-lg font-bold md:text-xl">
              {plan.price} {plan.price !== "Free" && "/ month"}
            </h3>
            <p className="text-xs mt-1 md:mt-2">{plan.name}</p>
            <p className="text-xs md:text-sm mt-2">
              {plan.name === "Free Plan"
                ? "Limited access to mental health resources."
                : "Affordable therapy tailored for your mental health journey."}
            </p>

            <ul className="mt-2 space-y-1 text-xs md:text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center space-x-1">
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-3 w-full py-1 text-xs md:text-sm rounded-md font-semibold transition-transform transform hover:scale-105 ${
                plan.highlight ? "bg-white text-[#9b9a84]" : "bg-[#9b9a84] text-white"
              }`}
            >
              {plan.name === "Free Plan" ? "Start for Free" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex flex-wrap justify-center space-x-3 md:space-x-4 text-gray-600 text-xs">
        <p>📅 Get 30-day free trial</p>
        <p>💳 No hidden fees</p>
        <p>🔄 Cancel anytime</p>
      </div>
    </div>
  );
};

export default Subscription;
