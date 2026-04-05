"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, User, Search, Palette } from 'lucide-react'; // Install lucide-react if you haven't!

const Navbar = () => {
  // Simple theme options
  const themes = [
    { name: 'Pink', color: '#ff85a2' },
    { name: 'Purple', color: '#a29bfe' },
    { name: 'Blue', color: '#74b9ff' },
    { name: 'Yellow', color: '#ffeaa7' }
  ];

  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty('--primary-color', color);
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 px-6 py-4 md:px-12 flex items-center justify-between">
      {/* 1. Logo */}
      <div className="text-2xl font-bold text-[var(--primary-color)] flex items-center gap-2">
        🧸 <span className="tracking-tight">TeddyStore</span>
      </div>

      {/* 2. Desktop Links */}
      <div className="hidden md:flex gap-8 font-medium text-[var(--text-main)]">
        {['Home', 'Shop', 'Categories', 'About'].map((item) => (
          <a key={item} href="#" className="hover:text-[var(--primary-color)] transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* 3. Search Bar (Center/Right) */}
      <div className="hidden lg:flex items-center bg-white/50 px-4 py-2 rounded-full border border-gray-200 focus-within:border-[var(--primary-color)] transition-all">
        <Search size={18} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search cuddles..." 
          className="bg-transparent border-none outline-none ml-2 text-sm w-40"
        />
      </div>

      {/* 4. Icons & Theme Toggle */}
      <div className="flex items-center gap-5 text-[var(--text-main)]">
        
        {/* Theme Picker Dropdown */}
        <div className="group relative cursor-pointer">
          <Palette size={22} className="hover:text-[var(--primary-color)]" />
          <div className="absolute top-8 right-0 hidden group-hover:flex flex-col bg-white p-2 rounded-xl shadow-xl border border-gray-100 gap-2">
            {themes.map((t) => (
              <button 
                key={t.name}
                onClick={() => changeTheme(t.color)}
                className="w-6 h-6 rounded-full border border-gray-200"
                style={{ backgroundColor: t.color }}
                title={t.name}
              />
            ))}
          </div>
        </div>

        <Heart size={22} className="hover:text-[var(--primary-color)] cursor-pointer" />
        
        <div className="relative cursor-pointer">
          <ShoppingCart size={22} className="hover:text-[var(--primary-color)]" />
          <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>

        <User size={22} className="hover:text-[var(--primary-color)] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;