"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CategorySection = () => {
    const categories = [
        { title: "Gift Sets", count: "120+ Items", icon: "🎁", bg: "bg-pink-100/50", iconBg: "bg-pink-200" },
        { title: "Baby Bears", count: "85+ Items", icon: "✨", bg: "bg-purple-50", iconBg: "bg-purple-100" },
        { title: "Limited Edition", count: "45+ Items", icon: "📦", bg: "bg-blue-50/60", iconBg: "bg-blue-200/60", highlight: true },
        { title: "Personalized", count: "200+ Items", icon: "🤍", bg: "bg-yellow-50", iconBg: "bg-yellow-100" }
    ];

    return (
        <section className="py-20 px-6 md:px-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        Shop by Category 🎀
                    </h2>
                    <p className="text-gray-500 mt-4 mb-16 text-lg font-medium">Find your perfect cuddle companion</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categories.map((cat, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className={`p-8 rounded-[40px] border border-transparent shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-start ${cat.highlight ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] scale-105 z-10 border-gray-100' : 'bg-gray-50/40 hover:bg-white border-gray-50'}`}
                        >
                            <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center text-2xl mb-8 ${cat.iconBg}`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-black text-gray-800 mb-2">{cat.title}</h3>
                            <p className="text-gray-500 font-medium">{cat.count}</p>
                            {cat.highlight && (
                                <p className="mt-8 text-[var(--primary-color)] text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore &rarr;
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
