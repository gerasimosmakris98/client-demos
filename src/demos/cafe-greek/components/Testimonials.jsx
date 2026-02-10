import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-black text-amber-950 mt-2">Loved by Locals</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Elena P.",
                            role: "Food Critic",
                            text: "The freddo espresso here is unmatched. The atmosphere reminds me of old Athens but with a modern twist.",
                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                        },
                        {
                            name: "Giorgos K.",
                            role: "Regular",
                            text: "Best brunch spot in town. You have to try the Kayanas, it's absolutely delicious!",
                            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
                        },
                        {
                            name: "Maria S.",
                            role: "Designer",
                            text: "I work from here almost every day. Great wifi, amazing coffee, and the staff is super friendly.",
                            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                        }
                    ].map((review, i) => (
                        <div key={i} className="bg-[#FFF8F0] p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-8 right-8 text-amber-900/10" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-amber-900/80 text-lg mb-8 italic relative z-10">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-100" />
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
