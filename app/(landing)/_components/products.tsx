import React from "react";

const Products = () => {
  const products = [
    {
      title: "Life Insurance",
      description:
        "Secure your loved ones' future and build long-term wealth. Our comprehensive life insurance policies offer not just protection but also investment opportunities. With flexible premium options and a range of coverage levels, we ensure that your family's financial security is never compromised, no matter what life brings.",
      color: "bg-blue-100",
    },
    {
      title: "PER (Plan d'Épargne Retraite)",
      description:
        "Plan for a comfortable retirement with tax-efficient savings. The PER is a versatile retirement savings vehicle that allows you to build a substantial nest egg while enjoying significant tax advantages. Whether you're just starting your career or nearing retirement, our PER solutions can be tailored to meet your specific needs and retirement goals.",
      color: "bg-green-100",
    },
    {
      title: "SCPI (Société Civile de Placement Immobilier)",
      description:
        "Invest in real estate and diversify your portfolio without the hassles of direct property management. SCPIs offer a way to access the real estate market with relatively small amounts of capital. Benefit from regular rental income and potential capital appreciation, all managed by experienced professionals in the real estate sector.",
      color: "bg-yellow-100",
    },
    {
      title: "Livret A",
      description:
        "A Livret A offers a simple and secure way to save. This tax-free savings account is ideal for building an emergency fund or saving for short to medium-term goals. With guaranteed returns and the backing of the French state, the Livret A provides peace of mind for cautious savers while offering immediate liquidity for unexpected expenses.",
      color: "bg-red-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display',serif] text-5xl mb-8 text-center text-[#0A2342]">
          Products
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg text-gray-600">
          We specialize in providing a range of financial solutions to meet your
          unique needs. Our core offerings include:
        </p>
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-0.5 z-0 h-full bg-gray-200 transform -translate-x-1/2"></div>
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center relative mb-12 z-10 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div
                className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div
                  className={`${product.color} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className="font-['Playfair_Display',serif] text-2xl mb-3 text-[#0A2342]">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="text-[#0A2342] hover:text-[#FFD700] font-semibold transition duration-300 text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFD700] border-4 border-white shadow-lg flex items-center justify-center text-[#0A2342] font-bold text-lg mb-4 md:mb-0">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
