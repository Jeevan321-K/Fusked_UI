"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShieldCheck, Zap } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        { icon: <Heart size={28} />, title: "Made with Love", desc: "Every bear is handcrafted by artisans ensuring unique cuteness." },
        { icon: <ShieldCheck size={28} />, title: "Premium Quality", desc: "We use only ultra-soft, hypoallergenic materials for endless hugs." },
        { icon: <Zap size={28} />, title: "Fast Shipping", desc: "Next day delivery options so you never have to wait long." }
    ];

    return (
        <section className="py-16 md:py-24 px-6 md:px-24 bg-white">
            <div className="max-w-[1440px] mx-auto text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight mb-4">Why Choose <span className="text-[var(--primary-color)]">Cuddle Cloud?</span></h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">We don't just sell teddy bears. We sell the coziest, highest-quality companions you'll ever meet.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
                    {features.map((f, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-50/50 rounded-[30px] md:rounded-[40px] border border-gray-100 hover:border-pink-100 hover:bg-pink-50/30 transition-all cursor-default text-center"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm text-[var(--primary-color)] flex items-center justify-center mb-4 md:mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight text-center">{f.title}</h3>
                            <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed max-w-[250px]">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
