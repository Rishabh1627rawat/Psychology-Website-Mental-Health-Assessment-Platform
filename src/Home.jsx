import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import videoBg from "./assets/Psychology.mp4";
import Services from "./Services"; 
import aboutImage1 from "./assets/about-img-1.jpg"; 
import aboutImage2 from "./assets/img-2.png"; 
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import FAQSection from "./Faq";
import test from "./assets/Psychological test.jpg"


const Home = () => {
  const navigate = useNavigate(); // ✅ Use useNavigate hook

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black flex items-center px-10">
        {/* Background Video */}
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-40" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative max-w-lg text-white">
          <h2 className="text-[10px] uppercase tracking-wide">Welcome to Hipno</h2>
          <h1 className="text-xl font-semibold mt-2 leading-tight">
            Join Our Team of <br /> Caring Professionals
          </h1>
          <p className="mt-2 text-[10px] text-gray-300">
            Passionate about mental health? Join our dedicated team today.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex space-x-2">
            <button className="bg-[#9b9a84] text-white px-3 py-1 text-[10px] rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
            <button 
              className="border border-gray-400 text-white px-3 py-1 text-[10px] rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => navigate("/TestFlow")} // ✅ Corrected navigation
            >
              Book a test  
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-10 py-12 bg-gray-100">
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <img src={aboutImage1} alt="Therapy Session" className="rounded-2xl w-full h-auto object-cover" />
          <img src={aboutImage2} alt="Counseling" className="rounded-2xl w-full h-auto object-cover" />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9b9a84] rounded-full"></div>
            <span className="text-sm text-[#9b9a84] uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-2">
            Guiding Minds, Healing Hearts – Finding Peace
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            At our mental therapy and counseling center, we are dedicated to guiding individuals
            on a journey toward inner peace and resilience.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our vision is to create a world where mental wellness is accessible, stigma-free,
                and empowering, enabling individuals to lead fulfilling lives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <ul className="text-sm text-gray-600 space-y-2 mt-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                  Provide Compassionate Care
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                  Promote Mental Wellness
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                  Encourage Lifelong Healing
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex items-center space-x-4">
            <Link to="/about">
              <button className="bg-[#9b9a84] hover:bg-black text-white px-4 py-2 text-sm rounded-md transition duration-300">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 text-sm rounded-md transition duration-300">
                Get In Touch
              </button>
            </Link>
          </div>
          
        </div>
      </div>
      {/* Features & Benefits Section */}
<div className="py-10 px-6 bg-white">
  <h2 className="text-2xl font-bold text-center text-gray-800">Why Choose Us?</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">🔍 AI-Based Insights</h3>
      <p className="text-gray-600 mt-2">Our tests use AI to analyze patterns and provide deep insights.</p>
    </div>
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">📊 Data-Driven Analysis</h3>
      <p className="text-gray-600 mt-2">Your results are backed by psychology and data science.</p>
    </div>
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">🧠 Personalized Advice</h3>
      <p className="text-gray-600 mt-2">Receive tailored recommendations for your mental well-being.</p>
    </div>
  </div>
</div>

{/* Image-Based Psychological Test Preview */}
<div className="bg-gray-50 py-10 px-6">
  <h2 className="text-2xl font-bold text-center text-gray-800">Take Our Visual Psychological Test</h2>
  <p className="text-center text-gray-600 mt-2">Analyze your emotions through images.</p>
  <div className="mt-6 flex justify-center">
    <img src={test} alt="Psychology Test" className="w-96 rounded-lg shadow-md" />
  </div>
  <div className="mt-4 text-center">
    <Link to="/TestFlow">
      <button className="bg-[#9b9a84] hover:bg-black text-white px-4 py-2 rounded-md transition">
        Start the Test
      </button>
    </Link>
  </div>
</div>


      {/* Services Section */}
      <FAQSection /> {/* Embedded FAQ Section */}
    </div>
  );
};

export default Home;
