import React from 'react';
import { Calendar, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a0a] text-white">
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-[#1a0a0a]/80 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="p-3 bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
                            <UtensilsCrossed size={24} className="text-red-500" />
                        </div>
                    </motion.div>

                    <div className="text-red-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 md:mb-8 font-semibold">
                        {t.hero.subtitle}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 md:mb-8 font-serif leading-none">
                        GM <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">RESTAURANT</span>
                    </h1>

                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mx-auto mb-8 md:mb-12" />

                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 md:mb-14 italic font-serif px-4 leading-relaxed tracking-wide">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-700 hover:bg-red-600 px-10 py-4 font-bold tracking-widest uppercase text-xs md:text-sm transition-all border border-red-500/50 flex items-center gap-3 justify-center shadow-2xl rounded-sm"
                        >
                            <Calendar size={18} /> {t.hero.book}
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 px-10 py-4 font-bold tracking-widest uppercase text-xs md:text-sm text-white hover:border-white transition-all rounded-sm backdrop-blur-sm"
                        >
                            {t.hero.menu}
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-red-500/30"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
