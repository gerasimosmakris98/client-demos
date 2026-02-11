import React from 'react';
import { Coffee, MapPin, Clock, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CafeHero = ({ t }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-5 md:p-12 rounded-2xl border border-amber-500/20 backdrop-blur-md bg-black/40 shadow-2xl"
        >
          <div className="flex justify-center mb-4 md:mb-6 text-amber-500">
            <Coffee size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-playfair font-black text-white mb-4 tracking-tight drop-shadow-lg">
            GM <span className="text-amber-500">CAFE</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 font-light italic tracking-wide">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base font-medium text-amber-200/90">
            <div className="flex items-center gap-2 bg-amber-950/30 px-4 py-2 rounded-full border border-amber-500/10">
              <Clock size={16} />
              <span>{t.hero.hours}</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-950/30 px-4 py-2 rounded-full border border-amber-500/10">
              <MapPin size={16} />
              <span>{t.hero.address}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 163, 115, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default CafeHero;
