import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Client Trust</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            text: "Their strategic approach and attention to detail were instrumental in winning our case. Highly recommended.",
                            author: "Konstantinos A.",
                            title: "CEO, TechSolutions"
                        },
                        {
                            text: "Professional, empathetic, and effective. They guided us through a difficult family matter with grace.",
                            author: "Maria L.",
                            title: "Private Client"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-slate-50 p-10 border-l-4 border-indigo-900 relative">
                            <Quote className="absolute top-6 right-6 text-slate-200" size={48} />
                            <p className="text-xl text-slate-800 italic font-serif leading-relaxed mb-8">"{t.text}"</p>
                            <div>
                                <h4 className="font-bold text-slate-900">{t.author}</h4>
                                <p className="text-indigo-900 text-sm">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
