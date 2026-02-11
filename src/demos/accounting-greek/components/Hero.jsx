import React from 'react';
import { Calculator, ChevronDown, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0e1a] text-white">
            {/* Dynamic Corporate Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0c0e1a] to-violet-950 opacity-50" />
                <motion.div
                    animate={{
                        backgroundPosition: ['0px 0px', '40px 40px'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.1),_transparent_70%)]" />
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
                        className="inline-flex items-center gap-3 px-5 py-2.5 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-300 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-8 backdrop-blur-md"
                    >
                        <Calculator size={16} className="text-indigo-400" />
                        <span className="font-semibold">{t.hero.badge}</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 md:mb-8 leading-none">
                        {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-500 drop-shadow-sm">{t.hero.subtitle}</span>
                    </h1>

                    <div className="flex justify-center items-center gap-4 mb-10 md:mb-12 text-[#d4cbb8]/40">
                        <TrendingUp size={18} />
                        <div className="h-px w-12 bg-indigo-500/20" />
                        <Shield size={18} />
                    </div>

                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-14 font-light px-4 leading-relaxed tracking-wide">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-6">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-indigo-500/20 text-sm md:text-base tracking-wide"
                        >
                            {t.hero.ctaPrimary}
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 text-white px-10 py-4 rounded-full font-bold transition-all text-sm md:text-base backdrop-blur-sm"
                        >
                            {t.hero.ctaSecondary}
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-indigo-500/30"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
