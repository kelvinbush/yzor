import React from "react";
import { BarChart, DollarSign, Star, Users } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "100% Online",
      description:
        "Manage your savings from anywhere, anytime. Our platform provides seamless access to your investments, allowing you to make informed decisions on the go.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Diverse Offerings",
      description:
        "Choose from a wide range of investment options tailored to your goals. From stocks and bonds to ETFs and more, we provide the variety you need to build a robust portfolio.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Advice",
      description:
        "Get personalized guidance from our financial experts. Our team of seasoned professionals is dedicated to helping you navigate the complexities of wealth management.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Low Fees",
      description:
        "Maximize your returns with our competitive, transparent fee structure. We believe in providing value without hidden costs, ensuring more of your money works for you.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F8F8] to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-8 text-center text-[#0A2342]">
          Why Choose <span className="text-[#FFD700]">Yzor</span>?
        </h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg text-gray-600">
          Simplify your savings journey with our comprehensive, online platform.
          We offer diversified investment options, expert advice, and ultra-low
          fees to help you achieve your financial goals with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-4">
                <div className="mr-4 w-12 h-12 rounded-full bg-[#0A2342] bg-opacity-10 flex items-center justify-center text-[#0A2342] group-hover:bg-[#FFD700] group-hover:text-[#0A2342] transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl text-[#0A2342] group-hover:text-[#FFD700] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-16">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
