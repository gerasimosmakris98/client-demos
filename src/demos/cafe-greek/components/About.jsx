import React from 'react';
import { Coffee, Clock, Award } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 bg-[#FFF8F0] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
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

                <div className="space-y-8">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Story</span>
                    <h2 className="text-5xl font-black text-amber-950 leading-tight">Authentic Greek Coffee Culture, Reimagined.</h2>
                    <p className="text-amber-900/70 text-lg leading-relaxed">
                        Nestled in the heart of the city, our cafe brings together the warmth of traditional Greek hospitality with modern artisanal coffee craft. Every bean is sourced from sustainable farms, and every cup is brewed with passion.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                                <Coffee size={24} />
                            </div>
                            <h4 className="font-bold text-amber-950 text-xl">Artisanal Roasts</h4>
                            <p className="text-amber-900/60 text-sm">Hand-picked beans roasted locally for maximum freshness.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                                <Clock size={24} />
                            </div>
                            <h4 className="font-bold text-amber-950 text-xl">All Day Brunch</h4>
                            <p className="text-amber-900/60 text-sm">Serving your favorites from sunrise to sunset.</p>
                        </div>
                    </div>

                    <button className="px-8 py-4 bg-amber-900 text-amber-50 rounded-xl font-bold hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
