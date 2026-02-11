import React from 'react';

const Educators = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
                    <div>
                        <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">{t.trainers.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2 italic">{t.trainers.title}</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {t.trainers.list.map((trainer, i) => (
                        <div key={i} className="group relative h-[300px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                <Users size={40} className="text-white/10" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                <h3 className="text-lg md:text-2xl font-black italic">{trainer.name}</h3>
                                <p className="text-lime-400 font-mono text-[10px] md:text-sm uppercase tracking-wider">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educators;
