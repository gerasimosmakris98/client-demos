import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
    return (
        <section className="py-24 bg-[#2C1810] text-amber-50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <div>
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Visit Us</span>
                        <h2 className="text-5xl font-black text-white mt-2">Find Your Way to Flavor.</h2>
                        <p className="text-white/60 text-lg mt-6">
                            We are located in the historic center, just a few minutes walk from the metro station. Drop by for a quick espresso or stay for a long lunch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-amber-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Address</h4>
                                    <p className="text-white/60">Mitropoleos 45,<br />Athens 105 56</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-amber-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Phone</h4>
                                    <p className="text-white/60">+30 210 123 4567</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-amber-400">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Hours</h4>
                                    <p className="text-white/60">Mon-Fri: 08:00 - 23:00</p>
                                    <p className="text-white/60">Sat-Sun: 09:00 - 00:00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-amber-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Email</h4>
                                    <p className="text-white/60">hello@cafe-greek.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[400px] lg:h-auto bg-white/5 rounded-[2rem] overflow-hidden relative">
                    {/* Mock Map */}
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                        alt="Map Location"
                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce">
                            We are here!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
