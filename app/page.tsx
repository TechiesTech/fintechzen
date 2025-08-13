// app/page.tsx
import Navbar from '../components/Navbar';  
import Hero from '../components/Hero';
import TopInfoBar from '@/components/TopInfoBar';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
        <TopInfoBar/>
      <Hero />
    </main>
  );
}