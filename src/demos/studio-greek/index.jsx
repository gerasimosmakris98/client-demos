import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Clock, Heart, Flame, Wind, Leaf, Users, Calendar, Camera, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import AdminMock from '../../components/demos/AdminMock';

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0015] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-[#0d0015] to-[#0d0015]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-fuchsia-400 font-mono text-xs tracking-[0.3em] uppercase mb-8">Body • Mind • Soul</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">STUDIO</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">Yoga, Pilates & Wellness σε έναν χώρο σχεδιασμένο για εσωτερική ηρεμία και σωματική δύναμη.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-10 py-4 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow">Δοκιμαστικό Μάθημα</button>
                    <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">Πρόγραμμα</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section className="py-24 bg-[#0d0015] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Η Φιλοσοφία Μας</span>
                <h2 className="text-4xl font-black mt-2 mb-6">Ισορροπία <span className="text-fuchsia-400">Σώματος & Πνεύματος</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Το GM Studio δημιουργήθηκε το 2018 ως χώρος αφιερωμένος στην ολιστική ευεξία. Πιστοποιημένοι εκπαιδευτές, μικρά τμήματα, εξατομικευμένη προσέγγιση.</p>
                <div className="grid grid-cols-2 gap-6">
                    {[{ num: '6+', label: 'Years' }, { num: '15+', label: 'Classes/Week' }, { num: '8', label: 'Instructors' }, { num: '95%', label: 'Retention' }].map((s, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-xl font-black text-fuchsia-400">{s.num}</div><div className="text-gray-500 text-xs">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]"><img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2720&auto=format&fit=crop" className="w-full h-full object-cover" alt="Yoga studio" /></div>
        </div>
    </section>
);

const Classes = () => (
    <section className="py-24 bg-purple-950/30 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Μαθήματα</span><h2 className="text-4xl font-black mt-2">OUR CLASSES</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Wind, name: 'Vinyasa Yoga', time: 'Δευ-Παρ 07:00', level: 'All Levels' },
                    { icon: Flame, name: 'Power Pilates', time: 'Τρ-Πεμ 18:00', level: 'Intermediate' },
                    { icon: Heart, name: 'Meditation', time: 'Καθημερινά 20:00', level: 'Beginner' },
                    { icon: Leaf, name: 'Yin Yoga', time: 'Σαβ 09:00', level: 'All Levels' },
                    { icon: Flame, name: 'Barre Fitness', time: 'Δευ-Τετ 10:00', level: 'All Levels' },
                    { icon: Wind, name: 'HIIT Flow', time: 'Παρ 17:00', level: 'Advanced' }
                ].map((c, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-4 p-3 bg-fuchsia-500/10 w-fit rounded-xl text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors"><c.icon size={24} /></div>
                        <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{c.time}</p>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold">{c.level}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Instructors = () => (
    <section className="py-24 bg-[#0d0015] text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Instructors</span><h2 className="text-4xl font-black mt-2">OUR TEACHERS</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: 'Σοφία Λ.', role: 'Yoga Teacher (500h RYT)' },
                    { name: 'Μαρία Κ.', role: 'Pilates Instructor' },
                    { name: 'Δήμητρα Π.', role: 'Barre & HIIT' },
                    { name: 'Ελένη Σ.', role: 'Meditation Guide' }
                ].map((t, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-fuchsia-500/20 mx-auto mb-4 flex items-center justify-center"><Heart size={28} className="text-fuchsia-400" /></div>
                        <h3 className="font-bold">{t.name}</h3>
                        <p className="text-fuchsia-400 text-xs mt-1">{t.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const GallerySection = () => (
    <section className="py-24 bg-purple-950/30 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Space</span><h2 className="text-4xl font-black mt-2">OUR STUDIO</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-video rounded-2xl bg-[#0d0015] border border-white/5 overflow-hidden flex items-center justify-center"><Camera size={32} className="text-purple-500/30" /></div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-[#0d0015] text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Reviews</span><h2 className="text-4xl font-black mt-2">MEMBER REVIEWS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Αλεξάνδρα Τ.', text: 'Βρήκα ηρεμία που δεν ήξερα ότι χρειαζόμουν. Εκπληκτικοί δάσκαλοι.' },
                    { name: 'Πέτρος Μ.', text: 'Power Pilates changed my life. Best studio in Athens.' },
                    { name: 'Μαριλένα Κ.', text: 'Μικρά τμήματα, προσωπική προσοχή. Αγαπώ αυτόν τον χώρο!' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-fuchsia-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section className="py-24 bg-purple-950/30 text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Membership</span><h2 className="text-4xl font-black mt-2">PLANS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'DROP-IN', price: '15', unit: '/class', features: ['Single Class Access', 'Any Class Type', 'No Commitment'] },
                    { name: 'UNLIMITED', price: '89', unit: '/mo', popular: true, features: ['All Classes', 'Guest Pass (1x/mo)', 'Workshop Priority', 'Mat Storage'] },
                    { name: 'PRIVATE', price: '199', unit: '/mo', features: ['4 Private Sessions', 'Personalized Program', 'Nutrition Guidance', 'Unlimited Group'] }
                ].map((p, i) => (
                    <div key={i} className={`p-8 rounded-3xl border flex flex-col ${p.popular ? 'bg-fuchsia-500/10 border-fuchsia-500' : 'bg-white/5 border-white/10'}`}>
                        {p.popular && <div className="text-center text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-4">Best Value</div>}
                        <h3 className="text-xl font-black mb-2">{p.name}</h3>
                        <div className="mb-8"><span className="text-4xl font-black">€{p.price}</span><span className="text-gray-400">{p.unit}</span></div>
                        <ul className="space-y-3 mb-8 flex-1">{p.features.map((f, j) => <li key={j} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle size={14} className="text-fuchsia-400" />{f}</li>)}</ul>
                        <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${p.popular ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:shadow-lg hover:shadow-purple-500/30' : 'bg-white/10 hover:bg-white/20'}`}>Join</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section className="py-24 bg-[#0d0015] text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <span className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest">Επικοινωνία</span>
                <h2 className="text-4xl font-black mt-2 mb-8">FIND US</h2>
                <div className="space-y-6 text-gray-400">
                    <div className="flex items-center gap-4"><Phone size={20} className="text-fuchsia-400" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-4"><Mail size={20} className="text-fuchsia-400" /> info@gmstudio.gr</div>
                    <div className="flex items-center gap-4"><MapPin size={20} className="text-fuchsia-400" /> Σκουφά 42, Κολωνάκι</div>
                    <div className="flex items-center gap-4"><Clock size={20} className="text-fuchsia-400" /> Δευ-Σαβ: 07:00 - 21:00</div>
                </div>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none" placeholder="Name" />
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none" placeholder="Email" />
                <textarea className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-500 outline-none h-32 resize-none" placeholder="Message..." />
                <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 transition-shadow">Send Message</button>
            </div>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#0d0015] py-12 border-t border-fuchsia-500/10 text-center">
        <h3 className="text-4xl font-black text-purple-950 mb-4">GM STUDIO</h3>
        <p className="text-gray-700 text-xs">© 2026 GM Fitness Studio. All rights reserved.</p>
    </footer>
);

const StudioDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <AdminMock title="GM Fitness Studio" stats={[
            { label: 'Active Members', value: '185', trend: 10 },
            { label: 'Classes Today', value: '8', trend: 0 },
            { label: 'New Signups', value: '12', trend: 20 },
            { label: 'Revenue', value: '€8.4k', trend: 15 }
        ]} />;
    }

    return (
        <div className="bg-[#0d0015] min-h-screen text-white font-sans">
            <Hero /><About /><Classes /><Instructors /><GallerySection /><TestimonialsSection /><Pricing /><Contact /><FooterSection />
            <AIChat brandName="GM Fitness Studio" />
        </div>
    );
};

export default StudioDemo;
