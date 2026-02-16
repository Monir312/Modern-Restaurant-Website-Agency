import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Let’s build your restaurant website and grow your business.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side - Contact Info */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-400">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">info@youragency.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-900 p-6 rounded-xl mt-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-500">
                Working Hours
              </h3>
              <p className="text-gray-400">Saturday - Thursday</p>
              <p className="text-gray-400">10:00 AM - 8:00 PM</p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full font-medium"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your restaurant project..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-80 rounded-xl border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;