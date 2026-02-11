import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = ({ t }) => {
    return (
        <section className="py-20 md:py-32 bg-[#0c1122] text-white px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                    >
                        {t.pricing.title.split('Pricing')[0]}
                        <span className="text-blue-500">
                            {t.pricing.title.includes('Pricing') ? 'Pricing' : t.pricing.title.split(' ').slice(-1)}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        {t.pricing.desc}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {t.pricing.plans.map((plan, index) => {
                        const isMain = index === 1; // Pro plan
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 md:p-10 rounded-3xl border transition-all ${isMain
                                    ? 'bg-blue-600/5 border-blue-500 shadow-2xl scale-105 z-10'
                                    : 'bg-white/[0.02] border-white/10'
                                    }`}
                            >
                                {isMain && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                                        {t.pricing.popular}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                                    {plan.price !== 'Custom' && (
                                        <span className="text-slate-500 text-sm">{t.pricing.monthly}</span>
                                    )}
                                </div>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    {plan.desc}
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                <Check size={12} className="text-blue-500" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${isMain
                                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20'
                                    : 'bg-white/5 hover:bg-white/10 text-white'
                                    }`}>
                                    {isMain ? t.pricing.ctaHighlight : t.pricing.ctaNormal}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
