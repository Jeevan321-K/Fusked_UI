"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BannerSection = () => {
    return (
        <section className="py-12 px-6 md:px-24 bg-white">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-[1440px] mx-auto bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg border border-white"
            >
                <div className="absolute top-10 right-10 opacity-60 w-32 h-32 md:w-48 md:h-48 z-0 Mix-blend-multiply">
                    <img src="/images/cute.webp" alt="Teddy" className="w-full h-full object-contain drop-shadow-xl blur-[1px]" />
                </div>
                
                <div className="absolute bottom-10 left-10 text-4xl opacity-50 -rotate-12 z-0">💕</div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white/60 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold text-gray-700 tracking-widest uppercase mb-6 shadow-sm flex items-center gap-2">
                        <span>✨</span> Limited Time Offer
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 flex gap-4 justify-center items-center">
                        Spring Sale 🌸
                    </h2>
                    
                    <p className="text-xl md:text-3xl font-bold text-white drop-shadow-sm mb-12">
                        Get up to <span className="font-black">40% OFF</span> on selected teddy bears
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="bg-white text-pink-400 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Shop Sale Now &rarr;
                        </button>
                        <span className="text-white font-bold opacity-80 backdrop-blur-md bg-white/20 px-6 py-5 rounded-full text-lg">
                            Ends in: <span className="font-black">3 Days 12 Hours</span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BannerSection;
