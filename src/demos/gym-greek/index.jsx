import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import { Users, Dumbbell, Wrench, Award } from 'lucide-react';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const gymTabs = [
    {
        id: 'members', label: 'Members', icon: Users, columns: ['Member', 'Status', 'Plan', 'Since'],
        rows: [['Maria K.', 'Active', 'Premium', 'Jan 2025'], ['John D.', 'Active', 'Basic', 'Mar 2025'], ['Elena P.', 'Active', 'Premium', 'Dec 2024'], ['George S.', 'Pending', 'Trial', 'Feb 2026'], ['Anna M.', 'Active', 'Basic', 'Nov 2025']]
    },
    {
        id: 'classes', label: 'Classes', icon: Dumbbell, columns: ['Class', 'Status', 'Trainer', 'Spots'],
        rows: [['CrossFit AM', 'Active', 'Coach Nikos', '18/20'], ['Yoga Flow', 'Scheduled', 'Maria T.', '12/15'], ['HIIT Express', 'Active', 'Coach Alex', '20/20'], ['Spinning', 'Scheduled', 'Coach Elena', '8/25'], ['Boxing', 'Active', 'Coach Dimitri', '14/16']]
    },
    {
        id: 'equipment', label: 'Equipment', icon: Wrench, columns: ['Equipment', 'Status', 'Zone', 'Last Service'],
        rows: [['Treadmill #1-5', 'Active', 'Cardio', '2 weeks ago'], ['Power Rack A', 'Active', 'Weights', '1 month ago'], ['Rowing Machine', 'Pending', 'Cardio', 'Service due'], ['Cable Machine', 'Active', 'Weights', '3 weeks ago'], ['Spin Bikes', 'Active', 'Studio', '5 days ago']]
    },
    {
        id: 'trainers', label: 'Trainers', icon: Award, columns: ['Trainer', 'Status', 'Specialty', 'Clients'],
        rows: [['Coach Nikos', 'Active', 'CrossFit', '32'], ['Maria T.', 'Active', 'Yoga', '28'], ['Coach Alex', 'Active', 'HIIT', '45'], ['Coach Elena', 'Active', 'Spinning', '24'], ['Coach Dimitri', 'Active', 'Boxing', '18']]
    },
];

const translations = {
    en: {
        hero: {
            badge: "Est. 2026",
            titleLeft: "GM",
            titleRight: "GYM",
            desc: "Push your limits. High-end training in an inspiring environment.",
            ctaPrimary: "Join Now",
            ctaSecondary: "Programs"
        },
        programs: {
            badge: "Programs",
            title: "TRAIN WITH THE BEST",
            items: [
                { title: 'CrossFit', desc: 'High-intensity functional movements.', img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop' },
                { title: 'Yoga Flow', desc: 'Mind and body synchronization.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
                { title: 'Boxing', desc: 'Skill, strength, and endurance.', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop' }
            ]
        },
        trainers: {
            badge: "Team",
            title: "EXPERT COACHES",
            list: [
                { name: "Coach Nikos", role: "CrossFit Head" },
                { name: "Maria T.", role: "Yoga Specialist" },
                { name: "Coach Alex", role: "HIIT Performance" }
            ]
        },
        pricing: {
            badge: "Plans",
            title: "MEMBERSHIP LEVELS",
            plans: [
                { name: 'Basic', price: '49', features: ['Gym Access', 'Locker Room', 'Water Station'] },
                { name: 'Premium', price: '89', features: ['Gym Access', 'All Classes', 'Sauna Access', '1 Session/Mo'] },
                { name: 'Elite', price: '149', features: ['24/7 Access', 'Unlimited PT', 'Nutrition Plan', 'Full Access'] }
            ]
        },
        faq: {
            badge: "FAQ",
            title: "COMMON QUESTIONS",
            items: [
                { q: "What are the opening hours?", a: "We are open 24/7 for Elite members, and 06:00-24:00 for others." },
                { q: "Do you offer personal training?", a: "Yes, we have a team of certified trainers available." }
            ]
        }
    },
    el: {
        hero: {
            badge: "Ιδρύθηκε 2026",
            titleLeft: "GM",
            titleRight: "GYM",
            desc: "Ξεπεράστε τα όριά σας. Προπόνηση υψηλών προδιαγραφών σε ένα περιβάλλον που εμπνέει.",
            ctaPrimary: "Εγγραφη Τωρα",
            ctaSecondary: "Προγραμματα"
        },
        programs: {
            badge: "Προγράμματα",
            title: "ΠΡΟΠΟΝΗΘΕΙΤΕ ΜΕ ΤΟΥΣ ΚΑΛΥΤΕΡΟΥΣ",
            items: [
                { title: 'CrossFit', desc: 'Λειτουργικές κινήσεις υψηλής έντασης.', img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop' },
                { title: 'Yoga Flow', desc: 'Συγχρονισμός νου και σώματος.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
                { title: 'Πυγμαχία', desc: 'Δεξιότητα, δύναμη και αντοχή.', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop' }
            ]
        },
        trainers: {
            badge: "Ομάδα",
            title: "ΕΞΕΙΔΙΚΕΥΜΕΝΟΙ COACHES",
            list: [
                { name: "Coach Nikos", role: "CrossFit Head" },
                { name: "Maria T.", role: "Yoga Specialist" },
                { name: "Coach Alex", role: "HIIT Performance" }
            ]
        },
        pricing: {
            badge: "Προγράμματα",
            title: "ΕΠΙΠΕΔΑ ΣΥΝΔΡΟΜΗΣ",
            plans: [
                { name: 'Βασικό', price: '49', features: ['Πρόσβαση στο Gym', 'Αποδυτήρια', 'Σταθμός Νερού'] },
                { name: 'Premium', price: '89', features: ['Πρόσβαση στο Gym', 'Όλα τα Μαθήματα', 'Σάουνα', '1 Συνεδρία/Μήνα'] },
                { name: 'Elite', price: '149', features: ['24/7 Πρόσβαση', 'Απεριόριστο PT', 'Διατροφολόγος', 'Full Access'] }
            ]
        },
        faq: {
            badge: "FAQ",
            title: "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ",
            items: [
                { q: "Ποιες είναι οι ώρες λειτουργίας;", a: "Είμαστε ανοιχτά 24/7 για τα Elite μέλη, και 06:00-24:00 για τους υπόλοιπους." },
                { q: "Προσφέρετε personal training;", a: "Ναι, έχουμε μια ομάδα πιστοποιημένων προπονητών στη διάθεσή σας." }
            ]
        }
    },
    es: {
        hero: {
            badge: "Est. 2026",
            titleLeft: "GM",
            titleRight: "GYM",
            desc: "Supera tus límites. Entrenamiento de alta gama en un ambiente inspirador.",
            ctaPrimary: "Únete Ahora",
            ctaSecondary: "Programas"
        },
        programs: {
            badge: "Programas",
            title: "ENTRENA CON LOS MEJORES",
            items: [
                { title: 'CrossFit', desc: 'Movimientos funcionales de alta intensidad.', img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop' },
                { title: 'Yoga Flow', desc: 'Sincronización de cuerpo y mente.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
                { title: 'Boxeo', desc: 'Habilidad, fuerza y resistencia.', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop' }
            ]
        },
        trainers: {
            badge: "Equipo",
            title: "ENTRENADORES EXPERTOS",
            list: [
                { name: "Coach Nikos", role: "CrossFit Head" },
                { name: "Maria T.", role: "Especialista Yoga" },
                { name: "Coach Alex", role: "HIIT Performance" }
            ]
        },
        pricing: {
            badge: "Planes",
            title: "NIVELES DE MEMBRESÍA",
            plans: [
                { name: 'Básico', price: '49', features: ['Acceso Gym', 'Vestuarios', 'Estación Agua'] },
                { name: 'Premium', price: '89', features: ['Acceso Gym', 'Clases Ilimitadas', 'Sauna', '1 Sesión/Mes'] },
                { name: 'Elite', price: '149', features: ['Acceso 24/7', 'PT Ilimitado', 'Plan Nutrición', 'Acceso Total'] }
            ]
        },
        faq: {
            badge: "FAQ",
            title: "PREGUNTAS COMUNES",
            items: [
                { q: "¿Cuáles son las horas de apertura?", a: "Abrimos 24/7 para miembros Elite, y 06:00-24:00 para otros." },
                { q: "¿Ofrecen entrenamiento personal?", a: "Sí, contamos con un equipo de entrenadores certificados." }
            ]
        }
    }
}

const GymDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Admin view removed - consolidated to Universal Admin demo

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-lime-500 selection:text-black">
            <Hero t={t} />
            <Programs t={t} />
            <Educators t={t} />
            <Pricing t={t} />
            <FAQ t={t} />
            <AIChat
                brandName="GM Gym"
                botName="Coach AI"
                accentColor="amber"
                botIcon={Dumbbell}
                welcomeMessage="Push your limits! 💪 I'm Coach AI. Ready to smash your fitness goals? Ask me about our classes or membership plans!"
            />
        </div>
    );
};

export default GymDemo;
