"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const words = [
    "✨ SPRING MEGA SALE - UP TO 50% OFF! ✨",
    "🧸 FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $50 🧸",
    "💖 BUY 2 GET 1 FREE ON ALL MINIATURE TEDDIES 💖",
    "🌸 NEW LIMITED EDITION ARRIVALS 🌸"
  ];

  const duplicatedWords = [...words, ...words, ...words];

  return (
    <div className="absolute top-[76px] left-0 w-full bg-[var(--primary-color)] py-2.5 overflow-hidden shadow-sm z-50">
      <div className="flex w-max">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 25, ease: "linear", repeat: Infinity }}
           className="flex items-center whitespace-nowrap"
        >
            {duplicatedWords.map((word, i) => (
               <span key={i} className="text-gray-900 text-xs md:text-sm font-black tracking-widest uppercase mx-6 md:mx-10">
                   {word}
               </span>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
