import React from 'react';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0015] text-white font-sans">
            {/* Serene Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-[#0d0015] to-[#0d0015]" />

                {/* Animated Glow Elements */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-fuchsia-500/30 rounded-full bg-fuchsia-500/10 text-fuchsia-300 font-mono text-[10px] md:text-sm tracking-widest uppercase mb-8 backdrop-blur-md"
                    >
                        <Sparkles size={16} className="text-fuchsia-400" />
                        <span className="font-semibold">{t.hero.tag}</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 md:mb-8 text-white leading-none">
                        {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 drop-shadow-sm">{t.hero.subtitle}</span>
                    </h1>

                    <p className="text-base md:text-xl lg:text-2xl text-gray-300/90 max-w-2xl mx-auto mb-10 md:mb-14 font-light px-4 leading-relaxed tracking-wide italic">
                        "{t.hero.desc}"
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-6">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(162, 28, 175, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all text-sm md:text-base uppercase tracking-widest"
                        >
                            {t.hero.ctaPrimary}
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 text-white px-10 py-4 rounded-full font-bold transition-all text-sm md:text-base backdrop-blur-sm uppercase tracking-widest"
                        >
                            {t.hero.ctaSecondary}
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <ChevronDown size={32} strokeWidth={1} />
            </motion.div>
        </section>
    );
};

export default Hero;
