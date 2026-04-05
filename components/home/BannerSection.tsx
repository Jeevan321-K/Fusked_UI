"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BannerSection = () => {
    return (
        <section className="py-4 md:py-12 px-2 md:px-24 bg-white">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-[1440px] mx-auto bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-[20px] md:rounded-[40px] p-4 md:p-20 text-center relative overflow-hidden shadow-lg border border-white"
            >
                <div className="absolute top-2 right-2 md:top-10 md:right-10 opacity-60 w-16 h-16 md:w-48 md:h-48 z-0 Mix-blend-multiply">
                    <img src="/images/cute.webp" alt="Teddy" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
                </div>
                
                <div className="absolute bottom-2 left-2 md:bottom-10 md:left-10 text-2xl md:text-4xl opacity-50 -rotate-12 z-0">💕</div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white/60 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2 rounded-full text-[10px] md:text-sm font-bold text-gray-700 tracking-widest uppercase mb-2 md:mb-6 shadow-sm flex items-center gap-1 md:gap-2">
                        <span>✨</span> Limited Time Offer
                    </div>
                    
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-md mb-1 md:mb-4 flex gap-2 md:gap-4 justify-center items-center">
                        Spring Sale 🌸
                    </h2>
                    
                    <p className="text-xs sm:text-xl md:text-3xl font-bold text-white drop-shadow-sm mb-4 md:mb-12">
                        Get up to <span className="font-black">40% OFF</span> on selected teddy bears
                    </p>

                    <div className="flex flex-row items-center justify-center gap-2 md:gap-6 w-full max-w-[280px] md:max-w-none">
                        <button className="flex-1 md:flex-none bg-white text-pink-400 px-2 py-2.5 md:px-10 md:py-5 rounded-full font-bold text-[10px] md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex justify-center items-center gap-1 md:gap-3">
                            Shop Sale <span className="hidden md:inline">&rarr;</span>
                        </button>
                        <span className="flex-1 md:flex-none text-white font-bold opacity-80 backdrop-blur-md bg-white/20 px-2 py-2.5 md:px-6 md:py-5 rounded-full text-[10px] md:text-lg">
                            Ends: <span className="font-black">3 Days</span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BannerSection;
