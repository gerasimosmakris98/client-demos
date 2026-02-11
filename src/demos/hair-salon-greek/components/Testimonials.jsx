import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-rose-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">{t.testimonials.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">{t.testimonials.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {t.testimonials.list.map((review, i) => (
                        <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm relative border border-rose-100 flex flex-col">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-rose-400 text-rose-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 text-lg mb-8 italic flex-1">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
