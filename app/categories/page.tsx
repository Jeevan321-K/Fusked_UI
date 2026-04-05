"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
    { title: "Gift Sets", count: "120+ Items", icon: "🎁", img: "/images/gift.jpg", bg: "bg-pink-100", color: "text-pink-600" },
    { title: "Baby Bears", count: "85+ Items", icon: "✨", img: "/images/teddy2.jpg", bg: "bg-purple-100", color: "text-purple-600" },
    { title: "Limited Edition", count: "45+ Items", icon: "📦", img: "/images/teddy12.jpg", bg: "bg-blue-100", color: "text-blue-600" },
    { title: "Personalized", count: "200+ Items", icon: "🤍", img: "/images/teddy5.jpg", bg: "bg-yellow-100", color: "text-yellow-600" },
    { title: "Giant Teddies", count: "30+ Items", icon: "🧸", img: "/images/teddy10.jpg", bg: "bg-orange-100", color: "text-orange-600" },
    { title: "Premium Collection", count: "50+ Items", icon: "⭐", img: "/images/teddy7.jpg", bg: "bg-teal-100", color: "text-teal-600" },
    { title: "Holiday Specials", count: "25+ Items", icon: "🎄", img: "/images/teddy8.jpg", bg: "bg-red-100", color: "text-red-600" },
    { title: "Fantasy & Magic", count: "15+ Items", icon: "🦄", img: "/images/fluff-unicorn.jpg", bg: "bg-indigo-100", color: "text-indigo-600" },
    { title: "Classic Browns", count: "140+ Items", icon: "🐻", img: "/images/teddy11.jpg", bg: "bg-amber-100", color: "text-amber-600" }
];

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-gray-50/30 w-full overflow-hidden">
            
            {/* Dynamic Hero Section */}
            <section className="relative pt-32 pb-20 px-8 md:px-24 bg-white z-10 rounded-b-[60px] shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                   <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-pink-100 rounded-full blur-[120px]" />
                   <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px]" />
                </div>
                
                {/* Left Text Content */}
                <div className="flex-1 w-full text-center md:text-left relative z-10">
                    <motion.div
                       initial={{ opacity: 0, x: -30 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    >
                        <span className="inline-flex py-2 px-6 rounded-full bg-white shadow-sm border border-pink-100 text-[var(--primary-color)] font-bold tracking-widest text-sm uppercase mb-6">
                            Explore Collections
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-gray-800 tracking-tight leading-[1.05] mb-6">
                            Shop by <br />
                            <span className="text-[var(--primary-color)] relative whitespace-nowrap">
                                Category
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-pink-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-xl mx-auto md:mx-0 font-medium">
                            From tiny miniature companions to giant, room-filling hugs. Find the perfect plushy friend to complete your collection.
                        </p>
                    </motion.div>
                </div>

                {/* Right Animated Images */}
                <div className="flex-1 w-full relative h-[350px] md:h-[450px] flex items-center justify-center mt-12 md:mt-0 z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[400px] h-full"
                    >
                        {/* Main Floating Image */}
                        <motion.img 
                            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            src="/images/teddy7.jpg" 
                            alt="Premium Collection" 
                            className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-[40px] shadow-2xl border-[8px] border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        />
                        {/* Secondary Floating Image Top Left */}
                        <motion.img 
                            animate={{ y: [10, -10, 10], rotate: [-10, -5, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            src="/images/teddy2.jpg" 
                            alt="Baby Bear" 
                            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-[30px] shadow-lg border-[6px] border-white absolute top-4 left-0 md:left-4 z-10"
                        />
                        {/* Secondary Floating Image Bottom Right */}
                        <motion.img 
                            animate={{ y: [-10, 10, -10], rotate: [5, 12, 5] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                            src="/images/teddy10.jpg" 
                            alt="Giant Teddy" 
                            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-[6px] border-white absolute bottom-4 right-0 md:right-8 z-30"
                        />
                        {/* Decorative sparkles */}
                        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-10 right-10 text-3xl text-yellow-300 z-0">✨</motion.div>
                        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-10 text-4xl text-pink-300 z-40">💖</motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Interactive Grid */}
            <section className="py-24 px-6 md:px-24 max-w-[1440px] mx-auto z-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {CATEGORIES.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1), type: "spring", bounce: 0.4 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="h-[400px] w-full rounded-[40px] overflow-hidden relative shadow-lg group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-500">
                                {/* Image Setup */}
                                <img 
                                   src={cat.img} 
                                   alt={cat.title} 
                                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />
                                
                                {/* Content Block */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="mb-4">
                                        <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center text-2xl ${cat.bg} mb-6 shadow-inner`}>
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-2 group-hover:text-[var(--primary-color)] transition-colors">{cat.title}</h3>
                                        <p className="text-white/80 font-bold tracking-widest text-sm uppercase">{cat.count}</p>
                                    </div>
                                    
                                    <motion.div 
                                       className="w-full h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 overflow-hidden relative"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">Explore Category &rarr;</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    )
}
