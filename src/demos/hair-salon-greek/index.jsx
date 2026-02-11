import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import SalonHero from './components/Hero';
import SalonServices from './components/Services';
import SalonTestimonials from './components/Testimonials';
import SalonBooking from './components/Booking';
import SalonFooter from './components/Footer';
import UniversalAdmin from '../../components/demos/UniversalAdmin';
import AIChat from '../../components/common/AIChat';
import { Users, CalendarDays, Scissors, Package } from 'lucide-react';

const salonTabs = [
    {
        id: 'clients', label: 'Clients', icon: Users, columns: ['Client', 'Status', 'Last Visit', 'Stylist'],
        rows: [['Maria K.', 'Active', '2 days ago', 'Elena'], ['Sofia P.', 'Active', '1 week ago', 'Katerina'], ['Anna M.', 'Active', '3 days ago', 'Elena'], ['Dimitra G.', 'Pending', 'New client', '--'], ['Ioanna D.', 'Active', '2 weeks ago', 'Sofia']]
    },
    {
        id: 'appointments', label: 'Appointments', icon: CalendarDays, columns: ['Client', 'Status', 'Service', 'Time'],
        rows: [['Maria K.', 'Confirmed', 'Cut & Color', '10:00'], ['Sofia P.', 'Confirmed', 'Blowout', '11:00'], ['Anna M.', 'In Progress', 'Highlights', '09:30'], ['Dimitra G.', 'Pending', 'Consultation', '14:00'], ['Ioanna D.', 'Scheduled', 'Keratin', '15:30']]
    },
    {
        id: 'stylists', label: 'Stylists', icon: Scissors, columns: ['Stylist', 'Status', 'Clients Today', 'Rating'],
        rows: [['Elena A.', 'Active', '6', '4.9★'], ['Katerina M.', 'Active', '5', '4.8★'], ['Sofia T.', 'Active', '4', '4.7★'], ['Maria P.', 'Pending', 'Day off', '4.9★']]
    },
    {
        id: 'products', label: 'Products', icon: Package, columns: ['Product', 'Status', 'Stock', 'Price'],
        rows: [['Olaplex No.3', 'Active', '12', '€28'], ['Color WOW', 'Active', '8', '€22'], ['Moroccanoil', 'Pending', '2 left', '€35'], ['Dyson Brush', 'Active', '5', '€45'], ['Redken Shampoo', 'Active', '15', '€18']]
    },
];

const translations = {
    en: {
        hero: {
            badge: "London • Paris • Athens",
            title: "CRAFTING YOUR SIGNATURE LOOK",
            desc: "Experience luxury hair care and styling tailored to your unique personality.",
            cta: "Book Appointment"
        },
        services: {
            badge: "Services",
            title: "PREMIUM HAIR CARE",
            items: [
                { title: "Haircut & Style", price: "from €45", desc: "Precision cutting and professional styling." },
                { title: "Color & Highlights", price: "from €80", desc: "Expert color techniques for vibrant results." },
                { title: "Treatments", price: "from €30", desc: "Restore and nourish your hair." }
            ]
        },
        testimonials: {
            badge: "Reviews",
            title: "WHAT OUR CLIENTS SAY",
            list: [
                { text: "The best haircut I've ever had. Truly professional service.", name: "Maria K." },
                { text: "Love my new color! The stylists are amazing.", name: "Elena S." }
            ]
        },
        booking: {
            badge: "Booking",
            title: "SECURE YOUR SPOT",
            form: {
                name: "Full Name",
                email: "Email Address",
                service: "Select Service",
                date: "Select Date",
                button: "Confirm Booking"
            }
        },
        footer: {
            address: "123 Style Avenue, Athens",
            phone: "+30 210 123 4567",
            hours: "Mon-Sat: 09:00 - 20:00"
        }
    },
    el: {
        hero: {
            badge: "Λονδίνο • Παρίσι • Αθήνα",
            title: "ΔΗΜΙΟΥΡΓΟΥΜΕ ΤΟ ΔΙΚΟ ΣΑΣ ΣΤΥΛ",
            desc: "Απολαύστε πολυτελή φροντίδα μαλλιών και styling προσαρμοσμένα στη δική σας προσωπικότητα.",
            cta: "Κλείστε Ραντεβού"
        },
        services: {
            badge: "Υπηρεσίες",
            title: "PREMIUM ΦΡΟΝΤΙΔΑ",
            items: [
                { title: "Κούρεμα & Styling", price: "από €45", desc: "Κούρεμα ακριβείας και επαγγελματικό styling." },
                { title: "Βαφή & Ανταύγειες", price: "από €80", desc: "Εξειδικευμένες τεχνικές για ζωντανό χρώμα." },
                { title: "Θραπείες", price: "από €30", desc: "Αποκαταστήστε και θρέψτε τα μαλλιά σας." }
            ]
        },
        testimonials: {
            badge: "Κριτικές",
            title: "ΤΙ ΛΕΝΕ ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ",
            list: [
                { text: "Το καλύτερο κούρεμα που είχα ποτέ. Πραγματικά επαγγελματική εξυπηρέτηση.", name: "Μαρία Κ." },
                { text: "Λατρεύω το νέο μου χρώμα! Οι στυλίστες είναι υπέροχοι.", name: "Έλενα Σ." }
            ]
        },
        booking: {
            badge: "Κράτηση",
            title: "ΚΛΕΙΣΤΕ ΤΗ ΘΕΣΗ ΣΑΣ",
            form: {
                name: "Ονοματεπώνυμο",
                email: "Email Address",
                service: "Επιλογή Υπηρεσίας",
                date: "Επιλογή Ημερομηνίας",
                button: "Επιβεβαίωση Κράτησης"
            }
        },
        footer: {
            address: "Λεωφόρος Στυλ 123, Αθήνα",
            phone: "+30 210 123 4567",
            hours: "Δευ-Σαβ: 09:00 - 20:00"
        }
    },
    es: {
        hero: {
            badge: "Londres • París • Atenas",
            title: "CREANDO TU LOOK PERSONAL",
            desc: "Experimenta el cuidado del cabello de lujo y el peinado adaptado a tu personalidad única.",
            cta: "Reservar Cita"
        },
        services: {
            badge: "Servicios",
            title: "CUIDADO PREMIUM",
            items: [
                { title: "Corte y Peinado", price: "desde €45", desc: "Corte de precisión y peinado profesional." },
                { title: "Color y Reflejos", price: "desde €80", desc: "Técnicas expertas para resultados vibrantes." },
                { title: "Tratamientos", price: "desde €30", desc: "Restaura y nutre tu cabello." }
            ]
        },
        testimonials: {
            badge: "Reseñas",
            title: "LO QUE DICEN NUESTROS CLIENTES",
            list: [
                { text: "El mejor corte que he tenido. Servicio verdaderamente profesional.", name: "Maria K." },
                { text: "¡Me encanta mi nuevo color! Los estilistas son increíbles.", name: "Elena S." }
            ]
        },
        booking: {
            badge: "Reserva",
            title: "ASEGURA TU LUGAR",
            form: {
                name: "Nombre Completo",
                email: "Correo Electrónico",
                service: "Seleccionar Servicio",
                date: "Seleccionar Fecha",
                button: "Confirmar Reserva"
            }
        },
        footer: {
            address: "Avenida Estilo 123, Atenas",
            phone: "+30 210 123 4567",
            hours: "Lun-Sáb: 09:00 - 20:00"
        }
    }
}

const SalonDemo = () => {
    const { viewMode, language } = useOutletContext() || { language: 'en' };
    const t = translations[language] || translations.en;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Admin view removed - consolidated to Universal Admin demo

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white">
            <SalonHero t={t} />
            <SalonServices t={t} />
            <SalonTestimonials t={t} />
            <SalonBooking t={t} />
            <SalonFooter t={t} />
            <AIChat brandName="GM Salon" />
        </div>
    );
};

export default SalonDemo;
