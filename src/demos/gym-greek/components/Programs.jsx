import React from 'react';
import { Dumbbell, Users, Clock, Zap } from 'lucide-react';

const Programs = () => {
    return (
        <section className="py-24 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">Προγραμματα</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 italic">CHOOSE YOUR GRIND</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "HYROX / CROSSFIT",
                            desc: "Υψηλής έντασης προπόνηση για δύναμη και αντοχή.",
                            icon: Zap,
                            level: "Advanced"
                        },
                        {
                            title: "STRENGTH & CONDITIONING",
                            desc: "Εξειδικευμένα προγράμματα ενδυνάμωσης.",
                            icon: Dumbbell,
                            level: "All Levels"
                        },
                        {
                            title: "GROUP FITNESS",
                            desc: "Ομαδικά προγράμματα (Yoga, Pilates, HIIT).",
                            icon: Users,
                            level: "Beginner Friendly"
                        }
                    ].map((program, i) => (
                        <div key={i} className="group relative bg-neutral-800 p-8 rounded-3xl border border-white/5 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs font-bold text-gray-400 border border-white/10">
                                {program.level}
                            </div>
                            <div className="mb-6 p-4 bg-lime-500/10 w-fit rounded-2xl text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors">
                                <program.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black italic mb-4">{program.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {program.desc}
                            </p>
                            <button className="flex items-center gap-2 text-lime-400 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                                Περισσοτερα <Clock size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
