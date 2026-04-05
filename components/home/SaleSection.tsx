"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const products = [
    { title: "Dreamy Cloud Bear", oldPrice: "₹4,599", newPrice: "₹2,999", img: "/images/teddy2.jpg" },
    { title: "Snuggly Koala Hugs", oldPrice: "₹3,999", newPrice: "₹1,999", img: "/images/teddy6.jpg" },
    { title: "Giant Cuddle Bunny", oldPrice: "₹7,599", newPrice: "₹5,499", img: "/images/teddy9.jpg" }
];

const SaleSection = () => {
    return (
        <section className="py-24 px-8 md:px-24 bg-pink-50/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/40 rounded-full blur-[80px] pointer-events-none" />
            <div className="max-w-[1440px] mx-auto relative z-10">
                
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-pink-500 font-black tracking-widest text-sm uppercase mb-4 block">Limited Time Offers</span>
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 tracking-tight leading-[1.1]">
                            The Spring <span className="text-[var(--primary-color)]">Sale Event</span>
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 text-gray-600 font-bold hover:text-[var(--primary-color)] transition-colors group">
                        View All Sale Items <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {products.map((item, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.15 }}
                           className="bg-white rounded-[40px] p-4 shadow-xl shadow-pink-100/50 hover:shadow-2xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 relative group cursor-pointer"
                        >
                            <div className="absolute top-8 left-8 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                                SAVE 30%
                            </div>
                            <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-50 mb-6 relative">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="px-4 pb-4">
                                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" className="text-yellow-400" />)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-black text-[var(--primary-color)]">{item.newPrice}</span>
                                    <span className="text-gray-400 font-bold line-through">{item.oldPrice}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SaleSection;
