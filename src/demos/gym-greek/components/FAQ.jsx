import React from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 italic">QUESTIONS?</h2>
                </div>

                <div className="space-y-4">
                    {[
                        "What are your opening hours?",
                        "Do you offer free parking?",
                        "Can I freeze my membership?",
                        "Do you have showers and lockers?"
                    ].map((q, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-lime-500/30 transition-colors cursor-pointer flex justify-between items-center">
                            <span className="font-bold text-lg">{q}</span>
                            <Plus className="text-lime-500 group-hover:rotate-90 transition-transform" />
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-24 pt-24 border-t border-white/10 text-center">
                    <h2 className="text-6xl md:text-[10rem] font-black italic text-neutral-800 leading-none select-none">
                        GM GYM
                    </h2>
                    <div className="flex justify-center gap-8 mt-8 text-gray-500 font-mono text-sm uppercase tracking-widest">
                        <a href="#" className="hover:text-lime-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Facebook</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">TikTok</a>
                    </div>
                    <p className="mt-8 text-gray-600 text-xs">
                        © 2026 GM Gym. All rights reserved. <br /> Designed by Antigravity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
