import Providers from "@/components/Providers";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial"; // ✅ correct import
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Providers />
      <Services />
      <Testimonial /> {/* ✅ Now valid */}
      <Contact />
      <Footer />
    </main>
  );
}
