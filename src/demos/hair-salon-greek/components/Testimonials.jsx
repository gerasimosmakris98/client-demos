import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-rose-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">Reviews</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Client Love</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Georgia P.",
                            service: "Balayage",
                            text: "I've never been happier with my color! Anna is a true artist.",
                            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                        },
                        {
                            name: "Eleni M.",
                            service: "Bridal Styling",
                            text: "They made me feel like a princess on my wedding day. Thank you so much!",
                            image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=200"
                        },
                        {
                            name: "Katerina S.",
                            service: "Haircut",
                            text: "The best salon experience in Athens. The atmosphere is so relaxing.",
                            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                        }
                    ].map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm relative border border-rose-100">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-rose-400 text-rose-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 text-lg mb-8 italic">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-100" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-rose-400 text-xs font-bold uppercase tracking-wide">{review.service}</p>
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
