"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button'; // Assuming your custom button

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-between px-8 md:px-20 overflow-hidden bg-[var(--secondary-color)]">
      
      {/* Background Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 text-4xl opacity-30"
      >
        💖
      </motion.div>

      {/* Left Content */}
      <div className="flex-1 z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-bold text-[var(--text-main)] leading-tight"
        >
          Hugs That Speak <br /> 
          <span className="text-[var(--primary-color)]">Louder Than Words 💖</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg"
        >
          Premium soft toys for every emotion. Find your perfect cuddle companion today.
        </motion.p>

        <div className="mt-10 flex gap-4">
        <Button variant="primary">
            Shop Now
        </Button>
        <Button variant="outline">
            Explore Gifts
        </Button>
        </div>
      </div>

      {/* Right Image / 3D Model */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex-1 flex justify-center items-center relative"
      >
        {/* The BIG Teddy Image */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <img 
            src="/images/hero-teddy.png" 
            alt="Giant Soft Teddy" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          
          {/* Animated hearts around the teddy */}
          <motion.span 
            animate={{ y: [0, -40], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-0 text-3xl"
          >
            ✨
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;