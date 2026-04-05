"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
    return (
        <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-white to-pink-50/30">
            <div className="max-w-[1440px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        Customer Love Stories 💌
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg font-medium">See what our happy customers are saying</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pink-50 flex flex-col md:flex-row items-center gap-10"
                    >
                        <div className="relative shrink-0">
                            <div className="w-28 h-28 rounded-full border-[6px] border-pink-100 overflow-hidden shadow-inner">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-pink-200 text-pink-600 p-2 rounded-full text-xs shadow-md">
                                💕
                            </div>
                        </div>
                        
                        <div className="text-left flex-1">
                            <div className="flex gap-1 text-pink-300 mb-4 text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-6">
                                "The most adorable teddy bear I've ever purchased! My daughter absolutely loves it. The quality is outstanding and it's so soft and cuddly. 💕"
                            </p>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
                                <p className="text-gray-400 text-sm">March 2026</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pagination Dots & Arrows */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 hover:text-gray-800 transition-colors">&larr;</button>
                        <div className="flex gap-2 items-center">
                            <span className="w-6 h-2 rounded-full bg-[var(--primary-color)]"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                        </div>
                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 hover:text-gray-800 transition-colors">&rarr;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
