import React from 'react';
import { Instagram } from 'lucide-react';

const Stylists = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">Our Team</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Meet the Artists</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Anna V.",
                            role: "Master Colorist",
                            image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Dimitris K.",
                            role: "Senior Stylist",
                            image: "https://images.unsplash.com/photo-1534030347209-7147fd69a3f2?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Sophia L.",
                            role: "Bridal Specialist",
                            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400"
                        }
                    ].map((stylist, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-[2rem] h-[400px]">
                            <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold">{stylist.name}</h3>
                                <p className="text-rose-300 font-medium mb-4">{stylist.role}</p>
                                <button className="self-start p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors">
                                    <Instagram size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stylists;
