"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      {/* Decorative blurred background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100 rounded-full blur-[80px] opacity-60" />
      
      <motion.div 
         animate={{ y: [-15, 15, -15], scale: [0.95, 1.05, 0.95], rotate: [-5, 5, -5] }}
         transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
         className="relative z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-white shadow-xl shadow-pink-100 rounded-full flex items-center justify-center border-4 border-pink-50 mb-6">
            <span className="text-5xl">🧸</span>
        </div>
        
        <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2"
        >
            <span className="text-[var(--primary-color)] font-black tracking-[0.2em] uppercase text-sm">
                Preparing Hugs
            </span>
            <span className="flex gap-1">
                <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]"></motion.span>
                <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]"></motion.span>
                <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]"></motion.span>
            </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
