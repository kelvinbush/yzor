import React from "react";
import Image from "next/image";
import { ArrowRight, Award, TrendingUp, Shield, Users } from "lucide-react";

const Founder = () => {
  const founderQualities = [
    {
      icon: <Award className="w-6 h-6 text-[#FFD700]" />,
      text: "20 Years of Experience",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FFD700]" />,
      text: "Proven Track Record",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FFD700]" />,
      text: "Ethical Approach",
    },
    {
      icon: <Users className="w-6 h-6 text-[#FFD700]" />,
      text: "Client-Centric Focus",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFD700] rounded-l-full transform translate-x-1/3 opacity-10"></div>
          <h2 className="font-['Playfair_Display',serif] text-5xl mb-4 text-center text-[#0A2342]">
            Meet Our Founder
          </h2>
          <h3 className="text-2xl mb-12 text-center text-[#FFD700]">
            Guillaume de Lamaze – Your Trusted Financial Partner
          </h3>
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/3">
              <div className="relative w-full h-[300px] lg:h-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://guillaume.vercel.app/4.png"
                  alt="Guillaume de Lamaze"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] to-transparent opacity-30"></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {founderQualities.map((quality, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm"
                  >
                    <div className="bg-[#0A2342] p-1 rounded-full">
                      {quality.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      {quality.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg mb-8 leading-relaxed text-gray-700">
                With nearly 20 years of experience in financial advisory,
                Guillaume has established rigor, transparency, and
                responsibility as the foundational pillars of his professional
                commitment. At Yzor, his mission is to provide personalized
                guidance that aligns his interests with yours.
              </p>
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-['Playfair_Display',serif] text-xl mb-2 text-[#0A2342]">
                    Investing Alongside You
                  </h4>
                  <p className="text-gray-600">
                    Guillaume invests in every financial product he recommends,
                    ensuring that the same discipline he applies to his own
                    portfolio is reflected in your investments. This shared
                    commitment builds trust and clarity in your financial
                    journey.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-['Playfair_Display',serif] text-xl mb-2 text-[#0A2342]">
                    Commitment to Excellence
                  </h4>
                  <p className="text-gray-600">
                    Respecting regulatory standards, Guillaume focuses on clear
                    communication and understanding your long-term goals. This
                    ensures every decision is tailored to your aspirations,
                    delivering effective and secure solutions.
                  </p>
                </div>
              </div>
              <button className="bg-[#0A2342] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#FFD700] hover:text-[#0A2342] transition duration-300 flex items-center group">
                Read More About Guillaume
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
