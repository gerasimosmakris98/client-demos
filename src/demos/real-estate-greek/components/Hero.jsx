import React from 'react';
import { Scissors, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SalonHero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-rose-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-2xl px-6 text-center"
            >
                <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-rose-200/10 shadow-2xl bg-white/5 backdrop-blur-md">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mb-6 text-rose-300"
                    >
                        <div className="p-3 rounded-full bg-rose-500/10 border border-rose-500/20">
                            <Scissors size={40} strokeWidth={1} />
                        </div>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-playfair font-thin text-white mb-4 tracking-wider uppercase drop-shadow-lg">
                        Elite Styles
                    </h1>

                    <div className="flex items-center justify-center gap-2 mb-6 text-rose-300/80">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                    </div>

                    <p className="text-xl text-rose-100/90 mb-10 font-light italic leading-relaxed">
                        "Η ομορφιά ξεκινάει από τη στιγμή που αποφασίζεις <br className="hidden md:block" /> να είσαι ο εαυτός σου."
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: '#fb7185' }}
                        whileTap={{ scale: 0.98 }}
                        className="mx-auto flex items-center gap-3 px-8 py-4 bg-rose-400 text-white rounded-full font-medium shadow-lg shadow-rose-900/20 transition-all hover:shadow-rose-500/40"
                    >
                        <Calendar size={20} />
                        <span className="tracking-wide">Κλείστε Ραντεβού</span>
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default SalonHero;
