import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-rose-500/20 rounded-xl">
                                <Scissors size={24} className="text-rose-400" />
                            </div>
                            <span className="text-2xl font-black">GM <span className="text-rose-400">SALON</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Ομορφιά, στυλ & φροντίδα στην καρδιά της πόλης. Εμπιστευτείτε τους ειδικούς.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6">Επικοινωνία</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3"><Phone size={14} /> +30 210 000 0000</li>
                            <li className="flex items-center gap-3"><Mail size={14} /> info@gmsalon.gr</li>
                            <li className="flex items-center gap-3"><MapPin size={14} /> Ερμού 45, Αθήνα</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6">Ωράριο</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3"><Clock size={14} /> Δευ - Παρ: 09:00 - 21:00</li>
                            <li className="flex items-center gap-3"><Clock size={14} /> Σαβ: 09:00 - 18:00</li>
                            <li className="flex items-center gap-3"><Clock size={14} /> Κυρ: Κλειστά</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-rose-400 mb-6">Social</h4>
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

                <div className="border-t border-white/10 pt-8 text-center text-xs text-slate-500">
                    © 2026 GM Salon. All rights reserved. Designed by Antigravity.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
