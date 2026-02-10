import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Clock, Wifi, Coffee, UtensilsCrossed, Waves, ChevronDown, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1814] text-[#d4cbb8]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-[#1a1814]/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.4em] uppercase mb-8">A Sanctuary of Calm</div>
                <h1 className="text-5xl md:text-9xl font-medium tracking-widest mb-6 font-serif">GM HOTEL</h1>
                <p className="text-lg md:text-xl text-[#d4cbb8]/60 max-w-2xl mx-auto mb-12 font-light tracking-wide">Πολυτέλεια, ηρεμία και αυθεντική ελληνική φιλοξενία στην καρδιά της Αθήνας.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#d4cbb8] text-[#1a1814] px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors flex items-center gap-2 justify-center"><Calendar size={16} /> Reserve Now</button>
                    <button className="border border-[#d4cbb8]/30 px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#d4cbb8]/10 transition-colors">Explore</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section className="py-24 bg-[#1a1814] text-[#d4cbb8]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden h-[500px]"><img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2625&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hotel lobby" /></div>
            <div>
                <span className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.3em] uppercase">Our Story</span>
                <h2 className="text-4xl font-serif mt-4 mb-6">Φιλοξενία Από Το <span className="text-[#d4cbb8]">1968</span></h2>
                <p className="text-[#d4cbb8]/60 leading-relaxed mb-8">Το GM Hotel συνδυάζει τη σύγχρονη πολυτέλεια με την παραδοσιακή ελληνική φιλοξενία. 56 δωμάτια & σουίτες στο κέντρο της Αθήνας, με θέα στην Ακρόπολη.</p>
                <div className="grid grid-cols-3 gap-6">
                    {[{ num: '56', label: 'Rooms' }, { num: '5★', label: 'Rating' }, { num: '50+', label: 'Years' }].map((s, i) => (
                        <div key={i} className="text-center border border-[#d4cbb8]/10 p-4 rounded-xl"><div className="text-2xl font-bold">{s.num}</div><div className="text-[#d4cbb8]/40 text-xs mt-1 uppercase tracking-widest">{s.label}</div></div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Rooms = () => (
    <section className="py-24 bg-[#15130f] text-[#d4cbb8]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.3em] uppercase">Accommodation</span><h2 className="text-4xl font-serif mt-4">OUR ROOMS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Classic Room', price: '€120', size: '28m²' },
                    { name: 'Deluxe Suite', price: '€220', size: '45m²' },
                    { name: 'Penthouse', price: '€450', size: '85m²' }
                ].map((r, i) => (
                    <div key={i} className="group rounded-3xl overflow-hidden border border-[#d4cbb8]/10 hover:border-[#d4cbb8]/30 transition-all">
                        <div className="h-64 bg-[#1a1814] relative"><div className="absolute bottom-4 left-4 text-sm font-mono text-[#d4cbb8]/60">{r.size}</div></div>
                        <div className="p-6 flex justify-between items-center">
                            <div><h3 className="text-lg font-bold">{r.name}</h3></div>
                            <div className="text-lg font-bold">{r.price}<span className="text-[#d4cbb8]/40 text-sm">/night</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Amenities = () => (
    <section className="py-24 bg-[#1a1814] text-[#d4cbb8]">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.3em] uppercase">Amenities</span><h2 className="text-4xl font-serif mt-4">FACILITIES</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: Waves, name: 'Spa & Pool' },
                    { icon: UtensilsCrossed, name: 'Fine Dining' },
                    { icon: Wifi, name: 'Free WiFi' },
                    { icon: Coffee, name: 'Rooftop Bar' }
                ].map((a, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl border border-[#d4cbb8]/10 hover:border-[#d4cbb8]/30 transition-colors">
                        <a.icon size={32} className="text-[#d4cbb8] mx-auto mb-4" />
                        <h3 className="font-bold text-sm uppercase tracking-widest">{a.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-[#15130f] text-[#d4cbb8]">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.3em] uppercase">Guest Reviews</span><h2 className="text-4xl font-serif mt-4">WHAT GUESTS SAY</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Emma L.', text: 'An absolute gem. The rooftop view is unforgettable.' },
                    { name: 'Marco R.', text: 'Best hotel experience in Athens. Will come back.' },
                    { name: 'Σοφία Κ.', text: 'Απίστευτη εμπειρία, αψεγάδιαστη εξυπηρέτηση!' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-[#d4cbb8]/10">
                        <div className="flex gap-1 text-[#d4cbb8] mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-[#d4cbb8]/60 mb-6 italic font-serif">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Reservation = () => (
    <section className="py-24 bg-[#1a1814] text-[#d4cbb8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-[#d4cbb8]/60 font-mono text-xs tracking-[0.3em] uppercase">Booking</span>
            <h2 className="text-4xl font-serif mt-4 mb-12">MAKE A RESERVATION</h2>
            <div className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="text-xs uppercase tracking-widest text-[#d4cbb8]/40 block mb-2">Check-in</label><input type="date" className="w-full p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none" /></div>
                    <div><label className="text-xs uppercase tracking-widest text-[#d4cbb8]/40 block mb-2">Check-out</label><input type="date" className="w-full p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none" /></div>
                </div>
                <select className="w-full p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none text-[#d4cbb8]/60 appearance-none">
                    <option>Room Type</option><option>Classic Room</option><option>Deluxe Suite</option><option>Penthouse</option>
                </select>
                <input className="w-full p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none" placeholder="Full Name" />
                <button className="w-full bg-[#d4cbb8] text-[#1a1814] py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-colors">Book Now</button>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section className="py-24 bg-[#15130f] text-[#d4cbb8]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Phone, title: 'Call Us', text: '+30 210 000 0000' },
                { icon: MapPin, title: 'Visit Us', text: 'Πλ. Συντάγματος 10, Αθήνα' },
                { icon: Mail, title: 'Email', text: 'reservations@gmhotel.gr' }
            ].map((c, i) => (
                <div key={i} className="text-center p-8 rounded-3xl border border-[#d4cbb8]/10">
                    <c.icon size={28} className="text-[#d4cbb8] mx-auto mb-4" />
                    <h3 className="font-bold mb-2 uppercase tracking-widest text-sm">{c.title}</h3>
                    <p className="text-[#d4cbb8]/60 text-sm">{c.text}</p>
                </div>
            ))}
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#1a1814] py-12 border-t border-[#d4cbb8]/10 text-center">
        <h3 className="text-5xl font-serif text-[#d4cbb8]/10 tracking-widest mb-4">GM HOTEL</h3>
        <p className="text-[#d4cbb8]/30 text-xs tracking-widest uppercase">© 2026 GM Hotel. All rights reserved.</p>
    </footer>
);

const HotelDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Hotel',
            brandLogo: '🏨',
            accentColor: 'stone',
            roles: [{ id: 'admin', label: 'GM' }, { id: 'staff', label: 'Concierge' }, { id: 'user', label: 'Housekeeping' }],
            stats: [
                { label: 'Occupancy', value: '87%', trend: 5 },
                { label: 'Check-ins Today', value: '14', trend: 10 },
                { label: 'RevPAR', value: '€185', trend: 8 },
                { label: 'Reviews', value: '4.8★', trend: 2 }
            ],
            kpis: [
                { label: 'Room Readiness', value: '99%', progress: 99 },
                { label: 'ADR', value: '€210', progress: 84 },
                { label: 'Guest Return Rate', value: '42%', progress: 42 }
            ]
        }} />;
    }

    return (
        <div className="bg-[#1a1814] min-h-screen text-[#d4cbb8] font-serif">
            <Hero /><About /><Rooms /><Amenities /><TestimonialsSection /><Reservation /><ContactSection /><FooterSection />
            <AIChat brandName="GM Hotel" />
        </div>
    );
};

export default HotelDemo;
