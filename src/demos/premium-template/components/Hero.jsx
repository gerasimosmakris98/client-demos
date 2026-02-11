import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0c1122] text-white px-4 md:px-6 py-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] z-0 pointer-events-none" />
            <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] opacity-20 rounded-full" />

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 mb-6 md:mb-8">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs md:text-sm font-medium">{t.hero.badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-[1.1] mb-6 tracking-tight">
                        {t.hero.title.split(' ').slice(0, -1).join(' ')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                            {t.hero.title.split(' ').slice(-1)}
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-lg mb-10 md:mb-12 leading-relaxed opacity-90">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
                            {t.hero.ctaPrimary} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full md:w-auto border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                            <Play size={18} fill="currentColor" /> {t.hero.ctaSecondary}
                        </button>
                    </div>
                </motion.div>

                {/* Visual/Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="aspect-[16/10] bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
                        {/* Device UI */}
                        <div className="w-full h-full bg-[#020817]/40 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden transform perspective-1000 rotate-y-[-12deg] rotate-x-[5deg]">
                            <div className="p-4 border-b border-white/5 flex gap-1.5 bg-white/[0.02]">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/5" />
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-16 bg-white/5 rounded-xl" />
                                    <div className="h-16 bg-white/5 rounded-xl" />
                                    <div className="h-16 bg-white/5 rounded-xl" />
                                </div>
                                <div className="h-10 bg-emerald-500/10 rounded-lg border border-dashed border-emerald-500/30 flex items-center px-4">
                                    <div className="w-full h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "70%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 -right-4 bg-emerald-500 text-[#020617] px-6 py-3 rounded-xl font-black text-sm shadow-xl shadow-emerald-500/20 backdrop-blur-md"
                            >
                                +245% Growth
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
