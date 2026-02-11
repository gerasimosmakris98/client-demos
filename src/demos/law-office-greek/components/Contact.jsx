import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-[#0B1120] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="text-center lg:text-left">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">{t.contact.badge}</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 mb-8 leading-tight">{t.contact.title}</h2>

                    <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                        <div className="flex items-start gap-4 text-left">
                            <MapPin className="text-indigo-500 mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg">Athens</h4>
                                <p className="text-slate-400 text-sm md:text-base">Leof. Sofias 102, 115 28</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-left">
                            <Phone className="text-indigo-500 mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-lg">Direct</h4>
                                <p className="text-slate-400 text-sm md:text-base">+30 210 555 0199</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-2xl skew-y-0 lg:skew-y-1 transform origin-top-left rounded-2xl lg:rounded-none">
                    <form className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.fields.name}</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900 rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.fields.email}</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900 rounded-lg" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.contact.fields.message}</label>
                            <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900 rounded-lg"></textarea>
                        </div>
                        <button type="button" className="w-full bg-indigo-900 text-white font-bold py-4 uppercase tracking-widest hover:bg-indigo-800 transition-colors rounded-lg shadow-lg">
                            {t.contact.fields.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
