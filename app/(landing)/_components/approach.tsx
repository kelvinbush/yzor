import React from "react";

const Approach = () => {
  const approaches = [
    {
      title: "Trust and Clarity",
      description:
        "Every investment is meticulously selected to meet high standards of security and performance, providing you with peace of mind and confidence in your financial future.",
    },
    {
      title: "Personalized Guidance",
      description:
        "We believe that every client is unique. Our tailored financial strategies are designed to fit your specific needs and goals, aligning perfectly with your aspirations.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Guided by a profound respect for regulatory standards, we ensure that all our financial solutions are compliant and ethically sound, safeguarding your investments and upholding the integrity of our services.",
    },
    {
      title: "Investing with Discipline",
      description:
        "By investing alongside our clients, we demonstrate our commitment to the same level of discipline and diligence we expect from you, fostering a strong, trust-based relationship.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-8 text-center text-[#0A2342]">
          Our Approach
        </h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg text-gray-600">
          At Yzor, our approach is built on rigor, transparency, and
          responsibility. We provide personalized guidance that aligns our
          interests with yours, ensuring disciplined and strategic investment
          decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {approaches.map((approach, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-4px]">
                <h3 className="font-['Playfair_Display',serif] text-2xl mb-4 text-[#0A2342] group-hover:text-[#FFD700] transition-colors duration-300">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
                <div className="mt-6 h-1 w-16 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
