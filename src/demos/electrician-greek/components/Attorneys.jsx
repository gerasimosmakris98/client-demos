import React from 'react';
import { Scale, Users, Mail } from 'lucide-react';

const Attorneys = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Our Team</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Expert Legal Counsel</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Alexandros M.",
                            role: "Managing Partner",
                            specialty: "Corporate Law",
                            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Eleni K.",
                            role: "Senior Associate",
                            specialty: "Family Law",
                            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                        },
                        {
                            name: "Dimitris P.",
                            role: "Associate",
                            specialty: "Civil Litigation",
                            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
                        }
                    ].map((lawyer, i) => (
                        <div key={i} className="bg-white group hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                            <div className="relative h-80 overflow-hidden">
                                <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{lawyer.name}</h3>
                                <p className="text-indigo-900 font-medium text-sm uppercase tracking-wide mb-4">{lawyer.role}</p>
                                <div className="w-12 h-1 bg-indigo-900 mb-6 group-hover:w-full transition-all duration-500"></div>
                                <div className="flex items-center gap-2 text-slate-600 text-sm mb-6">
                                    <Scale size={16} />
                                    <span>{lawyer.specialty}</span>
                                </div>
                                <button className="w-full py-3 border border-slate-200 text-slate-900 font-bold text-sm uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <Mail size={16} /> Contact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Attorneys;
