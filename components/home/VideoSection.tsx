"use client";
import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section className="py-16 md:py-24 px-6 md:px-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto text-center z-10 relative">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        Experience the Magic 💖
                    </h2>
                    <p className="text-gray-500 mt-4 text-base md:text-lg font-medium mb-8 md:mb-12">Watch the joy our teddies bring into the world</p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="w-full rounded-[40px] overflow-hidden shadow-2xl relative border-[8px] border-pink-50"
                >
                   {/* Gradient glow behind video */}
                   <div className="absolute inset-0 bg-pink-100 blur-2xl -z-10 mix-blend-multiply opacity-50" />
                   
                   <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      src="/images/teddy_vd.mp4" 
                      className="w-full h-auto max-h-[800px] object-cover hover:scale-105 transition-transform duration-1000 ease-out" 
                   />
                   
                   {/* Overlay Content */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-16 text-left pointer-events-none">
                       <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-black drop-shadow-xl mb-2 md:mb-4 text-shadow-sm">A Lifetime of Hugs</h3>
                       <p className="text-pink-100 font-bold tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-md">Handcrafted with care for your loved ones.</p>
                       <div className="w-16 h-1 bg-[var(--primary-color)] rounded-full"></div>
                   </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
