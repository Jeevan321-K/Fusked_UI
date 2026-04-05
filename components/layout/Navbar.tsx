"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, User, Search, Palette, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showThemes, setShowThemes] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const themes = [
    { name: 'Pink', color: '#ff85a2' },
    { name: 'Purple', color: '#a29bfe' },
    { name: 'Blue', color: '#74b9ff' },
    { name: 'Yellow', color: '#ffeaa7' }
  ];

  useEffect(() => {
    // 1. Handle Scroll for Glass Effect
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // 2. Load Theme from LocalStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.documentElement.style.setProperty('--primary-color', savedTheme);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('selectedTheme', color);
    setShowThemes(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-4 md:px-20 py-3 md:py-4 ${scrolled
        ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
        : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">

        {/* 1. Mobile Menu Toggle & Logo Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="lg:hidden cursor-pointer -ml-1 pr-2" onClick={() => setShowMobileMenu(true)}>
            <Menu size={28} className="text-gray-800 hover:text-[var(--primary-color)] transition-colors" />
          </div>

          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
            <div className="hidden sm:flex w-10 h-10 bg-white rounded-2xl items-center justify-center shadow-sm relative border border-pink-50 overflow-hidden">
              <span className="text-xl">🧸</span>
            </div>
            <span className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter">
              Cuddle<span className="text-[var(--primary-color)]">Cloud</span>
            </span>
          </div>
        </div>

        {/* 2. Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-gray-500 text-sm tracking-tight">
          {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="hover:text-[var(--primary-color)] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 3. Actions (Search + Icons) */}
        <div className="flex items-center gap-3 md:gap-6">

          {/* Refined Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100/50 px-4 py-2 rounded-full border border-gray-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-pink-100 transition-all">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search cuddles..."
              className="bg-transparent border-none outline-none ml-2 text-sm w-32 lg:w-44 text-gray-600"
            />
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            {/* Theme Toggle Button */}
            <div className="relative">
              <Palette
                size={22}
                className={`hover:text-[var(--primary-color)] cursor-pointer transition-transform ${showThemes ? 'rotate-45' : ''}`}
                onClick={() => setShowThemes(!showThemes)}
              />
              <AnimatePresence>
                {showThemes && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-12 right-0 bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-3 z-[1100]"
                  >
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => changeTheme(t.color)}
                        className="w-8 h-8 rounded-full border-2 border-transparent hover:border-gray-300 transition-all shadow-sm"
                        style={{ backgroundColor: t.color }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden sm:flex relative cursor-pointer group">
              <Heart size={22} className="group-hover:text-[var(--primary-color)] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">3</span>
            </div>

            <div className="relative cursor-pointer group">
              <ShoppingCart size={22} className="group-hover:text-[var(--primary-color)] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
            </div>

            <div className="hidden sm:block">
              <User size={22} className="hover:text-[var(--primary-color)] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1010] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 h-screen w-[280px] bg-white shadow-2xl z-[1020] flex flex-col p-6 lg:hidden"
            >
              <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                <span className="text-xl font-black text-gray-800 tracking-tighter">
                  Cuddle<span className="text-[var(--primary-color)]">Cloud</span>
                </span>
                <X size={24} className="cursor-pointer text-gray-500 hover:text-pink-500" onClick={() => setShowMobileMenu(false)} />
              </div>
              <div className="flex flex-col gap-6 font-bold text-gray-600 text-lg tracking-tight">
                {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-[var(--primary-color)] transition-colors active:scale-95 origin-left"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-4 text-gray-400 text-sm border-t border-gray-100 pt-6">
                <p>Welcome to Cuddle Cloud 🎈</p>
                <div className="flex gap-4">
                   <Heart size={20} className="hover:text-[var(--primary-color)] cursor-pointer transition-colors" />
                   <ShoppingCart size={20} className="hover:text-[var(--primary-color)] cursor-pointer transition-colors" />
                   <User size={20} className="hover:text-[var(--primary-color)] cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;