import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-slate-900 text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-rose-500/20 rounded-xl">
                                <Scissors size={24} className="text-rose-400" />
                            </div>
                            <span className="text-2xl font-black">GM <span className="text-rose-400">SALON</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t.hero.desc}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6 font-mono">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3"><Phone size={14} /> {t.footer.phone}</li>
                            <li className="flex items-center gap-3 text-xs md:text-sm"><MapPin size={14} /> {t.footer.address}</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6 font-mono">Hours</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3"><Clock size={14} /> {t.footer.hours}</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6 font-mono">Social</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-rose-500/20 transition-colors border border-white/10">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-rose-500/20 transition-colors border border-white/10">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-[10px] md:text-xs text-slate-500">
                    © 2026 GM Salon. All rights reserved. Designed by Antigravity.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
