import React from "react";
import BannerImage from "./assets/BannerImageContactus.jpg"

const ContactUs = () => {
  return (
<div>
    <div className="relative w-full h-[320px] flex items-center">
            <img
              src={BannerImage}
              alt="About Us"
              className="absolute top-0 left-0 w-full h-full object-cover "
            />
            <div className="relative text-center text-white w-full">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-lg">Home • Contact Us</p>
            </div>
          </div>
    
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Contact Form */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg mb-10">
        <h3 className="text-gray-600 text-center uppercase tracking-widest text-sm mb-2">
          • Contact Us
        </h3>
        <h1 className="text-2xl font-semibold text-center mb-6">
          Get in touch with us
        </h1>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="First name"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Phone number"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
            />
            <input
              type="email"
              placeholder="E-mail address"
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
            />
          </div>

          <textarea
            placeholder="Write message"
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm h-24"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition text-sm"
            >
              Submit Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="bg-[#9B9972] p-8 rounded-lg shadow-lg text-white w-full max-w-4xl flex flex-col md:flex-row justify-between">
        <div className="flex items-center space-x-5 ">
          <div className="bg-white p-3 rounded-md">
            <img src="https://img.icons8.com/ios/50/000000/home.png" alt="Home" className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Our Address</h3>
            <p className="text-sm">123 Example Street London, EC1A 1AA UK</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-md">
            <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="Phone" className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone Number</h3>
            <p className="text-sm">(+05) 698 - 548 - 6354</p>
            <p className="text-sm">(+07) 358 - 879 - 3257</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-md">
            <img src="https://img.icons8.com/ios/50/000000/email.png" alt="Email" className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">E-Mail Support</h3>
            <p className="text-sm">hello@domain12.com</p>
            <p className="text-sm">hello@domain12.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28033.64500565675!2d77.25836797754621!3d28.5635874662275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce391b053aeef%3A0x3c66da6bc8fccdde!2sNew%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1742233294016!5m2!1sen!2sin" 
        width="800" 
        height="450" 
        style={{ border: "0" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>"
    
    </div>
    </div>
    </div>
  );
};

export default ContactUs;
