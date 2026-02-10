import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { UtensilsCrossed, Wine, ChefHat, Star, Phone, Mail, MapPin, Clock, Calendar, Instagram, ClipboardList, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const restaurantTabs = [
    {
        id: 'reservations', label: 'Reservations', icon: Calendar, columns: ['Guest', 'Status', 'Time', 'Covers'],
        rows: [['Maria K.', 'Confirmed', '20:00', '4'], ['John D.', 'Confirmed', '20:30', '2'], ['Elena P.', 'Pending', '21:00', '6'], ['George S.', 'Confirmed', '19:30', '3'], ['Anna M.', 'Cancelled', '21:30', '2']]
    },
    {
        id: 'menu', label: 'Menu', icon: UtensilsCrossed, columns: ['Dish', 'Status', 'Category', 'Price'],
        rows: [['Moussaka Classic', 'Active', 'Main', '€18'], ['Grilled Octopus', 'Active', 'Starter', '€16'], ['Lamb Kleftiko', 'Active', 'Main', '€24'], ['Baklava', 'Active', 'Dessert', '€8'], ['Greek Salad', 'Active', 'Starter', '€12']]
    },
    {
        id: 'kitchen', label: 'Kitchen', icon: ChefHat, columns: ['Order', 'Status', 'Table', 'Time'],
        rows: [['#1042', 'In Progress', 'Table 5', '8 min'], ['#1043', 'Pending', 'Table 8', '3 min'], ['#1044', 'Completed', 'Table 2', '22 min'], ['#1045', 'In Progress', 'Table 12', '5 min'], ['#1046', 'Pending', 'Table 1', '1 min']]
    },
    {
        id: 'orders', label: 'Orders', icon: ShoppingCart, columns: ['Order', 'Status', 'Items', 'Total'],
        rows: [['#1042', 'Active', '3 items', '€68'], ['#1043', 'Pending', '5 items', '€124'], ['#1044', 'Completed', '2 items', '€42'], ['#1045', 'Active', '4 items', '€86'], ['#1046', 'Pending', '1 item', '€18']]
    },
];

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a0a] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-[#1a0a0a]/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-red-400 font-mono text-xs tracking-[0.4em] uppercase mb-8">Fine Dining Experience</div>
                <h1 className="text-5xl md:text-9xl font-black tracking-tight mb-6 font-serif">GM <span className="text-red-500">RESTAURANT</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic font-serif">Αυθεντική γαστρονομία με φρέσκα, τοπικά υλικά σε μια ατμόσφαιρα που μαγεύει.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-red-700 hover:bg-red-600 px-10 py-4 font-bold tracking-widest uppercase text-sm transition-colors border border-red-500/50 flex items-center gap-2 justify-center"><Calendar size={16} /> Κράτηση</button>
                    <button className="border border-white/20 px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors">Μενού</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section className="py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden h-[500px]"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Food" /></div>
            <div>
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Η Ιστορία Μας</span>
                <h2 className="text-4xl font-serif mt-4 mb-6">Γεύσεις Που <span className="text-red-400">Αφηγούνται</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Από το 2012, το GM Restaurant σερβίρει σύγχρονη ελληνική κουζίνα με εποχιακά υλικά από τοπικούς παραγωγούς. Δημιουργική μαγειρική, ζεστή ατμόσφαιρα, αξέχαστες βραδιές.</p>
                <div className="grid grid-cols-3 gap-6">
                    {[{ num: '12+', label: 'Years' }, { num: '⭐', label: 'Michelin Rec.' }, { num: '200+', label: 'Seats' }].map((s, i) => (
                        <div key={i} className="text-center border border-red-500/20 p-4 rounded-xl"><div className="text-xl font-bold text-red-400">{s.num}</div><div className="text-gray-500 text-xs mt-1 uppercase">{s.label}</div></div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Menu = () => (
    <section className="py-24 bg-[#150808] text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Menu</span><h2 className="text-4xl font-serif mt-4">ΤΟ ΜΕΝΟΥ ΜΑΣ</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { cat: 'Ορεκτικά', items: [{ name: 'Χταπόδι Σχάρας', price: '€16' }, { name: 'Τάρταρ Τσιπούρας', price: '€14' }] },
                    { cat: 'Κύρια', items: [{ name: 'Ψητό Αρνί', price: '€24' }, { name: 'Θαλασσινά Πιάτο', price: '€32' }] },
                    { cat: 'Ζυμαρικά', items: [{ name: 'Linguine Αστακού', price: '€28' }, { name: 'Ριζότο Μανιταριών', price: '€18' }] },
                    { cat: 'Γλυκά', items: [{ name: 'Fondant Σοκολάτας', price: '€12' }, { name: 'Παστέλι Ice Cream', price: '€10' }] }
                ].map((sec, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h3 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-6">{sec.cat}</h3>
                        <div className="space-y-4">{sec.items.map((item, j) => (
                            <div key={j} className="flex justify-between items-center border-b border-white/5 pb-4">
                                <span className="font-serif">{item.name}</span>
                                <span className="text-red-400 font-bold">{item.price}</span>
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Chef = () => (
    <section className="py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Head Chef</span>
                <h2 className="text-4xl font-serif mt-4 mb-6">Chef Αλέξανδρος Κ.</h2>
                <p className="text-gray-400 leading-relaxed mb-6">Σπουδές στο Le Cordon Bleu, εμπειρία σε βραβευμένα εστιατόρια Ευρώπης. Ο Αλέξανδρος δημιουργεί πιάτα που φέρνουν τη μνήμη της γιαγιάς σε fine dining επίπεδο.</p>
                <div className="flex gap-4"><span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Mediterranean</span><span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Farm-to-Table</span><span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">Seasonal</span></div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2677&auto=format&fit=crop" className="w-full h-full object-cover" alt="Chef" /></div>
        </div>
    </section>
);

const Gallery = () => (
    <section className="py-24 bg-[#150808] text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Gallery</span><h2 className="text-4xl font-serif mt-4">MOMENTS</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop'
                ].map((src, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden group"><img src={src} alt={`Food ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-[#1a0a0a] text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Reviews</span><h2 className="text-4xl font-serif mt-4">GUEST REVIEWS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Ελένη Μ.', text: 'Η καλύτερη γαστρονομική εμπειρία στην Αθήνα!' },
                    { name: 'Marco R.', text: 'Incredible flavors. Every dish tells a story.' },
                    { name: 'Νίκος Δ.', text: 'Τέλειο μέρος για επαγγελματικά δείπνα.' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-red-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic font-serif">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Reservation = () => (
    <section className="py-24 bg-[#150808] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-red-400 font-mono text-xs tracking-[0.3em] uppercase">Reservation</span>
            <h2 className="text-4xl font-serif mt-4 mb-12">ΚΡΑΤΗΣΗ ΤΡΑΠΕΖΙΟΥ</h2>
            <div className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none" placeholder="Name" />
                    <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none" placeholder="Phone" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="date" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none text-gray-400" />
                    <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none text-gray-400 appearance-none">
                        <option>Guests</option><option>2</option><option>4</option><option>6</option><option>8+</option>
                    </select>
                </div>
                <button className="w-full bg-red-700 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">Reserve</button>
            </div>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#1a0a0a] py-16 border-t border-red-500/10 text-center">
        <h3 className="text-5xl font-serif text-[#1a0a0a] tracking-widest mb-4" style={{ WebkitTextStroke: '1px rgba(239,68,68,0.2)' }}>GM RESTAURANT</h3>
        <div className="flex justify-center gap-8 text-gray-600 text-sm mb-6">
            <a href="#" className="hover:text-red-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-400 transition-colors">TripAdvisor</a>
            <a href="#" className="hover:text-red-400 transition-colors">Google Maps</a>
        </div>
        <p className="text-gray-700 text-xs">© 2026 GM Restaurant. All rights reserved.</p>
    </footer>
);

const RestaurantDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Restaurant',
            brandLogo: '🍽️',
            accentColor: 'red',
            roles: [{ id: 'admin', label: 'Owner' }, { id: 'staff', label: 'Chef' }, { id: 'user', label: 'Waiter' }],
            stats: [
                { label: 'Covers Tonight', value: '86', trend: 15 },
                { label: 'Reservations', value: '24', trend: 8 },
                { label: 'Avg Ticket', value: '€42', trend: 5 },
                { label: 'Reviews', value: '4.9★', trend: 2 }
            ],
            kpis: [
                { label: 'Kitchen Efficiency', value: '92%', progress: 92 },
                { label: 'Table Turnover', value: '2.4x', progress: 80 },
                { label: 'Waste Reduction', value: '-15%', progress: 65 }
            ],
            customTabs: restaurantTabs,
        }} />;
    }

    return (
        <div className="bg-[#1a0a0a] min-h-screen text-white font-serif">
            <Hero /><About /><Menu /><Chef /><Gallery /><TestimonialsSection /><Reservation /><FooterSection />
            <AIChat brandName="GM Restaurant" />
        </div>
    );
};

export default RestaurantDemo;
