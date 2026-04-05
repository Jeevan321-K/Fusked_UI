"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-4 md:px-24 bg-white overflow-hidden relative flex items-center justify-center">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-color)] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm">
            <span className="text-pink-400 text-sm">💌</span>
            <span className="text-gray-500 text-xs font-bold tracking-wide uppercase">Say Hello</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#333] leading-tight">
            We'd love to hear <br /> from you! <span className="text-[var(--primary-color)]">✨</span>
          </h1>
          
          <p className="text-lg text-gray-600 font-medium max-w-md leading-relaxed">
            Have a question about an order, a special request, or just want to share a cute photo of your new plushie? Drop us a message!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-6 pt-4 md:pt-6">
            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 md:gap-6 bg-white/60 p-3 md:p-4 rounded-[15px] md:rounded-2xl border border-white hover:bg-white transition-all shadow-sm">
              <div className="min-w-[40px] h-[40px] md:w-14 md:h-14 bg-pink-100 rounded-lg md:rounded-xl flex items-center justify-center text-xl md:text-3xl">📍</div>
              <div>
                <p className="font-bold text-gray-800 text-[12px] md:text-base">Our Cozy HQ</p>
                <p className="text-gray-500 text-[10px] md:text-sm font-medium">123 Cloud Nine St.</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 md:gap-6 bg-white/60 p-2 md:p-4 rounded-[15px] md:rounded-2xl border border-white hover:bg-white transition-all shadow-sm">
              <div className="w-8 h-8 md:w-14 md:h-14 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-3xl">📞</div>
              <div>
                <p className="font-bold text-gray-800 text-[10px] md:text-base">Call Us</p>
                <p className="text-gray-500 text-[8px] md:text-sm font-medium">+1 800 HUG-BEAR</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 md:gap-6 bg-white/60 p-2 md:p-4 rounded-[15px] md:rounded-2xl border border-white hover:bg-white transition-all shadow-sm">
              <div className="w-8 h-8 md:w-14 md:h-14 bg-yellow-100 rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-3xl">✉️</div>
              <div>
                <p className="font-bold text-gray-800 text-[10px] md:text-base">Email</p>
                <p className="text-gray-500 text-[8px] md:text-sm font-medium break-all">hello@cuddle.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl border border-pink-50 relative mt-8 md:mt-0">
            
            {/* Cute absolute decoration */}
            <motion.div 
               animate={{ rotate: [-5, 5, -5] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-6 w-24 h-24 drop-shadow-xl z-20"
            >
              <img src="/images/cute.webp" alt="Cute decoration" className="w-full h-full object-contain rounded-full" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 md:mb-8">Send a Message 🎀</h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 md:py-16"
              >
                <div className="text-5xl md:text-7xl mb-4 md:mb-6">🎉</div>
                <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base">We'll get back to you faster than a bunny hop.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label className="block text-[10px] md:text-sm font-bold text-gray-700 mb-1 md:mb-2 ml-1 text-left">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Pookie Bear..."
                      className="w-full px-3 py-2 md:px-6 md:py-4 rounded-[10px] md:rounded-[20px] bg-gray-50 border-2 border-transparent focus:border-[var(--primary-color)] focus:bg-white outline-none transition-all font-medium text-gray-800 placeholder-gray-400 text-xs md:text-base placeholder:text-[10px] md:placeholder:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-sm font-bold text-gray-700 mb-1 md:mb-2 ml-1 text-left">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="hello@example.com"
                      className="w-full px-3 py-2 md:px-6 md:py-4 rounded-[10px] md:rounded-[20px] bg-gray-50 border-2 border-transparent focus:border-[var(--primary-color)] focus:bg-white outline-none transition-all font-medium text-gray-800 placeholder-gray-400 text-xs md:text-base placeholder:text-[10px] md:placeholder:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] md:text-sm font-bold text-gray-700 mb-1 md:mb-2 ml-1 text-left">Your Message</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="I just wanted to say..."
                    className="w-full px-3 py-2 md:px-6 md:py-4 rounded-[10px] md:rounded-[20px] bg-gray-50 border-2 border-transparent focus:border-[var(--primary-color)] focus:bg-white outline-none transition-all font-medium text-gray-800 placeholder-gray-400 resize-none text-xs md:text-base placeholder:text-[10px] md:placeholder:text-base h-20 md:h-auto"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[var(--primary-color)] text-white font-black text-sm md:text-lg py-3 md:py-4 rounded-[10px] md:rounded-[20px] shadow-lg shadow-pink-200/50 hover:opacity-90 hover:-translate-y-1 transition-all mt-2 md:mt-4 active:scale-[0.98]"
                >
                  Send Message 💖
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
