import Approach from "./_components/approach";
import ContactUs from "./_components/contact-us";
import Founder from "./_components/founder";
import Hero from "./_components/hero";
import Products from "./_components/products";
import Testimonials from "./_components/testimonials";
import WhyUs from "./_components/why-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Approach />
      <Products />
      <Founder />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
