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
    window.scrollTo(0, 0)
  })

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
