// app/page.tsx
import Navbar from '../components/Navbar';  
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import HowWeWork  from '../components/HowWeWork';
import ContactUs from '@/components/ContactUs';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <AboutUs/>
      <ContactUs />
    <Footer/>
    </main>
  );
}