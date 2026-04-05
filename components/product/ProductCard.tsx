"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[20px] md:rounded-[30px] p-2 md:p-4 transition-all hover:shadow-2xl hover:shadow-pink-100/50 border border-transparent hover:border-pink-50"
        >
            {/* Wishlist Icon */}
            <button className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-1.5 md:p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                <Heart size={16} className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-[16px] md:rounded-[24px] bg-gray-50">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 md:p-6"
                />

                {/* Quick Add Button (Appears on Hover) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[var(--primary-color)] px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold shadow-xl flex items-center gap-1 md:gap-2 text-[10px] md:text-base"
                    >
                        <ShoppingCart size={14} className="md:w-4 md:h-4 w-3.5 h-3.5" /> Quick Add
                    </motion.button>
                </div>
            </div>

            {/* Product Info */}
            <div className="mt-2 md:mt-4 px-1 md:px-2">
                <h3 className="text-gray-800 font-bold text-sm md:text-lg leading-tight truncate">{product.name}</h3>
                <div className="flex justify-between items-center mt-1 md:mt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                        <p className="text-[var(--primary-color)] font-black text-sm sm:text-xl">₹{product.price.toLocaleString("en-IN")}</p>
                        {product.oldPrice && (
                            <p className="text-gray-400 font-bold text-[10px] sm:text-sm line-through decoration-pink-300">₹{product.oldPrice.toLocaleString("en-IN")}</p>
                        )}
                    </div>
                    {product.oldPrice ? (
                        <span className="text-[8px] sm:text-[10px] text-white font-bold uppercase tracking-widest bg-pink-500 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-[4px] sm:rounded-md shadow-sm">Sale</span>
                    ) : (
                        <span className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-[4px] sm:rounded-md">New</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;