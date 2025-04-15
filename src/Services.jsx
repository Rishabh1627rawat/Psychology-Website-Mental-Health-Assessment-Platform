import React from "react";
import BannerImage from "./assets/Banner Image services.jpg"; 
import customerimg1 from "./assets/customer-img-1.jpg";
import customerimg2 from "./assets/customer-img-2.jpg";
import customerimg3 from "./assets/customer-img-3.jpg";
import customerimg4 from "./assets/customer-img-6.jpg";
import logoimage from "./assets/logo image.png";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica L.",
    position: "Co-Founder",
    text: "I can't thank my therapist enough for their compassionate approach. They helped me process my trauma in a safe environment, and I've seen significant improvements in my mental health.",
    image: "https://via.placeholder.com/100",
  },
];

const ServicesBox = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[330px] flex items-center">
        <img
          src={BannerImage}
          alt="About Us"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative text-center text-white w-full">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-lg">Home • Services</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white p-20 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">S E R V I C E S</h2>
        <p className="text-gray-600 text-center mb-8">
          Comprehensive services care for mind and wellness
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Personalized Individual Therapy",
              image: "/path/to/image1.jpg",
            },
            {
              title: "Anxiety and Depression Support",
              image: "/path/to/image2.jpg",
            },
            {
              title: "Youth and Adolescent Counseling",
              image: "/path/to/image3.jpg",
            },
            {
              title: "Supportive Couples Counseling",
              image: "/path/to/image4.jpg",
            },
            {
              title: "Mindfulness and Meditation Practices",
              image: "/path/to/image5.jpg",
            },
            {
              title: "Stress and Anger Management",
              image: "/path/to/image6.jpg",
            },
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-sm mb-2">{service.title}</h3>
              <a href="#" className="text-blue-500 text-xs hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View All Services
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12 ">
        <h2 className="text-3xl font-bold text-center mb-6">
          Client Stories Healing And Growth
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg p-8 rounded-lg">
          {/* Review Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center w-full lg:w-1/3">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center justify-center">
              <span className="mr-2">
                <img src={logoimage} alt="Brand Logo" />
              </span>
              Hipno
            </h3>
            <div className="flex justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
            </div>
            <p className="text-sm text-gray-600">Customer Review 30,000</p>

            <div className="flex justify-center mt-4">
              <img
                src={customerimg1}
                alt="User"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <img
                src={customerimg2}
                alt="User"
                className="w-8 h-8 rounded-full border border-gray-300 ml-[-10px]"
              />
              <img
                src={customerimg3}
                alt="User"
                className="w-8 h-8 rounded-full border border-gray-300 ml-[-10px]"
              />
              <span className="bg-gray-300 text-sm font-semibold text-white w-8 h-8 flex items-center justify-center rounded-full ml-[-10px]">
                30K
              </span>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md flex items-center">
            <img
              src={customerimg4}
              alt={testimonials[0].name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="ml-6">
              <p className="italic text-gray-600">{testimonials[0].text}</p>
              <h4 className="text-lg font-semibold mt-2">{testimonials[0].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[0].position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
