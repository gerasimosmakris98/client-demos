import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Clock, Wifi, Coffee, UtensilsCrossed, Waves, ChevronDown, Calendar, Check, CalendarDays, BedDouble, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const hotelTabs = [
    {
        id: 'bookings', label: 'Bookings', icon: CalendarDays, columns: ['Guest', 'Status', 'Room', 'Dates'],
        rows: [['Maria K.', 'Confirmed', 'Suite 201', 'Feb 10-14'], ['John D.', 'Confirmed', 'Deluxe 305', 'Feb 11-13'], ['Elena P.', 'Pending', 'Standard 108', 'Feb 12-15'], ['George S.', 'Confirmed', 'Suite 401', 'Feb 10-17'], ['Anna M.', 'Cancelled', 'Deluxe 302', 'Feb 13-14']]
    },
    {
        id: 'rooms', label: 'Rooms', icon: BedDouble, columns: ['Room', 'Status', 'Type', 'Rate'],
        rows: [['Suite 201', 'Active', 'Suite', '€280/night'], ['Deluxe 305', 'Active', 'Deluxe', '€180/night'], ['Standard 108', 'Active', 'Standard', '€120/night'], ['Suite 401', 'Active', 'Penthouse', '€450/night'], ['Deluxe 302', 'Pending', 'Deluxe', '€180/night']]
    },
    {
        id: 'guests', label: 'Guests', icon: Users, columns: ['Guest', 'Status', 'VIP', 'Requests'],
        rows: [['Maria K.', 'Active', 'Gold', 'Late checkout'], ['John D.', 'Active', 'Silver', 'Extra pillows'], ['Elena P.', 'Pending', '--', 'Airport transfer'], ['George S.', 'Active', 'Platinum', 'Spa package']]
    },
    {
        id: 'housekeeping', label: 'Housekeeping', icon: Sparkles, columns: ['Room', 'Status', 'Assigned', 'Priority'],
        rows: [['Suite 201', 'Completed', 'Maria T.', 'High'], ['Deluxe 305', 'In Progress', 'Elena K.', 'Normal'], ['Standard 108', 'Pending', 'Anna P.', 'Normal'], ['Suite 401', 'Pending', 'Maria T.', 'High'], ['Deluxe 302', 'Completed', 'Sofia K.', 'Low']]
    },
];

/* ───────── ELEGANT DIVIDER ───────── */
const Divider = () => (
    <div className="flex items-center justify-center py-2 md:py-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4cbb8]/20" />
        <div className="mx-3 w-1.5 h-1.5 rounded-full bg-[#d4cbb8]/30" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4cbb8]/20" />
    </div>
);

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1814] text-[#d4cbb8]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-[#1a1814]/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 md:mb-8">A Sanctuary of Calm</div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-widest mb-4 md:mb-6 font-serif">GM HOTEL</h1>
                <p className="text-base md:text-xl text-[#d4cbb8]/60 max-w-2xl mx-auto mb-8 md:mb-12 font-light tracking-wide px-2">Πολυτέλεια, ηρεμία και αυθεντική ελληνική φιλοξενία στην καρδιά της Αθήνας.</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                    <button className="bg-[#d4cbb8] text-[#1a1814] px-8 md:px-10 py-3.5 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-white transition-colors flex items-center gap-2 justify-center">
                        <Calendar size={16} /> Reserve Now
                    </button>
                    <button className="border border-[#d4cbb8]/30 px-8 md:px-10 py-3.5 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-[#d4cbb8]/10 transition-colors">Explore</button>
                </div>
            </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-[#d4cbb8]/20">
            <ChevronDown size={28} />
        </motion.div>
    </section>
);

const About = () => (
    <section className="py-16 md:py-24 bg-[#1a1814] text-[#d4cbb8]">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-8">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-[280px] md:h-[500px]">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2625&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hotel lobby" />
            </div>
            <div>
                <span className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 md:mt-4 mb-4 md:mb-6">Φιλοξενία Από Το <span className="text-[#d4cbb8]">1968</span></h2>
                <p className="text-[#d4cbb8]/60 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">Το GM Hotel συνδυάζει τη σύγχρονη πολυτέλεια με την παραδοσιακή ελληνική φιλοξενία. 56 δωμάτια & σουίτες στο κέντρο της Αθήνας, με θέα στην Ακρόπολη.</p>
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[{ num: '56', label: 'Rooms' }, { num: '5★', label: 'Rating' }, { num: '50+', label: 'Years' }].map((s, i) => (
                        <div key={i} className="text-center border border-[#d4cbb8]/10 p-3 md:p-4 rounded-xl">
                            <div className="text-xl md:text-2xl font-bold">{s.num}</div>
                            <div className="text-[#d4cbb8]/40 text-[10px] md:text-xs mt-1 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

/* ───────── ROOMS — Horizontal Scroll on Mobile ───────── */
const Rooms = () => (
    <section className="py-16 md:py-24 bg-[#15130f] text-[#d4cbb8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">Accommodation</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 md:mt-4">OUR ROOMS</h2>
            </div>
            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                {[
                    { name: 'Classic Room', price: '€120', size: '28m²', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Deluxe Suite', price: '€220', size: '45m²', img: 'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Penthouse', price: '€450', size: '85m²', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' }
                ].map((r, i) => (
                    <div key={i} className="group rounded-2xl md:rounded-3xl overflow-hidden border border-[#d4cbb8]/10 hover:border-[#d4cbb8]/30 transition-all min-w-[280px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink">
                        <div className="h-48 md:h-64 relative overflow-hidden">
                            <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15130f]/80 to-transparent" />
                            <div className="absolute bottom-3 left-4 text-xs md:text-sm font-mono text-[#d4cbb8]/60">{r.size}</div>
                        </div>
                        <div className="p-4 md:p-6 flex justify-between items-center">
                            <div><h3 className="text-base md:text-lg font-bold">{r.name}</h3></div>
                            <div className="text-base md:text-lg font-bold">{r.price}<span className="text-[#d4cbb8]/40 text-xs md:text-sm">/night</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Amenities = () => (
    <section className="py-16 md:py-24 bg-[#1a1814] text-[#d4cbb8]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">Amenities</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 md:mt-4">FACILITIES</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {[
                    { icon: Waves, name: 'Spa & Pool' },
                    { icon: UtensilsCrossed, name: 'Fine Dining' },
                    { icon: Wifi, name: 'Free WiFi' },
                    { icon: Coffee, name: 'Rooftop Bar' }
                ].map((a, i) => (
                    <div key={i} className="text-center p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[#d4cbb8]/10 hover:border-[#d4cbb8]/30 transition-colors">
                        <a.icon size={28} className="text-[#d4cbb8] mx-auto mb-3 md:mb-4 md:w-8 md:h-8" />
                        <h3 className="font-bold text-xs md:text-sm uppercase tracking-widest">{a.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-16 md:py-24 bg-[#15130f] text-[#d4cbb8]">
        <Divider />
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-8">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">Guest Reviews</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 md:mt-4">WHAT GUESTS SAY</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { name: 'Emma L.', text: 'An absolute gem. The rooftop view is unforgettable.' },
                    { name: 'Marco R.', text: 'Best hotel experience in Athens. Will come back.' },
                    { name: 'Σοφία Κ.', text: 'Απίστευτη εμπειρία, αψεγάδιαστη εξυπηρέτηση!' }
                ].map((t, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#d4cbb8]/10">
                        <div className="flex gap-1 text-[#d4cbb8] mb-3 md:mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}</div>
                        <p className="text-[#d4cbb8]/60 mb-4 md:mb-6 italic font-serif text-sm md:text-base">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Reservation = () => (
    <section className="py-16 md:py-24 bg-[#1a1814] text-[#d4cbb8]">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <span className="text-[#d4cbb8]/60 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">Booking</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 md:mt-4 mb-8 md:mb-12">MAKE A RESERVATION</h2>
            <div className="space-y-3 md:space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4cbb8]/40 block mb-2">Check-in</label>
                        <input type="date" className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none text-sm" />
                    </div>
                    <div>
                        <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#d4cbb8]/40 block mb-2">Check-out</label>
                        <input type="date" className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none text-sm" />
                    </div>
                </div>
                <select className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none text-[#d4cbb8]/60 appearance-none text-sm">
                    <option>Room Type</option><option>Classic Room</option><option>Deluxe Suite</option><option>Penthouse</option>
                </select>
                <input className="w-full p-3.5 md:p-4 rounded-xl bg-white/5 border border-[#d4cbb8]/10 focus:border-[#d4cbb8] outline-none text-sm" placeholder="Full Name" />
                <button className="w-full bg-[#d4cbb8] text-[#1a1814] py-3.5 md:py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-colors text-sm">Book Now</button>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section className="py-16 md:py-24 bg-[#15130f] text-[#d4cbb8]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {[
                { icon: Phone, title: 'Call Us', text: '+30 210 000 0000' },
                { icon: MapPin, title: 'Visit Us', text: 'Πλ. Συντάγματος 10, Αθήνα' },
                { icon: Mail, title: 'Email', text: 'reservations@gmhotel.gr' }
            ].map((c, i) => (
                <div key={i} className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#d4cbb8]/10">
                    <c.icon size={24} className="text-[#d4cbb8] mx-auto mb-3 md:mb-4" />
                    <h3 className="font-bold mb-1 md:mb-2 uppercase tracking-widest text-xs md:text-sm">{c.title}</h3>
                    <p className="text-[#d4cbb8]/60 text-xs md:text-sm">{c.text}</p>
                </div>
            ))}
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#1a1814] py-10 md:py-12 border-t border-[#d4cbb8]/10 text-center px-4">
        <h3 className="text-3xl md:text-5xl font-serif text-[#d4cbb8]/10 tracking-widest mb-3 md:mb-4">GM HOTEL</h3>
        <p className="text-[#d4cbb8]/30 text-[10px] md:text-xs tracking-widest uppercase">© 2026 GM Hotel. All rights reserved.</p>
    </footer>
);

const HotelDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#1a1814] min-h-screen text-[#d4cbb8] font-serif">
            <Hero /><About /><Rooms /><Amenities /><TestimonialsSection /><Reservation /><ContactSection /><FooterSection />
            <AIChat brandName="GM Hotel" />
        </div>
    );
};

export default HotelDemo;
