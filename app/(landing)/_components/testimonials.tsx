import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Yzor's personalized approach transformed my savings strategy. Their expertise in wealth management has helped me secure a brighter financial future for my family. I'm impressed by their attention to detail and commitment to my success.",
      name: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      quote:
        "Guillaume's expertise and transparency gave me the confidence to invest wisely. His in-depth knowledge of the market and clear communication style made complex financial decisions much easier to understand and act upon.",
      name: "Michael Chen",
      position: "Senior Partner, Law Firm LLP",
      image: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    {
      quote:
        "The low fees and diverse offerings at Yzor maximized my returns effortlessly. Their innovative investment strategies and cutting-edge technology have significantly improved my portfolio performance. I couldn't be happier with the results.",
      name: "Emma Rodriguez",
      position: "Entrepreneur & Investor",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-8 text-center text-[#0A2342]">
          What Our Clients Say
        </h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg text-gray-600">
          Discover how Yzor has helped clients achieve their financial goals
          with trust and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-none transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700] opacity-5 rounded-bl-full transition-opacity duration-300 group-hover:opacity-20"></div>
              <Quote className="w-10 h-10 text-[#FFD700] opacity-20 mb-4" />
              <p className="mb-8 text-gray-700 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 relative mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#0A2342] group-hover:text-[#FFD700] transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
