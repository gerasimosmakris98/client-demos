import React, { useEffect } from 'react';
import AIChat from '../../components/common/AIChat';

const RestaurantDemo = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#1a0a0a] min-h-screen text-white font-serif">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-[#1a0a0a]/80 to-transparent" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="text-red-400 font-mono text-xs tracking-[0.4em] uppercase mb-8">Fine Dining Experience</div>
                    <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight">
                        GM <span className="text-red-500">RESTAURANT</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                        Αυθεντική γαστρονομία με φρέσκα, τοπικά υλικά σε μια ατμόσφαιρα που μαγεύει.
                    </p>
                    <button className="bg-red-700 hover:bg-red-600 px-10 py-4 rounded-none font-bold tracking-widest uppercase text-sm transition-colors border border-red-500/50">
                        Κράτηση Τραπεζιού
                    </button>
                </div>
            </section>

            {/* Menu Preview */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-4">ΤΟ ΜΕΝΟΥ ΜΑΣ</h2>
                    <p className="text-gray-500 mb-16 italic">Εποχιακές γεύσεις, διαχρονικές συνταγές</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'Ψητό Αρνί', price: '€24', desc: 'Με δεντρολίβανο & πατάτες φούρνου' },
                            { name: 'Θαλασσινά Πιάτο', price: '€32', desc: 'Γαρίδες, χταπόδι & καλαμάρι' },
                            { name: 'Μουσακάς', price: '€16', desc: 'Παραδοσιακή συνταγή της γιαγιάς' },
                            { name: 'Σοκολατένιο Fondant', price: '€12', desc: 'Με παγωτό βανίλια Μαδαγασκάρης' }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-6 border-b border-white/10">
                                <div className="text-left">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                                <span className="text-red-400 font-black text-xl">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 text-center text-gray-600 text-sm">
                © 2026 GM Restaurant. All rights reserved.
            </footer>
            <AIChat brandName="GM Restaurant" />
        </div>
    );
};

export default RestaurantDemo;
