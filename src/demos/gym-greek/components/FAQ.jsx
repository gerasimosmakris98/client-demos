import React from 'react';
import { Plus } from 'lucide-react';

const FAQ = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">{t.faq.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 italic">{t.faq.title}</h2>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {t.faq.items.map((item, i) => (
                        <div key={i} className="group p-5 md:p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-lime-500/30 transition-colors cursor-pointer flex justify-between items-center">
                            <span className="font-bold text-base md:text-lg">{item.q}</span>
                            <Plus className="text-lime-500 group-hover:rotate-90 transition-transform flex-shrink-0 ml-4" />
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-white/10 text-center px-4">
                    <h2 className="text-5xl md:text-[10rem] font-black italic text-neutral-800 leading-none select-none">
                        GM GYM
                    </h2>
                    <div className="flex justify-center gap-6 md:gap-8 mt-8 text-gray-500 font-mono text-[10px] md:text-sm uppercase tracking-widest">
                        <a href="#" className="hover:text-lime-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Facebook</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">TikTok</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
