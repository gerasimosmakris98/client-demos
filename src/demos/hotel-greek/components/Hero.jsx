import React from 'react';
import { Calendar, ChevronDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1814] text-[#d4cbb8]">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-[#1a1814]/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-6 text-amber-500/80">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 md:mb-6"
          >
            {t.hero.tag}
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-6 md:mb-8 font-serif">
            GM <span className="text-white">HOTEL</span>
          </h1>

          <div className="w-12 h-px bg-[#d4cbb8]/30 mx-auto mb-8 md:mb-10" />

          <p className="text-base md:text-xl text-[#d4cbb8]/80 max-w-2xl mx-auto mb-10 md:mb-14 font-light tracking-wide px-4 italic leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#d4cbb8] text-[#1a1814] px-10 py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-white transition-all flex items-center gap-3 justify-center shadow-2xl"
            >
              <Calendar size={18} /> {t.hero.ctaPrimary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(212, 203, 184, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#d4cbb8]/30 px-10 py-4 font-bold tracking-widest uppercase text-xs md:text-sm text-[#d4cbb8] hover:border-[#d4cbb8] transition-all backdrop-blur-sm"
            >
              {t.hero.ctaSecondary}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-[#d4cbb8]/40"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
