"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A2342] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          alt="Wealth Management Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#0A2342] bg-opacity-95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-down">
              Your Future,
              <br />
              Our Focus
            </h1>
            <p className="text-xl sm:text-2xl text-[#FFD700] font-semibold">
              Personalized Wealth Management, Simplified
            </p>
            <p className="text-gray-300 max-w-lg">
              At Yzor, we believe that wealth management should be accessible,
              transparent, and tailored to your unique needs. Partner with us to
              navigate your financial journey with confidence and clarity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#FFD700] text-[#0A2342] px-8 py-3 rounded-lg font-bold hover:bg-[#E5C100] transition duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#0A2342] transition duration-300 transform hover:scale-105">
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-none"
              style={{
                transform: "perspective(1000px) rotateY(-6deg)",
                transition: "transform 0.5s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(0deg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(-6deg)")
              }
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Wealth Management"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0A2342]/50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2342] to-transparent">
                <p className="text-white text-lg font-semibold">
                  Expert Financial Guidance
                </p>
                <p className="text-gray-300 text-sm">
                  Tailored solutions for your unique needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A2342] to-transparent"></div>
    </section>
  );
}
