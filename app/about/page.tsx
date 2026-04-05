"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-4 md:px-24 bg-white overflow-hidden relative">
      {/* Decorative Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-color)] rounded-full blur-[120px] opacity-20 pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-[120px] opacity-50 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 relative z-10">
        
        {/* Section 1: Introduction */}
        <section className="flex flex-col md:flex-row items-center gap-12 pb-12 md:pb-16 w-full mt-4 md:mt-0 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm">
              <span className="text-pink-400 text-sm">🎀</span>
              <span className="text-gray-500 text-xs font-bold tracking-wide uppercase">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#333] leading-tight">
              Spreading Joy, <br/> One Hug at a Time <span className="text-[var(--primary-color)]">🧸</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We started with a simple mission: to create the most huggable, adorable, and comforting companions in the world. Every plushie we make is crafted with love, softest materials, and a sprinkle of magic designed to bring a smile to your face.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/teddy1.jpg" 
                alt="Our first teddy bear" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-pink-50"
            >
              <div className="text-3xl">💖</div>
              <div>
                <p className="text-sm font-bold text-gray-800">10+ Years</p>
                <p className="text-xs text-gray-500">Of Cuddles</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2: Values */}
        <section className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333]">Why Choose Us? 🌸</h2>
            <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: '☁️', title: 'Ultra Soft', desc: 'Made with premium, hypoallergenic materials that feel like a warm hug from a cloud.' },
              { icon: '🎁', title: 'Perfect Gift', desc: 'Each plushie comes beautifully packaged, ready to make someone’s day extra special.' },
              { icon: '🌍', title: 'Eco-Friendly', desc: 'We care about our planet. Our stuffing is made from 100% recycled materials.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[24px] md:rounded-[32px] p-4 sm:p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-pink-100 transition-all text-left flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="text-3xl md:text-5xl mb-4 md:mb-6 bg-pink-50 w-14 h-14 md:w-20 md:h-20 rounded-[18px] md:rounded-2xl flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-lg md:text-2xl font-black text-gray-800 mb-2 md:mb-3 leading-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-[11px] md:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Meet the team or Behind scenes */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-pink-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative h-[400px]"
          >
             <img 
                src="/images/giant-bunny.webp" 
                alt="Behind the scenes" 
                className="w-full h-full object-cover rounded-[24px]"
              />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#333]">Designed with <span className="text-[var(--primary-color)]">Love</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Every detail, from the embroidered smiles to the stitching of the little paws, is meticulously checked by our team. We believe that a true plush companion isn't just a toy, but a memory waiting to be made.
            </p>
            <ul className="space-y-4 mt-6 text-left inline-block">
              {[
                "Hand-stitched details",
                "Machine washable friendly",
                "Lifetime cuddle guarantee"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-bold">
                  <span className="text-[var(--primary-color)] text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
