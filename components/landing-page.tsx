'use client'

import React from 'react'
import { ArrowRight, CheckCircle, Users, BarChart, DollarSign, Star } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="bg-[#F8F8F8] text-[#333333] font-['Roboto',sans-serif]">
      {/* Hero Section */}
      <section className="bg-[#0A2342] text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-['Playfair_Display',serif] text-5xl mb-4">Your Future, Our Focus</h1>
          <p className="text-xl mb-8">Personalized Wealth Management, Simplified</p>
          <p className="mb-8 max-w-2xl">At Yzor, we believe that wealth management should be accessible, transparent, and tailored to your unique needs. Partner with us to navigate your financial journey with confidence and clarity.</p>
          <div className="flex space-x-4">
            <button className="bg-[#FFD700] text-[#0A2342] px-6 py-3 rounded-lg font-bold hover:bg-[#E5C100] transition duration-300">Get Started</button>
            <button className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0A2342] transition duration-300">Book an Appointment</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-8 text-center">Why Choose Yzor?</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">Simplify your savings journey with our comprehensive, online platform. We offer diversified investment options, expert advice, and ultra-low fees to help you achieve your financial goals with ease.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart className="w-12 h-12 text-[#008080] mb-4" />, title: "100% Online", description: "Manage your savings from anywhere, anytime." },
              { icon: <DollarSign className="w-12 h-12 text-[#008080] mb-4" />, title: "Diverse Offerings", description: "Choose from a wide range of investment options." },
              { icon: <Users className="w-12 h-12 text-[#008080] mb-4" />, title: "Expert Advice", description: "Get personalized guidance from our financial experts." },
              { icon: <Star className="w-12 h-12 text-[#008080] mb-4" />, title: "Low Fees", description: "Maximize your returns with minimal costs." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {feature.icon}
                <h3 className="font-['Playfair_Display',serif] text-2xl mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[#0A2342] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-8 text-center">Our Approach</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">At Yzor, our approach is built on rigor, transparency, and responsibility. We provide personalized guidance that aligns our interests with yours, ensuring disciplined and strategic investment decisions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Trust and Clarity", description: "Every investment is meticulously selected to meet high standards of security and performance, providing you with peace of mind and confidence in your financial future." },
              { title: "Personalized Guidance", description: "We believe that every client is unique. Our tailored financial strategies are designed to fit your specific needs and goals, aligning perfectly with your aspirations." },
              { title: "Commitment to Excellence", description: "Guided by a profound respect for regulatory standards, we ensure that all our financial solutions are compliant and ethically sound, safeguarding your investments and upholding the integrity of our services." },
              { title: "Investing with Discipline", description: "By investing alongside our clients, we demonstrate our commitment to the same level of discipline and diligence we expect from you, fostering a strong, trust-based relationship." },
            ].map((approach, index) => (
              <div key={index} className="bg-white text-[#333333] p-6 rounded-lg shadow-md">
                <h3 className="font-['Playfair_Display',serif] text-2xl mb-2">{approach.title}</h3>
                <p>{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-4 text-center">Meet Our Founder</h2>
          <h3 className="text-2xl mb-8 text-center text-[#008080]">Guillaume de Lamaze – Your Trusted Financial Partner</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img src="/placeholder.svg?height=400&width=300" alt="Guillaume de Lamaze" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="mb-4">With nearly 20 years of experience in financial advisory, Guillaume has established rigor, transparency, and responsibility as the foundational pillars of his professional commitment. At Yzor, his mission is to provide personalized guidance that aligns his interests with yours.</p>
              <ul className="list-disc list-inside mb-6">
                <li className="mb-2"><strong>Investing Alongside You:</strong> Guillaume invests in every financial product he recommends, ensuring that the same discipline he applies to his own portfolio is reflected in your investments. This shared commitment builds trust and clarity in your financial journey.</li>
                <li><strong>Commitment to Excellence:</strong> Respecting regulatory standards, Guillaume focuses on clear communication and understanding your long-term goals. This ensures every decision is tailored to your aspirations, delivering effective and secure solutions.</li>
              </ul>
              <button className="bg-[#0A2342] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#08192E] transition duration-300 flex items-center">
                Read More About Guillaume
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-[#0A2342] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-8 text-center">Our Products</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">We specialize in providing a range of financial solutions to meet your unique needs. Our core offerings include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Life Insurance", description: "Secure your loved ones' future and build long-term wealth." },
              { title: "PER (Plan d'Épargne Retraite)", description: "Plan for a comfortable retirement with tax-efficient savings." },
              { title: "SCPI (Société Civile de Placement Immobilier)", description: "Invest in real estate and diversify your portfolio." },
              { title: "Livret A", description: "A Livret A offers a simple way to save." },
            ].map((product, index) => (
              <div key={index} className="bg-white text-[#333333] p-6 rounded-lg shadow-md">
                <h3 className="font-['Playfair_Display',serif] text-2xl mb-2">{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-8 text-center">What Our Clients Say</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">Discover how Yzor has helped clients achieve their financial goals with trust and expertise.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Yzor's personalized approach transformed my savings strategy. Highly recommend!" },
              { quote: "Guillaume's expertise and transparency gave me the confidence to invest wisely." },
              { quote: "The low fees and diverse offerings at Yzor maximized my returns effortlessly." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=50&width=50" alt="Client" className="rounded-full mr-4" />
                  <div>
                    <p className="font-bold">Client Name</p>
                    <p className="text-sm text-gray-600">Position, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-[#0A2342] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display',serif] text-4xl mb-8 text-center">Get in Touch</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">Ready to take control of your financial future? Contact us today to book an appointment or learn more about our services.</p>
          <div className="bg-white text-[#333333] p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md" required></textarea>
              </div>
              <button type="submit" className="bg-[#0A2342] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#08192E] transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="mt-8 text-center">
            <p>Email: contact@yzor.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}