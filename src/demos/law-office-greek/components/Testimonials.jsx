import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">{t.testimonials.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">{t.testimonials.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {t.testimonials.list.map((test, i) => (
                        <div key={i} className="bg-slate-50 p-8 md:p-10 border-l-4 border-indigo-900 relative rounded-r-2xl">
                            <Quote className="absolute top-6 right-6 text-slate-200" size={48} />
                            <p className="text-lg md:text-xl text-slate-800 italic font-serif leading-relaxed mb-8">"{test.text}"</p>
                            <div>
                                <h4 className="font-bold text-slate-900">{test.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
