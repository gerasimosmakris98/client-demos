import React from 'react';
import { BookOpen, Award, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TutoringHero = ({ t }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400" />

            {/* Animated Shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full border-2 border-white/10 blur-sm"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border border-white/20 blur-sm opacity-50"
            />

            <div className="relative z-10 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white pt-24 lg:pt-0"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 border border-white/30"
                    >
                        <Award size={16} className="text-yellow-300" />
                        <span>{t.badge}</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                        {t.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 filter drop-shadow-sm">{t.highlight}</span> {t.title2}
                    </h1>

                    <p className="text-lg md:text-xl text-blue-50 mb-8 md:mb-10 max-w-lg leading-relaxed">
                        {t.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                        >
                            {t.ctaPrimary} <ArrowRight size={20} />
                        </motion.button>
                        <button className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
                            {t.ctaSecondary}
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image Group */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 z-20 glass-panel bg-white/90 backdrop-blur text-blue-900 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                    >
                        <div className="bg-blue-100 p-2 rounded-full">
                            <Sparkles size={24} className="text-blue-600" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">{t.floatBadge}</p>
                            <p className="text-xs text-gray-500">{t.floatSub}</p>
                        </div>
                    </motion.div>

                    <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                            alt="Student Success"
                            className="w-full h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default TutoringHero;
