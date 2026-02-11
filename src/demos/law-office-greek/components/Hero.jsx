import React from 'react';
import { Scale, ArrowRight, Shield, Gavel } from 'lucide-react';
import { motion } from 'framer-motion';

const LawHero = ({ t }) => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-600/30 rounded text-yellow-500 text-xs font-bold uppercase tracking-widest mb-8">
                        <Scale size={16} /> {t.hero.badge}
                    </div>

                    <h1 className="text-4xl md:text-7xl font-playfair font-bold leading-tight mb-8 drop-shadow-2xl">
                        GM <span className="text-yellow-500">LAW</span> <br />
                        <span className="text-2xl md:text-4xl text-slate-300 block mt-2">{t.hero.title}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg lg:border-l-4 border-yellow-600/50 lg:pl-6 mx-auto lg:mx-0">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="bg-yellow-600 hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded font-bold flex items-center gap-3 shadow-lg shadow-yellow-900/20 transition-all w-full md:w-auto justify-center"
                        >
                            {t.hero.cta} <ArrowRight size={20} />
                        </motion.button>
                        <button className="px-8 py-4 border border-slate-700 hover:border-yellow-600 text-slate-300 hover:text-yellow-500 rounded font-semibold transition-all backdrop-blur-sm bg-white/5 w-full md:w-auto">
                            {t.practiceAreas.title}
                        </button>
                    </div>
                </motion.div>

                {/* Visual Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[500px] h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Law Office" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-12 left-8 p-6 glass-panel bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl max-w-xs shadow-xl"
                        >
                            <Shield className="text-yellow-500 mb-3" size={32} />
                            <h4 className="text-white font-bold mb-1">Full Protection</h4>
                            <p className="text-slate-400 text-sm">Legal coverage for your every step.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LawHero;
