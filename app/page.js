"use client";
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Stuff from "./components/Stuff";

export default function Home() {
 
  useEffect(() => {
    window.scrollTo(0, 0);

    // Add scroll event listener
    const handleScroll = () => {
      // If user tries to scroll above a certain limit (e.g., 0 in this case),
      // reset the scroll position
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto pxpy-4">
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        <Stuff />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
