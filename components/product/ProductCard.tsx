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
            className="group relative bg-white rounded-[30px] p-4 transition-all hover:shadow-2xl hover:shadow-pink-100/50 border border-transparent hover:border-pink-50"
        >
            {/* Wishlist Icon */}
            <button className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-[24px] bg-gray-50">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6"
                />

                {/* Quick Add Button (Appears on Hover) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[var(--primary-color)] px-6 py-2 rounded-full font-bold shadow-xl flex items-center gap-2"
                    >
                        <ShoppingCart size={16} /> Quick Add
                    </motion.button>
                </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 px-2">
                <h3 className="text-gray-800 font-bold text-lg leading-tight truncate">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                        <p className="text-[var(--primary-color)] font-black text-xl">₹{product.price.toLocaleString("en-IN")}</p>
                        {product.oldPrice && (
                            <p className="text-gray-400 font-bold text-sm line-through decoration-pink-300">₹{product.oldPrice.toLocaleString("en-IN")}</p>
                        )}
                    </div>
                    {product.oldPrice ? (
                        <span className="text-[10px] text-white font-bold uppercase tracking-widest bg-pink-500 px-2 py-1 rounded-md shadow-sm">Sale</span>
                    ) : (
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-100 px-2 py-1 rounded-md">New</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;