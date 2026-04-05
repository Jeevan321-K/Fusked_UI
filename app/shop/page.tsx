"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/lib/constants'; 

const ShopPage = () => {
    return (
        <div className="w-full min-h-screen bg-white overflow-hidden">
            {/* Soft Animated Header with Glass & Colors */}
            <div className="relative pt-36 pb-20 px-8 md:px-24 overflow-hidden">
                
                {/* Background Gradients & Floating Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse pointer-events-none" />
                <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-100/60 rounded-full blur-[100px] mix-blend-multiply opacity-80 pointer-events-none" />

                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">
                    
                    {/* Left Text Content */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm mb-6"
                        >
                            <span className="text-xl">🌸</span>
                            <span className="text-gray-500 font-bold tracking-wider uppercase text-[10px]">Cuddle Cloud Exclusive</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, ease: 'easeOut' }}
                            className="text-5xl md:text-7xl font-black text-gray-800 tracking-tight leading-[1.1]"
                        >
                            Explore Our <br/>
                            <span className="text-[var(--primary-color)] relative">
                                Cuddly Collection
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-pink-200 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none"/>
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 mt-6 max-w-lg text-lg leading-relaxed md:ml-0 mx-auto"
                        >
                            From tiny miniature companions to giant, room-filling hugs. Find the perfect plushy friend to complete your collection.
                        </motion.p>
                    </div>

                    {/* Right Images Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="flex-1 relative flex justify-center items-center h-[300px] w-full"
                    >
                        {/* Main Floating Image */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-2 shadow-2xl border border-gray-50 z-20"
                        >
                            <img src="/images/hero-teddy.jpeg" alt="Main Teddy" className="w-full h-full object-cover rounded-full" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1000&auto=format&fit=crop'; }} />
                            
                            {/* Decorative Badge */}
                            <div className="absolute -bottom-4 right-4 bg-[var(--primary-color)] text-white px-6 py-3 rounded-[20px] font-bold shadow-lg shadow-pink-200/50 rotate-6 text-sm whitespace-nowrap">
                                New Arrivals ✨
                            </div>
                        </motion.div>

                        {/* Secondary Image Bubble */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -left-4 md:-left-8 top-10 w-32 h-32 bg-white rounded-[2rem] shadow-xl p-2 z-10 border border-gray-100 hidden md:block"
                        >
                            <img src="/images/cute.webp" alt="Cute Teddy" className="w-full h-full object-cover rounded-[1.5rem]" />
                        </motion.div>

                        {/* Floating Emojis */}
                        <motion.div animate={{ y: [-5, 20, -5], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute text-3xl top-0 right-10 z-0">💖</motion.div>
                        <motion.div animate={{ y: [10, -15, 10], rotate: [0, -20, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.2 }} className="absolute text-4xl bottom-10 -left-10 z-0">🧸</motion.div>
                        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute text-2xl top-1/2 right-0 z-0">✨</motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Shop Statistics Bar with Curved Images in Middle */}
            <div className="max-w-[1440px] mx-auto px-8 md:px-24 pb-12">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="mt-12 bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-wrap md:flex-nowrap items-center justify-between gap-8 md:gap-16 relative overflow-hidden"
               >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-[40px] pointer-events-none" />
                   
                   <motion.div whileHover={{ scale: 1.15, rotate: -3, y: -8 }} className="text-center md:text-left z-10 hidden md:block cursor-pointer transition-all p-4 bg-gray-50/50 hover:bg-pink-50 rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">1000<span className="text-[var(--primary-color)]">+</span></h4>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Happy Joy</p>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.15, rotate: 3, y: -8 }} className="text-center md:text-left z-10 cursor-pointer transition-all p-4 bg-gray-50/50 hover:bg-pink-50 rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">500<span className="text-[var(--primary-color)]">+</span></h4>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Unique Teddies</p>
                   </motion.div>
                   
                   {/* Middle Curved Animated Images (Snug Koala and Cute) */}
                   <div className="flex gap-4 items-center justify-center z-10 py-6 md:py-0 relative">
                       {/* Floating Animated Poster Image (Changed to koala) */}
                       <motion.img 
                          animate={{ y: [-10, 10, -10], rotate: [-8, -5, -8] }}
                          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                          whileHover={{ scale: 1.1 }}
                          src="/images/snug-koala.jpg" 
                          alt="Snug Koala Teddy" 
                          className="w-28 h-36 md:w-40 md:h-52 object-cover rounded-[30px] shadow-2xl border-[6px] border-white z-20" 
                       />
                       {/* Floating Behind Secondary Image */}
                       <motion.img 
                          animate={{ y: [10, -10, 10], rotate: [6, 10, 6] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                          whileHover={{ scale: 1.1, zIndex: 30 }}
                          src="/images/cutie.webp" 
                          alt="Teddy Detail" 
                          className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-[30px] shadow-lg border-[4px] border-white absolute right-[-40px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10" 
                       />
                   </div>

                   <motion.div whileHover={{ scale: 1.15, rotate: -3, y: -8 }} className="text-center md:text-right z-10 cursor-pointer transition-all p-4 bg-gray-50/50 hover:bg-pink-50 rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">4.9<span className="text-[var(--primary-color)]">★</span></h4>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Avg Rating</p>
                   </motion.div>
                </motion.div>

                {/* HP Poster Section */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.6 }}
                   className="w-full mt-12 rounded-[40px] overflow-hidden relative group p-2 shadow-2xl"
                >
                   {/* Animated Background */}
                   <motion.div 
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-[length:200%_200%] z-0" 
                   />
                   <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-[36px] overflow-hidden">
                       <img 
                          src="/images/poster.webp" 
                          alt="Harry Potter Magic Collection" 
                          className="w-full h-auto max-h-[400px] object-cover hover:scale-[1.02] transition-transform duration-700" 
                       />
                   </div>
                </motion.div>
            </div>

            {/* Product Grid */}
            <div className="max-w-[1440px] mx-auto px-8 md:px-24 pb-32">
                {/* Filter Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 pb-6 border-b border-gray-100 gap-4"
                >
                    <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">Showing {PRODUCTS.length} Lovable Products</p>
                    <div className="flex gap-4 items-center">
                        <select className="bg-gray-50/50 hover:bg-gray-50 border border-gray-100 outline-none text-sm font-bold text-gray-600 cursor-pointer px-4 py-2.5 rounded-full transition-all">
                            <option>Sort by: Our Favorites</option>
                            <option>Sort by: Newest Arrivals</option>
                            <option>Sort by: Price (Low to High)</option>
                        </select>
                    </div>
                </motion.div>

                {/* 4 Cards Per Row Grid with Staggered Animation */}
                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
                >
                    {PRODUCTS.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                            }}
                        >
                            <ProductCard product={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ShopPage;