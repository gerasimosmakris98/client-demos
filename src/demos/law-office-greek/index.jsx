import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import LawHero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';
import { Briefcase, Users, FileText, CalendarDays } from 'lucide-react';

const lawTabs = [
    {
        id: 'cases', label: 'Cases', icon: Briefcase, columns: ['Case', 'Status', 'Client', 'Type'],
        rows: [['Papadopoulos v. Corp', 'Active', 'Maria K.', 'Civil'], ['Estate Planning #42', 'Active', 'John D.', 'Estate'], ['IP Dispute #18', 'Pending', 'Tech Ltd', 'IP'], ['Contract Review', 'Completed', 'Elena P.', 'Commercial'], ['Employment #7', 'Active', 'George S.', 'Labor']]
    },
    {
        id: 'clients', label: 'Clients', icon: Users, columns: ['Client', 'Status', 'Cases', 'Since'],
        rows: [['Maria K.', 'Active', '2 active', 'Jan 2024'], ['Tech Ltd', 'Active', '1 active', 'Mar 2025'], ['John D.', 'Active', '1 active', 'Dec 2024'], ['Elena P.', 'Completed', '0 active', 'Feb 2025'], ['George S.', 'Active', '1 active', 'Nov 2025']]
    },
    {
        id: 'documents', label: 'Documents', icon: FileText, columns: ['Document', 'Status', 'Case', 'Date'],
        rows: [['Motion to Dismiss', 'Active', 'Case #42', 'Feb 10'], ['Deposition Draft', 'In Progress', 'Case #18', 'Feb 9'], ['Settlement Offer', 'Pending', 'Case #7', 'Feb 12'], ['Power of Attorney', 'Completed', 'Estate #42', 'Feb 8']]
    },
    {
        id: 'calendar', label: 'Calendar', icon: CalendarDays, columns: ['Event', 'Status', 'Date', 'Location'],
        rows: [['Court Hearing', 'Confirmed', 'Feb 12', 'Athens Court'], ['Client Meeting', 'Confirmed', 'Feb 13', 'Office'], ['Deposition', 'Scheduled', 'Feb 14', 'Video Call'], ['Filing Deadline', 'Pending', 'Feb 15', 'Online'], ['Mediation', 'Scheduled', 'Feb 18', 'Athens Center']]
    },
];

const translations = {
    en: {
        hero: {
            badge: "Expert Legal Advice",
            title: "JUSTICE & INTEGRITY",
            desc: "Expert legal representation for businesses and individuals since 2005.",
            cta: "Free Consultation"
        },
        practiceAreas: {
            badge: "Expertise",
            title: "PRACTICE AREAS",
            items: [
                { title: "Corporate Law", desc: "Strategic advice for businesses." },
                { title: "IP Protection", desc: "Securing your innovations." },
                { title: "Real Estate", desc: "Navigating complex transactions." }
            ]
        },
        attorneys: {
            badge: "Attorneys",
            title: "OUR LEGAL TEAM",
            list: [
                { name: "John Smith", role: "Senior Partner" },
                { name: "Maria Garcia", role: "Head of Litigation" }
            ]
        },
        caseStudies: {
            badge: "Track Record",
            title: "NOTABLE SUCCESSES",
            list: [
                { title: "IP Global Settlement", result: "€5.2M recovered" },
                { title: "Corporate Restructuring", result: "300+ jobs saved" }
            ]
        },
        testimonials: {
            badge: "Clients",
            title: "TRUSTED BY MANY",
            list: [
                { text: "Professional and dedicated to the best outcome.", name: "Dimitris P." }
            ]
        },
        contact: {
            badge: "Contact",
            title: "GET IN TOUCH",
            fields: {
                name: "Name",
                email: "Email",
                message: "Message",
                button: "Send Request"
            }
        }
    },
    el: {
        hero: {
            badge: "Εξειδικευμένες Νομικές Συμβουλές",
            title: "ΔΙΚΑΙΟΣΥΝΗ & ΑΚΕΡΑΙΟΤΗΤΑ",
            desc: "Εξειδικευμένη νομική εκπροσώπηση για επιχειρήσεις και ιδιώτες από το 2005.",
            cta: "Δωρεάν Συμβουλή"
        },
        practiceAreas: {
            badge: "Εξειδίκευση",
            title: "ΤΟΜΕΙΣ ΔΙΚΑΙΟΥ",
            items: [
                { title: "Εταιρικό Δίκαιο", desc: "Στρατηγικές συμβουλές για επιχειρήσεις." },
                { title: "Προστασία Πνευματικής Ιδιοκτησίας", desc: "Διαφύλαξη των καινοτομιών σας." },
                { title: "Ακίνητα", desc: "Πλοήγηση σε σύνθετες συναλλαγές." }
            ]
        },
        attorneys: {
            badge: "Δικηγόροι",
            title: "Η ΝΟΜΙΚΗ ΜΑΣ ΟΜΑΔΑ",
            list: [
                { name: "Γιάννης Σμυρνιός", role: "Senior Partner" },
                { name: "Μαρία Γεωργίου", role: "Επικεφαλής Δικαστικών Υποθέσεων" }
            ]
        },
        caseStudies: {
            badge: "Ιστορικό",
            title: "ΣΗΜΑΝΤΙΚΕΣ ΕΠΙΤΥΧΙΕΣ",
            list: [
                { title: "Παγκόσμιος Διακανονισμός IP", result: "€5.2M ανακτήθηκαν" },
                { title: "Εταιρική Αναδιάρθρωση", result: "300+ θέσεις εργασίας σώθηκαν" }
            ]
        },
        testimonials: {
            badge: "Πελάτες",
            title: "ΜΑΣ ΕΜΠΙΣΤΕΥΟΝΤΑΙ",
            list: [
                { text: "Επαγγελματίες και αφοσιωμένοι στο καλύτερο αποτέλεσμα.", name: "Δημήτρης Π." }
            ]
        },
        contact: {
            badge: "Επικοινωνία",
            title: "ΜΙΛΗΣΤΕ ΜΑΣ",
            fields: {
                name: "Όνομα",
                email: "Email",
                message: "Μήνυμα",
                button: "Αποστολή Αιτήματος"
            }
        }
    },
    es: {
        hero: {
            badge: "Asesoría Legal Experta",
            title: "JUSTICIA E INTEGRIDAD",
            desc: "Representación legal experta para empresas e individuos desde 2005.",
            cta: "Consulta Gratuita"
        },
        practiceAreas: {
            badge: "Experiencia",
            title: "ÁREAS DE PRÁCTICA",
            items: [
                { title: "Derecho Corporativo", desc: "Asesoramiento estratégico para empresas." },
                { title: "Protección de IP", desc: "Asegurando sus innovaciones." },
                { title: "Inmuebles", desc: "Navegando transacciones complejas." }
            ]
        },
        attorneys: {
            badge: "Abogados",
            title: "NUESTRO EQUIPO LEGAL",
            list: [
                { name: "John Smith", role: "Socio Senior" },
                { name: "Maria Garcia", role: "Jefa de Litigios" }
            ]
        },
        caseStudies: {
            badge: "Trayectoria",
            title: "ÉXITOS NOTABLES",
            list: [
                { title: "Acuerdo Global de IP", result: "€5.2M recuperados" },
                { title: "Reestructuración Corporativa", result: "300+ empleos salvados" }
            ]
        },
        testimonials: {
            badge: "Clientes",
            title: "CONFIADO POR MUCHOS",
            list: [
                { text: "Profesional y dedicado al mejor resultado.", name: "Dimitris P." }
            ]
        },
        contact: {
            badge: "Contacto",
            title: "PONERSE EN CONTACTO",
            fields: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                button: "Enviar Solicitud"
            }
        }
    }
}

const LawDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Admin view removed - consolidated to Universal Admin demo

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white">
            <LawHero t={t} />
            <PracticeAreas t={t} />
            <Attorneys t={t} />
            <CaseStudies t={t} />
            <Testimonials t={t} />
            <Contact t={t} />
            <AIChat
                brandName="GM Law"
                botName="Legal Clerk AI"
                accentColor="blue"
                welcomeMessage="Justice & Integrity. ⚖️ I'm your Legal Clerk AI. How can I assist with your legal inquiry or consultation today?"
            />
        </div>
    );
};

export default LawDemo;
