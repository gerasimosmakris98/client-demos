import { Zap, Shield, BarChart3, Globe, Layers, Command } from 'lucide-react';

export const translations = {
    en: {
        hero: {
            badge: "v2.0 Now Available",
            title: "Scale your Ambition",
            desc: "The all-in-one platform designed to propel your business forward. Beautiful analytics, powerful integrations, and seamless workflows.",
            ctaPrimary: "Start Building",
            ctaSecondary: "Watch Demo"
        },
        features: {
            title: "Built for Modern Teams",
            desc: "Everything you need to launch and scale your next big idea.",
            items: [
                { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed with edge-caching and minimal latency.' },
                { icon: Shield, title: 'Bank-Grade Security', desc: 'Enterprise-ready encryption and compliance out of the box.' },
                { icon: BarChart3, title: 'Real-time Analytics', desc: 'Deep insights into your user behavior and conversion metrics.' },
                { icon: Globe, title: 'Global Scale', desc: 'Deploy instantly to 35+ regions worldwide with one click.' },
                { icon: Layers, title: 'Seamless Integration', desc: 'Works with your existing stack via powerful APIs and webhooks.' },
                { icon: Command, title: 'Command Palace', desc: 'Keyboard-first navigation for power users and rapid workflows.' }
            ]
        },
        pricing: {
            title: "Simple, Transparent Pricing",
            desc: "No hidden fees. Cancel anytime.",
            popular: "MOST POPULAR",
            monthly: "/mo",
            ctaHighlight: "Get Started",
            ctaNormal: "Choose Plan",
            plans: [
                { name: 'Starter', price: '$29', desc: 'Perfect for side projects and small teams.', features: ['Up to 5 users', 'Basic Analytics', '24/7 Support', '10GB Storage'] },
                { name: 'Pro', price: '$99', desc: 'For growing businesses requiring power.', features: ['Unlimited users', 'Advanced Analytics', 'Priority Support', '1TB Storage', 'Custom Domain'] },
                { name: 'Enterprise', price: 'Custom', desc: 'Tailored solutions for large scale needs.', features: ['Dedicated Manager', 'SSO & Audit Logs', 'SLA Guarantee', 'Unlimited Storage', 'On-premise deployment'] }
            ]
        },
        contact: {
            title: "Ready to get started?",
            desc: "Join thousands of developers building the future today. No credit card required.",
            placeholder: "Enter your email",
            button: "Get Access",
            terms: "By signing up, you agree to our Terms & Conditions."
        },
        industries: {
            select: "Select Industry",
            saas: {
                name: 'GM Premium SaaS',
                stats: ['MRR', 'Users', 'Churn', 'Uptime'],
                nav: ['Overview', 'User Base', 'Source Control', 'Subscription']
            },
            ecommerce: {
                name: 'GM Store',
                stats: ['Sales', 'Orders', 'AOV', 'Returns'],
                nav: ['Storefront', 'Products', 'Orders', 'Customers']
            },
            agency: {
                name: 'GM Creative',
                stats: ['Active Projects', 'Billable Hours', 'Revenue', 'Leads'],
                nav: ['Dashboard', 'Projects', 'Invoices', 'Git Repos']
            },
            booking: {
                name: 'GM Booking',
                stats: ['Bookings', 'Occupancy', 'Revenue', 'Check-ins'],
                nav: ['Calendar', 'Reservations', 'Rooms', 'Payments']
            }
        }
    },
    el: {
        hero: {
            badge: "v2.0 Τώρα Διαθέσιμο",
            title: "Ανεβάστε τις Φιλοδοξίες σας",
            desc: "Η πλατφόρμα όλα-σε-ένα σχεδιασμένη για να προωθήσει την επιχείρησή σας. Όμορφα αναλυτικά στοιχεία, ισχυρές ενσωματώσεις και απρόσκοπτες ροές εργασίας.",
            ctaPrimary: "Ξεκινήστε τώρα",
            ctaSecondary: "Δείτε το Demo"
        },
        features: {
            title: "Σχεδιασμένο για Σύγχρονες Ομάδες",
            desc: "Όλα όσα χρειάζεστε για να ξεκινήσετε και να επεκτείνετε την επόμενη μεγάλη ιδέα σας.",
            items: [
                { icon: Zap, title: 'Αστραπιαία Ταχύτητα', desc: 'Βελτιστοποιημένο για ταχύτητα με edge-caching και ελάχιστη καθυστέρηση.' },
                { icon: Shield, title: 'Ασφάλεια Τραπεζικού Επιπέδου', desc: 'Κρυπτογράφηση και συμμόρφωση έτοιμη για επιχειρήσεις.' },
                { icon: BarChart3, title: 'Analytics σε Πραγματικό Χρόνο', desc: 'Βαθιές γνώσεις για τη συμπεριφορά των χρηστών και τα ποσοστά μετατροπής.' },
                { icon: Globe, title: 'Παγκόσμια Κλίμακα', desc: 'Αναπτύξτε άμεσα σε 35+ περιοχές παγκοσμίως με ένα κλικ.' },
                { icon: Layers, title: 'Απρόσκοπτη Ενσωμάτωση', desc: 'Λειτουργεί με την υπάρχουσα υποδομή σας μέσω ισχυρών API και webhooks.' },
                { icon: Command, title: 'Κέντρο Εντολών', desc: 'Πλοήγηση μέσω πληκτρολογίου για έμπειρους χρήστες και γρήγορες ροές εργασιών.' }
            ]
        },
        pricing: {
            title: "Απλή, Διαφανής Τιμολόγηση",
            desc: "Χωρίς κρυφές χρεώσεις. Ακύρωση ανά πάσα στιγμή.",
            popular: "ΔΗΜΟΦΙΛΕΣΤΕΡΟ",
            monthly: "/μήνα",
            ctaHighlight: "Ξεκινήστε",
            ctaNormal: "Επιλέξτε Πακέτο",
            plans: [
                { name: 'Starter', price: '€29', desc: 'Ιδανικό για ατομικά έργα και μικρές ομάδες.', features: ['Έως 5 χρήστες', 'Βασικά Analytics', '24/7 Υποστήριξη', '10GB Αποθηκευτικός Χώρος'] },
                { name: 'Pro', price: '€99', desc: 'Για αναπτυσσόμενες επιχειρήσεις που χρειάζονται ισχύ.', features: ['Απεριόριστοι χρήστες', 'Προηγμένα Analytics', 'Προτεραιότητα στην Υποστήριξη', '1TB Αποθηκευτικός Χώρος', 'Custom Domain'] },
                { name: 'Enterprise', price: 'Custom', desc: 'Εξατομικευμένες λύσεις για ανάγκες μεγάλης κλίμακας.', features: ['Προσωπικός Διαχειριστής', 'SSO & Audit Logs', 'Εγγύηση SLA', 'Απεριόριστος Χώρος', 'On-premise εγκατάσταση'] }
            ]
        },
        contact: {
            title: "Έτοιμοι να ξεκινήσετε;",
            desc: "Γίνετε μέλος χιλιάδων προγραμματιστών που χτίζουν το μέλλο σήμερα. Δεν απαιτείται πιστωτική κάρτα.",
            placeholder: "Εισάγετε το email σας",
            button: "Αποκτήστε Πρόσβαση",
            terms: "Με την εγγραφή σας, συμφωνείτε με τους Όρους & Προϋποθέσεις μας."
        },
        industries: {
            select: "Επιλέξτε Κλάδο",
            saas: {
                name: 'GM Premium SaaS',
                stats: ['MRR', 'Χρήστες', 'Churn', 'Uptime'],
                nav: ['Επισκόπηση', 'Βάση Χρηστών', 'Source Control', 'Συνδρομή']
            },
            ecommerce: {
                name: 'GM Κατάστημα',
                stats: ['Πωλήσεις', 'Παραγγελίες', 'AOV', 'Επιστροφές'],
                nav: ['Βιτρίνα', 'Προϊόντα', 'Παραγγελίες', 'Πελάτες']
            },
            agency: {
                name: 'GM Creative',
                stats: ['Ενεργά Έργα', 'Ώρες Χρέωσης', 'Έσοδα', 'Leads'],
                nav: ['Dashboard', 'Έργα', 'Τιμολόγια', 'Αποθετήρια Git']
            },
            booking: {
                name: 'GM Κρατήσεις',
                stats: ['Κρατήσεις', 'Πληρότητα', 'Έσοδα', 'Check-ins'],
                nav: ['Ημερολόγιο', 'Κρατήσεις', 'Δωμάτια', 'Πληρωμές']
            }
        }
    },
    es: {
        hero: {
            badge: "v2.0 Ya Disponible",
            title: "Escala tu Ambición",
            desc: "La plataforma todo en uno diseñada para impulsar tu negocio. Analíticas hermosas, integraciones potentes y flujos de trabajo fluidos.",
            ctaPrimary: "Empezar a Crear",
            ctaSecondary: "Ver Demo"
        },
        features: {
            title: "Construido para Equipos Modernos",
            desc: "Todo lo que necesitas para lanzar y escalar tu próxima gran idea.",
            items: [
                { icon: Zap, title: 'Ultra Rápido', desc: 'Optimizado para la velocidad con edge-caching y latencia mínima.' },
                { icon: Shield, title: 'Seguridad Bancaria', desc: 'Cifrado de nivel empresarial y cumplimiento listos para usar.' },
                { icon: BarChart3, title: 'Analítica en Tiempo Real', desc: 'Información profunda sobre el comportamiento de los usuarios και métricas de conversión.' },
                { icon: Globe, title: 'Escala Global', desc: 'Despliegue instantáneo en más de 35 regiones en todo el mundo con un clic.' },
                { icon: Layers, title: 'Integración Fluida', desc: 'Funciona con tu infraestructura existente a través de potentes API και webhooks.' },
                { icon: Command, title: 'Centro de Mando', desc: 'Navegación centrada en el teclado para usuarios avanzados και flujos de trabajo rápidos.' }
            ]
        },
        pricing: {
            title: "Precios Simples y Transparentes",
            desc: "Sin cargos ocultos. Cancela en cualquier momento.",
            popular: "MÁS POPULAR",
            monthly: "/mes",
            ctaHighlight: "Empezar Ahora",
            ctaNormal: "Elegir Plan",
            plans: [
                { name: 'Starter', price: '29€', desc: 'Perfecto para proyectos personales και equipos pequeños.', features: ['Hasta 5 usuarios', 'Análisis Básico', 'Soporte 24/7', '10GB de Almacenamiento'] },
                { name: 'Pro', price: '99€', desc: 'Para empresas en crecimiento que requieren potencia.', features: ['Usuarios ilimitados', 'Análisis Avanzado', 'Soporte Prioritario', '1TB de Almacenamiento', 'Dominio Personalizado'] },
                { name: 'Enterprise', price: 'Personalizado', desc: 'Soluciones a medida para necesidades a gran escala.', features: ['Gestor Dedicado', 'SSO και Registros de Auditoría', 'Garantía SLA', 'Espacio Ilimitado', 'Instalación local'] }
            ]
        },
        contact: {
            title: "¿Listo para empezar?",
            desc: "Únete a miles de desarrolladores que construyen el futuro hoy. Sin tarjeta de crédito.",
            placeholder: "Introduce tu email",
            button: "Obtener Acceso",
            terms: "Al registrarte, aceptas nuestros Términos και Condiciones."
        },
        industries: {
            select: "Seleccionar Industria",
            saas: {
                name: 'GM Premium SaaS',
                stats: ['MRR', 'Usuarios', 'Churn', 'Uptime'],
                nav: ['Resumen', 'Base de Usuarios', 'Control de Código', 'Suscripción']
            },
            ecommerce: {
                name: 'GM Tienda',
                stats: ['Ventas', 'Pedidos', 'AOV', 'Devoluciones'],
                nav: ['Escaparate', 'Productos', 'Pedidos', 'Clientes']
            },
            agency: {
                name: 'GM Creative',
                stats: ['Proyectos Activos', 'Horas Facturables', 'Ingresos', 'Leads'],
                nav: ['Panel', 'Proyectos', 'Facturas', 'Repositorios Git']
            },
            booking: {
                name: 'GM Reservas',
                stats: ['Reservas', 'Ocupación', 'Ingresos', 'Check-ins'],
                nav: ['Calendario', 'Reservaciones', 'Habitaciones', 'Pagos']
            }
        }
    }
};
