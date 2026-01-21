import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyVelena from '@/components/WhyVelena';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyVelena />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
