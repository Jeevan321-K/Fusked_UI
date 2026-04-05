"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-[90vh] bg-white" />;

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-24 md:pt-28 pb-12 overflow-hidden z-10 bg-white">
      {/* Adjusted top padding to fix unnecessary gap below navbar */}

      {/* 1. SOFT BLUE RADIAL GLOW (The Figma Effect) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          // Change the 60% to 100% to make the blue spread further
          background: `radial-gradient(circle at 15% 35%, var(--secondary-color) 0%, rgba(255,255,255,0) 100%)`
        }}
      />

      {/* 2. FLOATING SPARKLES & HEARTS */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 left-1/4 text-pink-300 z-0 text-2xl hidden md:block"
      >
        ✨
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 left-10 text-pink-200 z-0 text-4xl hidden md:block"
      >
        💖
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute top-40 right-1/3 text-yellow-200 z-0 text-xl hidden md:block"
      >
        ✨
      </motion.div>
      <motion.div 
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
        className="absolute top-52 right-1/4 text-purple-300 z-0 text-3xl hidden md:block"
      >
        💖
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-20 right-1/2 text-pink-400 z-0 text-2xl hidden md:block"
      >
        💕
      </motion.div>
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5], rotate: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.2 }}
        className="absolute top-20 right-10 text-pink-200 z-0 text-5xl hidden md:block"
      >
        💘
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
        className="absolute bottom-1/3 left-1/3 text-yellow-300 z-0 text-2xl hidden md:block"
      >
        ⭐
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 2.5 }}
        className="absolute top-1/3 left-10 text-pink-300 z-0 text-3xl hidden md:block"
      >
        💗
      </motion.div>

      {/* 3. LEFT CONTENT */}
      <div className="flex-1 z-10 text-center md:text-left py-12">
        {/* Collection Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm mb-6"
        >
          <span className="text-pink-400 text-sm">✨</span>
          <span className="text-gray-500 text-xs font-medium tracking-wide uppercase">New Spring Collection 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-bold text-[#333] leading-[1.05] tracking-tight"
        >
          Cuddles That Last <br />
          <span className="text-[var(--primary-color)] opacity-80">Forever 💜</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed"
        >
          Discover our adorable collection of handcrafted teddy bears. Each bear is made with love to bring joy and comfort to your special moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
        >
          <Button variant="primary" className="px-10 py-4 shadow-pink-200 shadow-xl flex items-center gap-2">
            Shop Now 💖
          </Button>
          <Button variant="outline" className="px-10 py-4 border-gray-100 text-gray-600 bg-white hover:shadow-md transition-all">
            View Collection
          </Button>
        </motion.div>

        {/* Statistics Section (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex gap-8 md:gap-12 border-t border-gray-100 pt-8"
        >
          <motion.div whileHover={{ scale: 1.15, y: -8 }} className="cursor-pointer transition-all p-4 rounded-2xl bg-white/50 hover:bg-white shadow-sm hover:shadow-xl border border-transparent hover:border-pink-100 flex flex-col items-center justify-center">
            <h4 className="text-3xl font-black text-[var(--primary-color)] mb-1">1000+</h4>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Happy Customers</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15, y: -8 }} className="cursor-pointer transition-all p-4 rounded-2xl bg-white/50 hover:bg-white shadow-sm hover:shadow-xl border border-transparent hover:border-pink-100 flex flex-col items-center justify-center">
            <h4 className="text-3xl font-black text-[var(--primary-color)] mb-1">500+</h4>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Unique Bears</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15, y: -8 }} className="cursor-pointer transition-all p-4 rounded-2xl bg-white/50 hover:bg-white shadow-sm hover:shadow-xl border border-transparent hover:border-pink-100 flex flex-col items-center justify-center">
            <h4 className="text-3xl font-black text-[var(--primary-color)] mb-1">4.9★</h4>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Customer Rating</p>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. RIGHT CONTENT - THE 3D IMAGE CARD */}
      <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[550px] aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl z-10"
        >
          <img
            src="/images/snug-koala.jpg"
            alt="Handcrafted Teddy"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1000&auto=format&fit=crop'; }}
          />

          {/* Limited Edition Float Badge */}
          <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-50 text-center animate-bounce-slow">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Limited Edition</p>
            <p className="text-lg font-black text-[var(--primary-color)]">30% OFF</p>
          </div>
        </motion.div>

        {/* Decorative elements behind the card */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full blur-[80px] opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-pink-200 rounded-full blur-[100px] opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;