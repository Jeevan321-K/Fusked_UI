"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Globe, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-pink-50/60 pt-20 pb-10 border-t border-pink-100/50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-12 md:mb-16">
                    
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-4 md:gap-6">
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm relative border border-pink-50 overflow-hidden">
                                <span className="text-xl">🧸</span>
                            </div>
                            <span className="text-2xl font-black text-gray-800 tracking-tighter">
                                Cuddle<span className="text-[var(--primary-color)]">Cloud</span>
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Spreading joy, one cuddle at a time. We craft the world's most huggable premium soft toys designed to create lasting memories.
                        </p>
                        <div className="flex gap-4 items-center mt-2">
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[var(--primary-color)] shadow-sm border border-gray-100">
                                <Globe size={18} />
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[var(--primary-color)] shadow-sm border border-gray-100">
                                <Share2 size={18} />
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[var(--primary-color)] shadow-sm border border-gray-100">
                                <MessageCircle size={18} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                        <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                            {['Shop Collection', 'Our Story', 'Teddy Care Guide', 'Gift Cards', 'Track Order'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-[var(--primary-color)] hover:translate-x-1 transition-all inline-block">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 flex flex-col gap-3 md:gap-6">
                        <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-[var(--primary-color)]" />
                                123 Huggable Lane, Toy Town
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--primary-color)]" />
                                +1 (800) CUDDLES
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--primary-color)]" />
                                hello@cuddlecloud.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Setup */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-4 md:gap-6">
                        <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide">Join the Club</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Subscribe for early access to new teddy bears, exclusive discounts, and sweet surprises.
                        </p>
                        <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200 focus-within:ring-2 ring-[var(--primary-color)] focus-within:border-transparent transition-all">
                            <input 
                                type="email" 
                                placeholder="Your email address..." 
                                className="bg-transparent border-none outline-none px-4 w-full text-sm text-gray-600"
                            />
                            <button className="bg-[var(--primary-color)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-pink-200/50 hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 font-medium flex items-center gap-1">
                        &copy; 2026 Cuddle Cloud. Crafted with <Heart size={14} className="text-[var(--primary-color)] fill-current" /> globally.
                    </p>
                    <div className="flex text-sm text-gray-400 font-medium gap-6">
                        <a href="#" className="hover:text-[var(--primary-color)]">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--primary-color)]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
