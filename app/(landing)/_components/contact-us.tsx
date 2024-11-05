import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-4 text-center text-[#0A2342]">
          Get in Touch
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg text-gray-600">
          Ready to take control of your financial future? Contact us today to
          book an appointment or learn more about our services.
        </p>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[#0A2342] p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A2342]">Email</h3>
                <a
                  href="mailto:contact@yzor.com"
                  className="text-gray-600 hover:text-[#0A2342] transition duration-300"
                >
                  contact@yzor.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#0A2342] p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A2342]">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-gray-600 hover:text-[#0A2342] transition duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#0A2342] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A2342]">Address</h3>
                <p className="text-gray-600">
                  123 Financial Street, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A2342] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
