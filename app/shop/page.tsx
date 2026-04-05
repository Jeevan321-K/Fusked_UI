"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/lib/constants'; 

const ShopPage = () => {
    return (
        <div className="w-full min-h-screen bg-white overflow-hidden">
            {/* Soft Animated Header with Glass & Colors */}
            <div className="relative pt-24 md:pt-36 pb-8 md:pb-20 px-4 md:px-24 overflow-hidden">
                
                {/* Background Gradients & Floating Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse pointer-events-none" />
                <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-100/60 rounded-full blur-[100px] mix-blend-multiply opacity-80 pointer-events-none" />

                <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-between relative z-10 gap-2 md:gap-12">
                    
                    {/* Left Text Content */}
                    <div className="w-1/2 md:flex-1 text-left relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm mb-3 md:mb-6"
                        >
                            <span className="text-sm md:text-xl">🌸</span>
                            <span className="text-gray-500 font-bold tracking-wider uppercase text-[8px] md:text-[10px]">Exclusive</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, ease: 'easeOut' }}
                            className="text-2xl sm:text-4xl md:text-7xl font-black text-gray-800 tracking-tight leading-[1.1]"
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
                            className="text-gray-500 mt-2 md:mt-6 max-w-lg text-[10px] sm:text-sm md:text-lg leading-snug md:leading-relaxed"
                        >
                            From tiny miniature companions to giant, room-filling hugs. Find the perfect plushy friend to complete your collection.
                        </motion.p>
                    </div>

                    {/* Right Images Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="w-1/2 md:flex-1 relative flex justify-center items-center h-[180px] md:h-[300px]"
                    >
                        {/* Main Floating Image */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-white rounded-full p-1 md:p-2 shadow-2xl border border-gray-50 z-20"
                        >
                            <img src="/images/hero-teddy.jpeg" alt="Main Teddy" className="w-full h-full object-cover rounded-full" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1000&auto=format&fit=crop'; }} />
                            
                            {/* Decorative Badge */}
                            <div className="absolute -bottom-2 right-0 md:-bottom-4 md:right-4 bg-[var(--primary-color)] text-white px-3 md:px-6 py-1.5 md:py-3 rounded-full md:rounded-[20px] font-bold shadow-lg shadow-pink-200/50 rotate-6 text-[8px] md:text-sm whitespace-nowrap">
                                New Arrivals ✨
                            </div>
                        </motion.div>

                        {/* Secondary Image Bubble */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -left-2 top-2 w-16 h-16 md:-left-8 md:top-10 md:w-32 md:h-32 bg-white rounded-[1rem] md:rounded-[2rem] shadow-xl p-1 md:p-2 z-10 border border-gray-100 hidden sm:block"
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
            <div className="max-w-[1440px] mx-auto px-2 sm:px-8 md:px-24 pb-8 md:pb-12">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="mt-6 md:mt-12 bg-white/80 backdrop-blur-xl border border-white p-4 md:p-12 rounded-[20px] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] grid grid-cols-3 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-2 md:gap-16 relative overflow-hidden"
               >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-[40px] pointer-events-none" />
                   
                   <motion.div whileHover={{ scale: 1.15, rotate: -3, y: -8 }} className="col-span-1 md:order-1 text-center md:text-left z-10 cursor-pointer transition-all p-2 md:p-4 bg-gray-50/50 hover:bg-pink-50 rounded-[15px] md:rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-xl md:text-5xl font-black text-gray-800 tracking-tight">1000<span className="text-[var(--primary-color)]">+</span></h4>
                       <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">Happy Joy</p>
                   </motion.div>
                   <motion.div whileHover={{ scale: 1.15, rotate: 3, y: -8 }} className="col-span-1 md:order-2 text-center md:text-left z-10 cursor-pointer transition-all p-2 md:p-4 bg-gray-50/50 hover:bg-pink-50 rounded-[15px] md:rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-xl md:text-5xl font-black text-gray-800 tracking-tight">500<span className="text-[var(--primary-color)]">+</span></h4>
                       <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">Unique Teddies</p>
                   </motion.div>
                   
                   {/* Middle Curved Animated Images (Snug Koala and Cute) */}
                   <div className="col-span-3 order-last md:order-3 flex gap-2 md:gap-4 items-center justify-center z-10 py-4 md:py-0 relative">
                       {/* Floating Animated Poster Image (Changed to koala) */}
                       <motion.img 
                          animate={{ y: [-10, 10, -10], rotate: [-8, -5, -8] }}
                          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                          whileHover={{ scale: 1.1 }}
                          src="/images/snug-koala.jpg" 
                          alt="Snug Koala Teddy" 
                          className="w-24 h-32 md:w-40 md:h-52 object-cover rounded-[20px] md:rounded-[30px] shadow-2xl border-[4px] md:border-[6px] border-white z-20" 
                       />
                       {/* Floating Behind Secondary Image */}
                       <motion.img 
                          animate={{ y: [10, -10, 10], rotate: [6, 10, 6] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                          whileHover={{ scale: 1.1, zIndex: 30 }}
                          src="/images/cutie.webp" 
                          alt="Teddy Detail" 
                          className="w-16 h-16 md:w-32 md:h-32 object-cover rounded-[15px] md:rounded-[30px] shadow-lg border-[3px] md:border-[4px] border-white absolute right-[15%] sm:right-[30%] md:right-[-60px] top-1/2 -translate-y-1/2 z-10" 
                       />
                   </div>

                   <motion.div whileHover={{ scale: 1.15, rotate: -3, y: -8 }} className="col-span-1 md:order-4 text-center md:text-right z-10 cursor-pointer transition-all p-2 md:p-4 bg-gray-50/50 hover:bg-pink-50 rounded-[15px] md:rounded-3xl shadow-sm hover:shadow-xl">
                       <h4 className="text-xl md:text-5xl font-black text-gray-800 tracking-tight">4.9<span className="text-[var(--primary-color)]">★</span></h4>
                       <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">Avg Rating</p>
                   </motion.div>
                </motion.div>

                {/* HP Poster Section */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.6 }}
                   className="w-full mt-6 md:mt-12 rounded-[20px] md:rounded-[40px] overflow-hidden relative group shadow-2xl mx-auto"
                >
                   {/* Animated Background */}
                   <motion.div 
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-[length:200%_200%] z-0" 
                   />
                   <div className="relative z-10 w-full h-full overflow-hidden flex justify-center">
                       <motion.img 
                          whileHover={{ scale: 1.05 }}
                          src="/images/poster.webp" 
                          alt="Harry Potter Magic Collection" 
                          className="w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[800px] object-cover transition-transform duration-1000 ease-out" 
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
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10"
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