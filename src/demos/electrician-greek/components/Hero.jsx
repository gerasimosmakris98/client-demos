import React from 'react';
import { Scale, ArrowRight, Shield, Gavel } from 'lucide-react';
import { motion } from 'framer-motion';

const LawHero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white">
            {/* Dynamic Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70" />

            <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-600/30 rounded text-yellow-500 text-xs font-bold uppercase tracking-widest mb-8">
                        <Scale size={16} /> Νομικη Συμβουλευτικη
                    </div>

                    <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-8 drop-shadow-2xl">
                        Δικαιοσύνη με <br />
                        <span className="text-yellow-500 relative inline-block">
                            Ακεραιότητα
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-600/50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99991 74.5 -2.00002 198 2.00007" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg border-l-4 border-yellow-600/50 pl-6">
                        Προστατεύουμε τα δικαιώματά σας με εμπειρία 25 ετών.
                        Εξειδικευμένες νομικές υπηρεσίες για ιδιώτες και επιχειρήσεις.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="bg-yellow-600 hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded font-bold flex items-center gap-3 shadow-lg shadow-yellow-900/20 transition-all"
                        >
                            Δωρεάν Συμβουλή <ArrowRight size={20} />
                        </motion.button>
                        <button className="px-8 py-4 border border-slate-700 hover:border-yellow-600 text-slate-300 hover:text-yellow-500 rounded font-semibold transition-all backdrop-blur-sm bg-white/5">
                            Οι Υπηρεσίες Μας
                        </button>
                    </div>
                </motion.div>

                {/* Visual Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
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
                            <h4 className="text-white font-bold mb-1">Πλήρης Προστασία</h4>
                            <p className="text-slate-400 text-sm">Νομική κάλυψη για κάθε σας βήμα.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LawHero;
