"use client";
import React, { useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import SceneComponent from "./SphereComponent";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-32 py-10 sm:py-16 lg:py-24 flex items-center justify-center h-screen transform lg:-translate-y-16">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center text-center sm:text-left sm:w-1/2 p-4"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{""}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Jack ',
                5000,
                'a Web Developer ',
                1000,
                'a Student',
                1000,
                'a Computer Builder ',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6">
            I'm a final-year BA (Hons) Business Management student and Course Representative at Manchester Metropolitan University. I live in Manchester but am also based in Cumbria.
          </p>
          <div className="space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className="px-6 py-3 w-full sm:w-auto rounded-full mb-3 sm:mb-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-bg-slate-200 text-white"
              onClick={() => {
                const scrollPercentage = 0.81;
                const scrollPosition = document.body.scrollHeight * scrollPercentage;
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

              }}
            >
              Hire Me
            </button>

            <button
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
            >
              <a
                href="/jackscv/public/cv/Jack%20Laverick%20CV%202023.doc"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>

          </div>
        </motion.div>
        <div className="relative sm:w-1/2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex justify-center items-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <SceneComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;