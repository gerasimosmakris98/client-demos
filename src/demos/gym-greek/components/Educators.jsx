import React from 'react';

const Educators = () => {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">The Team</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2 italic">ELITE TRAINERS</h2>
                    </div>
                    <button className="border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        {
                            name: "Alex K.",
                            role: "Head Coach",
                            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop"
                        },
                        {
                            name: "Maria S.",
                            role: "Yoga Instructor",
                            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop"
                        },
                        {
                            name: "Kostas D.",
                            role: "CrossFit Coach",
                            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500&auto=format&fit=crop"
                        },
                        {
                            name: "Elena P.",
                            role: "Nutritionist",
                            image: "https://images.unsplash.com/photo-1620371350503-9fe5927c3871?q=80&w=500&auto=format&fit=crop"
                        }
                    ].map((trainer, i) => (
                        <div key={i} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-black italic">{trainer.name}</h3>
                                <p className="text-lime-400 font-mono text-sm uppercase tracking-wider">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educators;
