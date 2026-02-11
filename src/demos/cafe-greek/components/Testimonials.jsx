import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">{t.testimonials.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-950 mt-2">{t.testimonials.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.testimonials.reviews.map((review, i) => (
                        <div key={i} className="bg-[#FFF8F0] p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-8 right-8 text-amber-900/10" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-amber-900/80 text-lg mb-8 italic relative z-10">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-100" />
                                <div>
                                    <h4 className="font-bold text-amber-950">{review.name}</h4>
                                    <p className="text-amber-700 text-xs font-bold uppercase tracking-wide">{review.role}</p>
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
