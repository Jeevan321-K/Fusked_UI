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
        <section className="py-16 md:py-20 px-6 md:px-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        Shop by Category 🎀
                    </h2>
                    <p className="text-gray-500 mt-4 mb-16 text-lg font-medium">Find your perfect cuddle companion</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {categories.map((cat, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className={`p-4 md:p-8 rounded-[30px] md:rounded-[40px] border border-transparent shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center md:items-start text-center md:text-left overflow-hidden ${cat.highlight ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] scale-105 z-10 border-gray-100' : 'bg-gray-50/40 hover:bg-white border-gray-50'}`}
                        >
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[20px] md:rounded-[24px] flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-8 ${cat.iconBg}`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-lg md:text-2xl font-black text-gray-800 mb-1 md:mb-2 leading-tight">{cat.title}</h3>
                            <p className="text-gray-500 font-medium text-xs md:text-base">{cat.count}</p>
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
