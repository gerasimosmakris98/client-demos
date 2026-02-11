import React from 'react';

const services = [
    { name: 'Γυναικείο Κούρεμα', price: '€25', time: '45\'' },
    { name: 'Ανδρικό Κούρεμα', price: '€18', time: '30\'' },
    { name: 'Βαφή Ρίζα', price: '€35', time: '60\'' },
    { name: 'Balayage / Ombre', price: '€90+', time: '180\'' },
    { name: 'Θεραπεία Κερατίνης', price: '€50', time: '90\'' },
    { name: 'Χτένισμα Βραδινό', price: '€30', time: '45\'' },
];

const SalonServices = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-rose-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.3),transparent_70%)]"></div>
            <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-rose-400 font-bold tracking-widest uppercase text-sm">{t.services.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-black mt-2 italic">{t.services.title}</h2>
                </div>

                <div className="glass-panel p-6 md:p-12 bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem]">
                    <div className="grid gap-6 md:gap-8">
                        {t.services.items.map((service, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-white/10 pb-6 last:border-0 last:pb-0 group">
                                <div className="space-y-1">
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">{service.title}</h3>
                                    <p className="text-sm text-rose-100/60 font-light">{service.desc}</p>
                                </div>
                                <div className="text-lg md:text-xl font-black text-rose-300 whitespace-nowrap ml-4">
                                    {service.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SalonServices;
