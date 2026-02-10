import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import CafeHero from './components/Hero';
import CafeAbout from './components/About';
import CafeMenu from './components/Menu';
import CafeGallery from './components/Gallery';
import CafeTestimonials from './components/Testimonials';
import CafeLocation from './components/Location';
import CafeFooter from './components/Footer';
import { ShoppingCart, Package, Clock, CreditCard } from 'lucide-react';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';

const translations = {
    en: {
        hero: {
            title: "GM CAFE",
            subtitle: "The art of coffee in the heart of the city.",
            hours: "Mon - Sun: 08:00 - 23:00",
            address: "Aristotelous 12, Center",
            cta: "VIEW MENU"
        },
        about: {
            badge: "Our Story",
            title: "Authentic Greek Coffee Culture, Reimagined.",
            desc: "Nestled in the heart of the city, our cafe brings together the warmth of traditional Greek hospitality with modern artisanal coffee craft. Every bean is sourced from sustainable farms, and every cup is brewed with passion.",
            roasts: { title: "Artisanal Roasts", desc: "Hand-picked beans roasted locally for maximum freshness." },
            brunch: { title: "All Day Brunch", desc: "Serving your favorites from sunrise to sunset." },
            cta: "READ MORE"
        },
        menu: {
            title: "Our Suggestions",
            items: [
                { title: 'Espresso Blend', desc: 'Unique 100% Arabica blend from Brazil and Ethiopia.', price: '€ 2.50' },
                { title: 'Brunch Special', desc: 'Eggs Benedict on freshly baked brioche bread.', price: '€ 8.00' },
                { title: 'Signature Cocktails', desc: 'Handmade cocktails for your evenings.', price: 'from € 9.00' }
            ]
        },
        gallery: { badge: "Gallery", title: "MOMENTS" },
        testimonials: {
            badge: "Testimonials",
            title: "Loved by Locals",
            reviews: [
                { name: "Elena P.", role: "Food Critic", text: "The freddo espresso here is unmatched. The atmosphere reminds me of old Athens but with a modern twist." },
                { name: "Giorgos K.", role: "Regular", text: "Best brunch spot in town. You have to try the Kayanas, it's absolutely delicious!" },
                { name: "Maria S.", role: "Designer", text: "I work from here almost every day. Great wifi, amazing coffee, and the staff is super friendly." }
            ]
        },
        location: {
            badge: "Visit Us",
            title: "Find Your Way to Flavor.",
            desc: "We are located in the historic center, just a few minutes walk from the metro station. Drop by for a quick espresso or stay for a long lunch.",
            address: { title: "Address", value: "Mitropoleos 45, Athens 105 56" },
            phone: { title: "Phone", value: "+30 210 123 4567" },
            hours: { title: "Hours", week: "Mon-Fri: 08:00 - 23:00", weekend: "Sat-Sun: 09:00 - 00:00" },
            email: { title: "Email", value: "hello@cafe-greek.com" }
        },
        footer: {
            desc: "Experience the true taste of Greece in every cup. Artisanal coffee, homemade pastries, and a welcoming atmosphere.",
            links: { title: "Quick Links", home: "Home", menu: "Menu", about: "About", contact: "Contact" },
            legal: { title: "Legal", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy" }
        }
    },
    el: {
        hero: {
            title: "GM CAFE",
            subtitle: "Η τέχνη του καφέ στην καρδιά της πόλης.",
            hours: "Δευ - Κυρ: 08:00 - 23:00",
            address: "Αριστοτέλους 12, Κέντρο",
            cta: "ΔΕΙΤΕ ΤΟ ΜΕΝΟΥ"
        },
        about: {
            badge: "Η Ιστορία Μας",
            title: "Αυθεντική Ελληνική Κουλτούρα Καφέ.",
            desc: "Στην καρδιά της πόλης, το καφέ μας συνδυάζει τη ζεστασιά της παραδοσιακής ελληνικής φιλοξενίας με τη σύγχρονη τέχνη του καφέ. Κάθε κόκκος προέρχεται από βιώσιμες φάρμες και κάθε φλιτζάνι ετοιμάζεται με πάθος.",
            roasts: { title: "Χειροποίητο Καβούρδισμα", desc: "Επιλεγμένοι κόκκοι που καβουρντίζονται τοπικά." },
            brunch: { title: "All Day Brunch", desc: "Σερβίρουμε τα αγαπημένα σας από την ανατολή μέχρι τη δύση." },
            cta: "ΠΕΡΙΣΣΟΤΕΡΑ"
        },
        menu: {
            title: "Οι Προτάσεις Μας",
            items: [
                { title: 'Espresso Blend', desc: 'Μοναδικό χαρμάνι 100% Arabica από Βραζιλία και Αιθιοπία.', price: '€ 2.50' },
                { title: 'Brunch Special', desc: 'Αυγά Benedict σε φρεσκοψημένο ψωμί brioche.', price: '€ 8.00' },
                { title: 'Signature Cocktails', desc: 'Χειροποίητα cocktails για τα βράδια σας.', price: 'από € 9.00' }
            ]
        },
        gallery: { badge: "Φωτογραφίες", title: "ΣΤΙΓΜΕΣ" },
        testimonials: {
            badge: "Κριτικές",
            title: "Αγαπημένο των Ντόπιων",
            reviews: [
                { name: "Έλενα Π.", role: "Κριτικός Γεύσης", text: "Ο freddo espresso εδώ είναι ασυναγώνιστος. Η ατμόσφαιρα θυμίζει παλιά Αθήνα αλλά με μια μοντέρνα πινελιά." },
                { name: "Γιώργος Κ.", role: "Θαμώνας", text: "Το καλύτερο brunch στην πόλη. Πρέπει να δοκιμάσετε τον Καγιανά, είναι απλά υπέροχος!" },
                { name: "Μαρία Σ.", role: "Designer", text: "Δουλεύω από εδώ σχεδόν κάθε μέρα. Τέλειο wifi, καταπληκτικός καφές και το προσωπικό είναι εξαιρετικά φιλικό." }
            ]
        },
        location: {
            badge: "Επισκεψη",
            title: "Βρείτε μας στο Κέντρο.",
            desc: "Βρισκόμαστε στο ιστορικό κέντρο, λίγα λεπτά με τα πόδια από το μετρό. Περάστε για έναν γρήγορο espresso ή μείνετε για μεσημεριανό.",
            address: { title: "Διεύθυνση", value: "Μητροπόλεως 45, Αθήνα 105 56" },
            phone: { title: "Τηλέφωνο", value: "+30 210 123 4567" },
            hours: { title: "Ωράριο", week: "Δευ-αρ: 08:00 - 23:00", weekend: "Σαβ-Κυρ: 09:00 - 00:00" },
            email: { title: "Email", value: "hello@cafe-greek.com" }
        },
        footer: {
            desc: "Ζήστε την πραγματική γεύση της Ελλάδας σε κάθε φλιτζάνι. Χειροποίητος καφές, σπιτικά γλυκά και μια φιλόξενη ατμόσφαιρα.",
            links: { title: "Σύνδεσμοι", home: "Αρχική", menu: "Μενού", about: "Σχετικά", contact: "Επικοινωνία" },
            legal: { title: "Νομικά", privacy: "Πολιτική Απορρήτου", terms: "Όροι Χρήσης", cookies: "Cookies" }
        }
    }
};

const CafeDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ background: '#0c0a09', minHeight: '100vh', color: '#e7e5e4', fontFamily: 'system-ui, sans-serif' }}>
            <CafeHero t={t} />
            <CafeAbout t={t} />
            <CafeMenu t={t} />
            <CafeGallery t={t} />
            <CafeTestimonials t={t} />
            <CafeLocation t={t} />
            <CafeFooter t={t} />
            <AIChat brandName="GM Cafe" />
        </div>
    );
};

export default CafeDemo;
