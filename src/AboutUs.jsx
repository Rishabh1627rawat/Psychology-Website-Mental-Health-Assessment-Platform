import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon, UserIcon, LockClosedIcon, ChartBarIcon } from "@heroicons/react/24/solid"; 
import aboutImage1 from "./assets/about-img-1.jpg"; // First Image
import aboutImage2 from "./assets/img-2.png"; // Second Image
import BannerImage from "./assets/Banner image.png"; // Banner Background Image
import aboutImage3 from "./assets/about our apporach.jpg";
import aboutImage4 from "./assets/about-our-apporach-img-1.jpg";
import aboutImage5 from "./assets/why-choose.jpg";
import aboutImage6 from "./assets/why-choose-img-2.jpg"

const AboutUs = () => {
  return (
    <div>
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[320px] flex items-center">
        <img
          src={BannerImage}
          alt="About Us"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative text-center text-white w-full">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">Home • About Us</p>
        </div>
      </div>

      {/* 🔹 Main About Us Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-10 py-12 bg-gray-100">
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <img
            src={aboutImage1}
            alt="Therapy Session"
            className="rounded-2xl w-full h-auto object-cover"
          />
          <img
            src={aboutImage2}
            alt="Counseling"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9b9a84] rounded-full"></div>
            <span className="text-sm text-[#9b9a84] uppercase tracking-widest">
              About Us
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-2">
            Guiding Minds, Healing Hearts – Finding Peace
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            At our mental therapy and counseling center, we are dedicated to
            guiding individuals on a journey toward inner peace and resilience.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our vision is to create a world where mental wellness is
                accessible, stigma-free, and empowering, enabling individuals to
                lead fulfilling lives.
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

          <div className="mt-4 flex items-center space-x-4">
            <button className="bg-[#9b9a84] hover:bg-black text-white px-4 py-2 text-sm rounded-md transition duration-300">
              Learn More
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 text-sm rounded-md transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Our Approach Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-[#FAFAFA]">
        <div className="lg:w-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9b9a84] rounded-full"></div>
            <span className="text-sm text-[#9b9a84] uppercase tracking-widest">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl font-serif mt-2 text-gray-900">
            Holistic support for mental wellness
          </h2>
          <p className="text-[14px] text-gray-600 mt-4">
            We provide personalized, compassionate care to nurture emotional
            well-being and promote self-discovery.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-end relative mt-10 lg:mt-0">
          <div className="relative">
            <img
              src={aboutImage4}
              alt="Counseling Session"
              className="rounded-lg shadow-lg w-[340px] h-[300px] object-cover"
            />
            <img
              src={aboutImage3}
              alt="Mental Health Support"
              className="absolute bottom-[-40px] right-[-30px] rounded-lg shadow-lg w-[280px] h-[200px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🆕 Why Choose Us Section */}
      <section className=" flex flex-col lg:flex-row items-center lg:space-x-12 px-6 lg:px-20 py-14 bg-white">      
      {/* Left Side - Image */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={aboutImage5}
          alt="Therapy Session"
          className="rounded-lg shadow-lg w-[380px] h-[580px]"
        />
        {/* Contact Us Badge */}
        <div className="absolute bottom-0 left-10 bg-white p-4 rounded-full shadow-md rotate-12">
          <span className="text-sm font-bold uppercase">Contact Us</span>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2">
      
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#9b9a84] rounded-full "></div>
          <span className="text-sm text-[#9b9a84] uppercase tracking-widest">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-2xl  mt-2 text-gray-900">
          Trusted Care, Lasting Positive Change
        </h2>
        <p className="text-gray-600 mt-4">
          With a commitment to compassionate, evidence-based care, we empower
          individuals to create lasting positive change in their lives. Our
          team of experienced therapists provides.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#9b9a84] text-white flex items-center justify-center rounded-md">
              <UserGroupIcon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900">Experienced Professionals</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#9b9a84] text-white flex items-center justify-center rounded-md">
              <UserIcon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900">Client-Centered Approach</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#9b9a84] text-white flex items-center justify-center rounded-md">
              <LockClosedIcon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900">Safe And Confidential Environment</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#9b9a84] text-white flex items-center justify-center rounded-md">
              <ChartBarIcon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900">Commitment To Growth</span>
          </div>
        </div>

        {/* Small Image & Contact Section */}
        <div className="flex flex-col lg:flex-row items-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
          <img
            src={aboutImage6}
            alt="Mental Health Support"
            className="rounded-lg shadow-lg w-[230px] h-[160px] object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Choosing Us for Mental Wellness</h3>
            <p className="text-sm text-gray-600 mt-2">
              Choosing us for your mental wellness means partnering with a
              dedicated team of professionals committed to your growth and
              healing.
            </p>
            <button className="bg-[#9b9a84] hover:bg-black text-white px-4 py-2 text-sm rounded-md transition duration-300 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>    
    </div>
  );
};

export default AboutUs;
