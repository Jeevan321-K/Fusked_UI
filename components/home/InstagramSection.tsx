"use client";
import React from 'react';
import { motion } from 'framer-motion';

const InstagramSection = () => {
    const images = [
        "/images/teddy1.jpg",
        "/images/teddy5.jpg",
        "/images/teddy7.jpg",
        "/images/teddy10.jpg",
        "/images/teddy12.jpg",
        "/images/teddy3.jpg",
        "/images/teddy8.jpg",
        "/images/teddy4.jpg"
    ];

    return (
        <section className="py-24 px-6 md:px-24 bg-white border-t border-gray-50">
            <div className="max-w-[1440px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        Follow Our Journey 📸
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg font-medium">Join our community @cuddlecloud</p>
                    <a href="#" className="inline-block mt-4 text-[var(--primary-color)] font-bold mb-12 hover:underline">
                        Follow us on Instagram &rarr;
                    </a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {images.map((img, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="aspect-square rounded-[30px] overflow-hidden group cursor-pointer relative"
                        >
                            <img src={img} alt="Insta Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 text-white text-3xl font-black transition-opacity outline-none flex items-center gap-2">
                                    ♥
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
