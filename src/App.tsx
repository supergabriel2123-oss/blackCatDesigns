import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-800 text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
