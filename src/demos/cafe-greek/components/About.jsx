import React from 'react';
import { Coffee, Clock, Award } from 'lucide-react';

const About = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-[#FFF8F0] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000"
                            alt="Barista pouring coffee"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-100 text-amber-900 rounded-full">
                                <Award size={32} />
                            </div>
                            <div>
                                <p className="text-amber-900 font-bold text-lg">Est. 1998</p>
                                <p className="text-amber-700 text-sm">Best of Athens 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">{t.about.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-950 leading-tight">{t.about.title}</h2>
                    <p className="text-amber-900/70 text-lg leading-relaxed">{t.about.desc}</p>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                                <Coffee size={24} />
                            </div>
                            <h4 className="font-bold text-amber-950 text-xl">{t.about.roasts.title}</h4>
                            <p className="text-amber-900/60 text-sm">{t.about.roasts.desc}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                                <Clock size={24} />
                            </div>
                            <h4 className="font-bold text-amber-950 text-xl">{t.about.brunch.title}</h4>
                            <p className="text-amber-900/60 text-sm">{t.about.brunch.desc}</p>
                        </div>
                    </div>

                    <button className="px-8 py-4 bg-amber-900 text-amber-50 rounded-xl font-bold hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20">
                        {t.about.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
