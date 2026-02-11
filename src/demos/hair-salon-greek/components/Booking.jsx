import React from 'react';
import { Calendar, Clock, Scissors } from 'lucide-react';

const Booking = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <span className="text-rose-400 font-bold tracking-widest uppercase text-sm">{t.booking.badge}</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-8 leading-tight">{t.booking.title}</h2>

                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/10 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
                            <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl md:rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                                <Scissors className="text-rose-400 shrink-0" size={20} />
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.booking.form.service}</p>
                                    <p className="text-white font-bold text-sm">...</p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl md:rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                                <Calendar className="text-rose-400 shrink-0" size={20} />
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.booking.form.date}</p>
                                    <p className="text-white font-bold text-sm">...</p>
                                </div>
                            </div>
                            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl md:rounded-full font-bold transition-all shadow-lg hover:shadow-rose-500/25 text-sm md:text-base">
                                {t.booking.form.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
