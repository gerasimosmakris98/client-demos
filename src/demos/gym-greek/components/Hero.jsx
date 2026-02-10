import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Dark/Neon Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-lime-500/30 rounded-full bg-lime-500/10 text-lime-400 font-mono text-sm tracking-widest uppercase mb-8 backdrop-blur-md">
                        <Activity size={16} /> Est. 2026
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-6">
                        GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">GYM</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
                        Ξεπεράστε τα όριά σας. Προπόνηση υψηλών προδιαγραφών σε ένα περιβάλλον που εμπνέει.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-lime-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-lime-400 transition-colors shadow-[0_0_20px_rgba(132,204,22,0.4)]"
                        >
                            Εγγραφη Τωρα
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 rounded-full font-bold uppercase tracking-wider border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2"
                        >
                            <Dumbbell size={20} /> Προγραμματα
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
