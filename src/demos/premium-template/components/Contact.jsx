import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ t }) => {
    return (
        <section className="py-20 md:py-32 bg-[#080c16] text-white px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 relative">
                    {t.contact.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto relative">
                    {t.contact.desc}
                </p>

                <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 mb-8 relative" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder={t.contact.placeholder}
                        className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                    />
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 whitespace-nowrap">
                        {t.contact.button}
                    </button>
                </form>

                <p className="text-xs md:text-sm text-slate-500 relative">
                    {t.contact.terms}
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;
