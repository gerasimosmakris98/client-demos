import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1A0F0A] text-amber-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-3xl font-black tracking-tighter">Cafe<span className="text-amber-500">.</span></h2>
                        <p className="text-white/40 max-w-sm">
                            Experience the true taste of Greece in every cup. Artisanal coffee, homemade pastries, and a welcoming atmosphere.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 hover:bg-amber-500 hover:text-white rounded-lg transition-colors text-white/60">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2026 Cafe Greek Demo. All rights reserved.</p>
                    <p>Designed by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
