import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFireflyPreset } from 'tsparticles-preset-firefly';
import MoshiurImg from '../assets/moshiur.jpg';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Social Media Manager & Trouble Shooter";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && textIndex <= fullText.length) {
        if (textIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setTimeout(() => setTextIndex(textIndex + 1), typingSpeed);
        }
      } else if (isDeleting && textIndex >= 0) {
        if (textIndex === 0) {
          setTimeout(() => setIsDeleting(false), 500);
        } else {
          setTimeout(() => setTextIndex(textIndex - 1), deletingSpeed);
        }
      }
    };
    handleTyping();
  }, [textIndex, isDeleting]);

  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
  }, []);

  const ActionButtons = () => (
    <div className='flex flex-col sm:flex-row gap-4 items-center'>
      <button className='text-xl text-white border border-white rounded-full px-5 py-2 hover:bg-green-500 hover:text-gray-900 transition-colors duration-300 shadow-lg'>
        Download Resume
      </button>
      <div className='flex gap-4 text-3xl text-white cursor-pointer'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          <FaYoutube />
        </a>
      </div>
    </div>
  );

  const MobileHireMeButton = () => (
    <motion.button
      className="relative z-10 px-6 py-2 bg-gray-900 text-white font-medium rounded-full overflow-hidden w-full md:hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Hire Me
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: [
            "linear-gradient(90deg, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80)",
            "linear-gradient(90deg, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80, #22d3ee)",
            "linear-gradient(90deg, #818cf8, #c084fc, #f472b6, #4ade80, #22d3ee, #818cf8)",
            "linear-gradient(90deg, #c084fc, #f472b6, #4ade80, #22d3ee, #818cf8, #c084fc)",
            "linear-gradient(90deg, #f472b6, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6)",
            "linear-gradient(90deg, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80)"
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "exclude"
        }}
      />
    </motion.button>
  );

  return (
    <section id="home" className='relative h-[700px] bg-gray-900 overflow-hidden'>
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="w-full h-full"
          options={{
            preset: "firefly",
            background: {
              color: "transparent",
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#fbbf24", "#4ade80", "#22d3ee", "#818cf8", "#c084fc", "#f472b6"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className='relative z-10 max-w-7xl mx-auto h-full px-4 md:px-8 py-8 md:py-0 flex flex-col md:flex-row items-center justify-center text-white'>
        {/* Mobile Image */}
        <div className='w-full flex justify-center md:hidden mb-8 order-1'>
          <img 
            src={MoshiurImg} 
            alt="Hero Image" 
            className='w-48 h-48 rounded-full shadow-lg border-4 border-amber-500 object-cover'
          />
        </div>
        
        {/* Left Content - Introduction */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1'>
          <h1 className='text-2xl md:text-3xl leading-none'>
            <div className="mb-[-8px]">Hi</div>
            <div className='text-4xl md:text-5xl font-bold mt-[7px] mb-[18px]'>I am Moshiur Rahman</div>
            <div className='text-xl md:text-2xl text-amber-300 mt-[8px] italic'>
              {fullText.substring(0, textIndex)}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block w-1 h-6 bg-amber-300 ml-1 align-middle"
              />
            </div>
          </h1>
          
          {/* Desktop Action Buttons */}
          <div className='hidden md:block mt-15'>
            <ActionButtons />
          </div>
        </div>
        
        {/* Desktop Image */}
        <div className='hidden md:flex md:w-1/2 justify-end order-2'>
          <img 
            src={MoshiurImg} 
            alt="Hero Image" 
            className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full shadow-lg border-4 border-amber-500 object-cover'
          />
        </div>
        
        {/* Mobile Action Buttons */}
        <div className='w-full md:hidden flex justify-center order-3 mt-8'>
          <ActionButtons />
        </div>
        
        {/* Mobile Hire Me Button at the bottom */}
        <div className='w-full md:hidden flex justify-center order-4 mt-8'>
          <MobileHireMeButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;