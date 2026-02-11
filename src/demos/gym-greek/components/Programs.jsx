import React from 'react';
import { Dumbbell, Users, Clock, Zap } from 'lucide-react';

const Programs = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">{t.programs.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 italic">{t.programs.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {t.programs.items.map((program, i) => (
                        <div key={i} className="group relative bg-neutral-800 p-8 rounded-3xl border border-white/5 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6 h-48 rounded-2xl overflow-hidden relative">
                                <img src={program.img} alt={program.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                            </div>
                            <div className="mb-6 p-4 bg-lime-500/10 w-fit rounded-2xl text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-2xl font-black italic mb-4">{program.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                {program.desc}
                            </p>
                            <button className="flex items-center gap-2 text-lime-400 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                                <Clock size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
