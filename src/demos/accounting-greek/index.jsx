import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Calculator, FileText, TrendingUp, Users, Phone, Mail, MapPin, Clock, Star, CheckCircle, BarChart3, PieChart, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0e1a] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0c0e1a] to-violet-950" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-8"><Calculator size={14} /> Certified Public Accountants</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">GM <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">ACCOUNTING</span></h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">Λογιστικές & φοροτεχνικές υπηρεσίες για επιχειρήσεις και ιδιώτες. Αξιοπιστία & εμπειρία.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-full font-bold transition-colors shadow-lg shadow-indigo-500/20">Δωρεάν Συμβουλή</button>
                    <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-colors">Υπηρεσίες</button>
                </div>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section className="py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Σχετικά</span>
                <h2 className="text-4xl font-black mt-2 mb-6">Εμπιστοσύνη Από Το <span className="text-indigo-400">2008</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">Η GM Accounting εξειδικεύεται σε λογιστική παρακολούθηση, φοροτεχνικό σχεδιασμό και σύσταση εταιρειών. 500+ ενεργοί πελάτες, πλήρης ψηφιακή υποδομή.</p>
                <div className="grid grid-cols-2 gap-6">
                    {[{ num: '500+', label: 'Clients' }, { num: '15+', label: 'Years' }, { num: '€50M+', label: 'Managed' }, { num: '100%', label: 'Accuracy' }].map((s, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10"><div className="text-xl font-black text-indigo-400">{s.num}</div><div className="text-gray-500 text-xs">{s.label}</div></div>
                    ))}
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px]"><img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="Accounting office" className="w-full h-full object-cover" /></div>
        </div>
    </section>
);

const Services = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Υπηρεσίες</span><h2 className="text-4xl font-black mt-2">OUR SERVICES</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: FileText, title: 'Φορολογικές Δηλώσεις', desc: 'Ε1, Ε2, Ε3, ΦΠΑ, εκκαθαριστικά.' },
                    { icon: BarChart3, title: 'Λογιστική Παρακολούθηση', desc: 'Απλογραφικά & διπλογραφικά βιβλία, myDATA.' },
                    { icon: Users, title: 'Μισθοδοσία', desc: 'Εργατικά, ΕΡΓΑΝΗ, ατομικές συμβάσεις.' },
                    { icon: Shield, title: 'Σύσταση Εταιρείας', desc: 'ΑΕ, ΕΠΕ, ΙΚΕ, ατομική - "one stop shop".' },
                    { icon: TrendingUp, title: 'Φοροτεχνικός Σχεδιασμός', desc: 'Βελτιστοποίηση φορολογικών υποχρεώσεων.' },
                    { icon: PieChart, title: 'Ελεγκτική', desc: 'Εσωτερικός έλεγχος, due diligence.' }
                ].map((s, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                        <div className="mb-6 p-4 bg-indigo-500/10 w-fit rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors"><s.icon size={28} /></div>
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Team = () => (
    <section className="py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Η Ομάδα</span><h2 className="text-4xl font-black mt-2">OUR ACCOUNTANTS</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: 'Κατερίνα Μ.', role: 'Senior Accountant' },
                    { name: 'Θανάσης Κ.', role: 'Tax Advisor' },
                    { name: 'Μαρίνα Π.', role: 'Payroll Specialist' },
                    { name: 'Δημήτρης Ν.', role: 'Auditor' }
                ].map((t, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-indigo-500/20 mx-auto mb-4 flex items-center justify-center"><Calculator size={32} className="text-indigo-400" /></div>
                        <h3 className="font-bold">{t.name}</h3>
                        <p className="text-indigo-400 text-sm">{t.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Reviews</span><h2 className="text-4xl font-black mt-2">CLIENT REVIEWS</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Γιάννης Α.', text: 'Εξαιρετική εξυπηρέτηση. Μου εξοικονόμησαν €5,000 σε φόρους.' },
                    { name: 'Ελένη Σ.', text: 'Πολύ οργανωμένοι, δεν χάνω ποτέ deadline πλέον.' },
                    { name: 'Startup XYZ', text: 'Μας βοήθησαν στη σύσταση ΙΚΕ μέσα σε 48 ώρες.' }
                ].map((t, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <div className="flex gap-1 text-indigo-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                        <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                        <p className="font-bold text-sm">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section className="py-24 bg-[#0c0e1a] text-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Πακέτα</span><h2 className="text-4xl font-black mt-2">PRICING</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'STARTER', price: '99', features: ['Φορολογική Δήλωση', 'Ε1 + Ε2', 'Email Support'] },
                    { name: 'BUSINESS', price: '249', popular: true, features: ['Απλογραφικά Βιβλία', 'ΦΠΑ + myDATA', 'Μισθοδοσία (2 εργ.)', 'Monthly Reporting'] },
                    { name: 'ENTERPRISE', price: '499', features: ['Διπλογραφικά Βιβλία', 'Full Payroll', 'Tax Planning', 'Dedicated Advisor'] }
                ].map((p, i) => (
                    <div key={i} className={`p-8 rounded-3xl border flex flex-col ${p.popular ? 'bg-indigo-500/10 border-indigo-500' : 'bg-white/5 border-white/10'}`}>
                        {p.popular && <div className="text-center text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Most Popular</div>}
                        <h3 className="text-xl font-black mb-2">{p.name}</h3>
                        <div className="mb-8"><span className="text-4xl font-black">€{p.price}</span><span className="text-gray-400">/mo</span></div>
                        <ul className="space-y-3 mb-8 flex-1">{p.features.map((f, j) => <li key={j} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle size={14} className="text-indigo-400" />{f}</li>)}</ul>
                        <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${p.popular ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-white/10 hover:bg-white/20'}`}>Select</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest">Επικοινωνία</span>
                <h2 className="text-4xl font-black mt-2 mb-8">CONTACT US</h2>
                <div className="space-y-6 text-gray-400">
                    <div className="flex items-center gap-4"><Phone size={20} className="text-indigo-400" /> +30 210 000 0000</div>
                    <div className="flex items-center gap-4"><Mail size={20} className="text-indigo-400" /> info@gmaccounting.gr</div>
                    <div className="flex items-center gap-4"><MapPin size={20} className="text-indigo-400" /> Σταδίου 30, Αθήνα</div>
                    <div className="flex items-center gap-4"><Clock size={20} className="text-indigo-400" /> Δευ-Παρ: 09:00 - 18:00</div>
                </div>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none" placeholder="Ονοματεπώνυμο" />
                <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none" placeholder="Email" />
                <textarea className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none h-32 resize-none" placeholder="Πώς μπορούμε να βοηθήσουμε;" />
                <button className="w-full bg-indigo-600 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-500 transition-colors">Αποστολή</button>
            </div>
        </div>
    </section>
);

const FooterSection = () => (
    <footer className="bg-[#0c0e1a] py-12 border-t border-indigo-500/20 text-center">
        <h3 className="text-4xl font-black text-slate-800 mb-4">GM ACCOUNTING</h3>
        <p className="text-gray-700 text-xs">© 2026 GM Accounting. All rights reserved.</p>
    </footer>
);

const AccountingDemo = () => {
    const { viewMode } = useOutletContext() || {};
    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (viewMode === 'admin') {
        return <UniversalAdmin config={{
            brandName: 'GM Accounting',
            brandLogo: '📊',
            accentColor: 'indigo',
            roles: [{ id: 'admin', label: 'Partner' }, { id: 'staff', label: 'Accountant' }, { id: 'user', label: 'Clerk' }],
            stats: [
                { label: 'Active Clients', value: '342', trend: 5 },
                { label: 'Pending Returns', value: '28', trend: -3 },
                { label: 'Revenue (Month)', value: '€18k', trend: 12 },
                { label: 'Deadlines (Week)', value: '5', trend: 0 }
            ],
            kpis: [
                { label: 'Filing Accuracy', value: '99.8%', progress: 99 },
                { label: 'Client Retention', value: '94%', progress: 94 },
                { label: 'Deadline Compliance', value: '100%', progress: 100 }
            ]
        }} />;
    }

    return (
        <div className="bg-[#0c0e1a] min-h-screen text-white font-sans">
            <Hero /><About /><Services /><Team /><TestimonialsSection /><Pricing /><Contact /><FooterSection />
            <AIChat brandName="GM Accounting" />
        </div>
    );
};

export default AccountingDemo;
