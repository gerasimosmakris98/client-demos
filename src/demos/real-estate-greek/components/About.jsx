import React from 'react';
import { Scissors, Zap, Heart } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 bg-rose-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                    <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">About Us</span>
                    <h2 className="text-5xl font-black text-slate-900 leading-tight">Redefining Beauty, <br /> One Cut at a Time.</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Founded in 2026, Salon Greek isn't just a place to get a haircut—it's a sanctuary for self-care. We believe that true style comes from confidence, and our mission is to help you find yours.
                    </p>

                    <div className="flex gap-8 pt-4">
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm">
                                <Scissors size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900">Expert Stylists</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm">
                                <Zap size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900">Premium Products</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm">
                                <Heart size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900">Personal Care</h4>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
                            alt="Salon Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-10 -right-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-300 rounded-full blur-3xl opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
