import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, BookOpen, Calendar, TrendingUp } from 'lucide-react';
import TutoringHero from './components/Hero';
import Programs from './components/Programs';
import Educators from './components/Educators';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AIChat from '../../components/common/AIChat';
import UniversalAdmin from '../../components/demos/UniversalAdmin';

const translations = {
    el: {
        hero: {
            badge: '100% ΕΠΙΤΥΧΙΑ',
            title: 'Χτίζουμε το',
            highlight: 'Μέλλον',
            title2: 'μαζί.',
            desc: 'Ολοκληρωμένο σύστημα εκπαίδευσης για μαθητές Γυμνασίου και Λυκείου. Εξειδικευμένοι καθηγητές και σύγχρονα εποπτικά μέσα.',
            ctaPrimary: 'Εγγραφές 2025-26',
            ctaSecondary: 'Πρόγραμμα Σπουδών',
            floatBadge: 'Πρωτοπορία',
            floatSub: 'Στην εκπαίδευση'
        },
        programs: {
            title: 'Εκπαιδευτικά Προγράμματα',
            subtitle: 'Καλύπτουμε κάθε εκπαιδευτική ανάγκη, από τα πρώτα σχολικά βήματα μέχρι την επαγγελματική εξειδίκευση.',
            items: [
                { title: 'Δημοτικό - Κέντρο Μελέτης', desc: 'Καθημερινή προετοιμασία μαθημάτων, εμπέδωση της ύλης και δημιουργική απασχόληση.' },
                { title: 'Μέση Εκπαίδευση & Πανελλήνιες', desc: 'Εξειδικευμένα τμήματα Γυμνασίου - Λυκείου. Στόχευση στην αριστεία και την επιτυχία στις εξετάσεις.' },
                { title: 'Πανεπιστημιακά Μαθήματα', desc: 'Υποστήριξη φοιτητών σε θετικές και θεωρητικές σχολές. Εκπόνηση εργασιών και πτυχιακών.' },
                { title: 'Ξένες Γλώσσες', desc: 'Αγγλικά, Γαλλικά, Γερμανικά, Ισπανικά. Προετοιμασία για όλα τα αναγνωρισμένα πτυχία.' },
                { title: 'Ρομποτική & Πληροφορική', desc: 'STEM εκπαίδευση, LEGO Education, Python, Web Development για παιδιά και εφήβους.' },
                { title: 'Καλλιτεχνικά & Μουσική', desc: 'Εργαστήρια ζωγραφικής, σχεδίου και μουσικής προπαιδείας. Ανάπτυξη δημιουργικών δεξιοτήτων.' }
            ]
        },
        educators: {
            badge: 'Για Εκπαιδευτικούς',
            title: 'Είσαι Ελεύθερος Επαγγελματίας;',
            highlight: 'Γίνε Συνεργάτης μας.',
            desc: 'Η πλατφόρμα μας δεν είναι μόνο για μαθητές. Παρέχουμε σε ελεύθερους επαγγελματίες εκπαιδευτικούς τα εργαλεία για να οργανώσουν και να αναπτύξουν τη δουλειά τους.',
            features: [
                'Διαχείριση μαθητών και βαθμολογιών',
                'Αυτόματη έκδοση αποδείξεων και οικονομικά στατιστικά',
                'Ψηφιακή τάξη και διαμοιρασμός υλικού',
                'Πρόσβαση στο δίκτυο γονέων και εύρεση νέων μαθητών'
            ],
            cta: 'Δημιουργία Λογαριασμού Teacher',
            dashboardTitle: 'Teacher Dashboard',
            dashboardSub: 'Επισκόπηση Μήνα',
            activeStudio: 'Active Studio',
            currentStudents: 'Τρέχοντες Μαθητές',
            monthlyRevenue: 'Έσοδα μήνα'
        },
        pricing: {
            title: 'Ευέλικτα Πακέτα',
            subtitle: 'Επιλέξτε το πρόγραμμα που ταιριάζει στις ανάγκες σας.',
            saveBadge: 'SAVE 20%',
            monthly: 'Μηνιαία',
            annual: 'Ετήσια',
            perMonth: '/ μήνα',
            selectPlan: 'Επιλογή Πακέτου',
            popular: 'Most Popular',
            plans: [
                { name: 'Group Studies', desc: 'Ιδανικό για μαθητές που λειτουργούν καλύτερα σε μικρές ομάδες.', features: ['Ολιγομελή τμήματα (4-6 άτομα)', '2 ώρες διδασκαλίας / εβδομάδα', 'Πρόσβαση στο υλικό πλατφόρμας', 'Μηνιαία διαγωνίσματα', 'Ενημέρωση γονέων online'] },
                { name: 'Premium Private', desc: 'Αποκλειστική προσοχή και εξατομικευμένο πρόγραμμα σπουδών.', features: ['Ιδιαίτερα μαθήματα (1-1)', 'Ευέλικτο ωράριο', 'Προσωπικός σύμβουλος σπουδών', 'Απεριόριστη πρόσβαση σε tests', 'Video-on-demand μαθήματα', '24/7 υποστήριξη'] },
                { name: 'Freelancer Pro', desc: 'Η λύση για ανεξάρτητους καθηγητές που θέλουν να οργανωθούν.', features: ['Διαχείριση έως 50 μαθητών', 'Έκδοση αποδείξεων', 'Online Gradebook', 'Ημερολόγιο μαθημάτων', 'Σελίδα προφίλ στο δίκτυο', '0% προμήθεια στα μαθήματα'] }
            ]
        },
        faq: {
            title: 'Συχνές Ερωτήσεις',
            subtitle: 'Λύστε τις απορίες σας σχετικά με τη λειτουργία του φροντιστηρίου και της πλατφόρμας.',
            items: [
                { q: 'Πώς λειτουργεί η εγγραφή στην πλατφόρμα;', a: 'Η εγγραφή είναι απλή. Δημιουργείτε λογαριασμό ως Μαθητής, Γονέας ή Καθηγητής. Για τους καθηγητές απαιτείται επαλήθευση στοιχείων. Μόλις εγγραφείτε, έχετε άμεση πρόσβαση στο dashboard σας.' },
                { q: 'Μπορώ να κάνω ιδιαίτερα μαθήματα online;', a: 'Ναι! Η πλατφόρμα υποστηρίζει πλήρως την τηλεκπαίδευση με ενσωματωμένο video room, διαδραστικό πίνακα (whiteboard) και δυνατότητα καταγραφής του μαθήματος για μελλοντική επανάληψη.' },
                { q: 'Υπάρχει δυνατότητα δοκιμαστικού μαθήματος;', a: 'Φυσικά. Όλοι οι νέοι μαθητές δικαιούνται ένα δωρεάν 30λεπτο μάθημα γνωριμίας με τον καθηγητή της επιλογής τους για να συζητήσουν τους στόχους και το πλάνο μελέτης.' },
                { q: 'Πώς γίνεται η πληρωμή των διδάκτρων;', a: 'Οι πληρωμές γίνονται με ασφάλεια μέσω κάρτας ή τραπεζικής μεταφοράς μέσα από το Student Dashboard. Παρέχουμε αυτόματη μηνιαία χρέωση για συνδρομητικά πακέτα.' },
                { q: 'Παρέχετε υλικό προετοιμασίας για Πανελλήνιες;', a: 'Διαθέτουμε τη μεγαλύτερη βάση δεδομένων με θέματα παλαιότερων ετών, προσομοιώσεις διαγωνισμάτων και σημειώσεις καθηγητών, ταξινομημένα ανά μάθημα και κεφάλαιο.' }
            ]
        },
        cta: {
            title: 'Έτοιμοι να ξεκινήσετε;',
            subtitle: 'Κλείστε ένα δωρεάν δοκιμαστικό μάθημα σήμερα ή περιηγηθείτε στην πλατφόρμα μας.',
            btnPrimary: 'Δωρεάν Δοκιμαστικό',
            btnSecondary: 'Επικοινωνία'
        },
        admin: {
            tabs: { students: 'Students', lessons: 'Lessons', calendar: 'Calendar', progress: 'Progress' },
            columns: {
                students: ['Student', 'Status', 'Program', 'Grade'],
                lessons: ['Lesson', 'Status', 'Teacher', 'Time'],
                calendar: ['Day', 'Status', 'Lessons', 'Students'],
                progress: ['Student', 'Status', 'Score', 'Improvement']
            }
        }
    },
    en: {
        hero: {
            badge: '100% SUCCESS',
            title: 'Building the',
            highlight: 'Future',
            title2: 'Together.',
            desc: 'Comprehensive education system for Middle and High School students. Specialized teachers and modern visual aids.',
            ctaPrimary: 'Enroll 2025-26',
            ctaSecondary: 'Curriculum',
            floatBadge: 'Innovation',
            floatSub: 'In Education'
        },
        programs: {
            title: 'Educational Programs',
            subtitle: 'We cover every educational need, from early school steps to professional specialization.',
            items: [
                { title: 'Primary - Study Center', desc: 'Daily lesson preparation, material comprehension, and creative engagement.' },
                { title: 'Secondary & Exams', desc: 'Specialized Middle & High School classes. Targeting excellence and exam success.' },
                { title: 'University Courses', desc: 'Support for science and humanities students. Assignment and thesis assistance.' },
                { title: 'Foreign Languages', desc: 'English, French, German, Spanish. Preparation for all recognized degrees.' },
                { title: 'Robotics & IT', desc: 'STEM education, LEGO Education, Python, Web Development for kids and teens.' },
                { title: 'Arts & Music', desc: 'Painting, drawing, and music propaedeutics workshops. Developing creative skills.' }
            ]
        },
        educators: {
            badge: 'For Educators',
            title: 'Are you a Freelancer?',
            highlight: 'Partner with Us.',
            desc: 'Our platform isn\'t just for students. We provide freelance educators with tools to organize and grow their business.',
            features: [
                'Student and grade management',
                'Automated invoicing and financial stats',
                'Digital classroom and material sharing',
                'Access to parent network and finding new students'
            ],
            cta: 'Create Teacher Account',
            dashboardTitle: 'Teacher Dashboard',
            dashboardSub: 'Month Overview',
            activeStudio: 'Active Studio',
            currentStudents: 'Current Students',
            monthlyRevenue: 'Monthly Revenue'
        },
        pricing: {
            title: 'Flexible Plans',
            subtitle: 'Choose the program that fits your needs.',
            saveBadge: 'SAVE 20%',
            monthly: 'Monthly',
            annual: 'Annual',
            perMonth: '/ month',
            selectPlan: 'Select Plan',
            popular: 'Most Popular',
            plans: [
                { name: 'Group Studies', desc: 'Ideal for students who perform better in small groups.', features: ['Small groups (4-6 people)', '2 teaching hours / week', 'Platform material access', 'Monthly exams', 'Online parent updates'] },
                { name: 'Premium Private', desc: 'Exclusive attention and personalized curriculum.', features: ['Private lessons (1-1)', 'Flexible schedule', 'Personal study advisor', 'Unlimited access to tests', 'Video-on-demand lessons', '24/7 support'] },
                { name: 'Freelancer Pro', desc: 'The solution for independent teachers who want to get organized.', features: ['Manage up to 50 students', 'Issue invoices', 'Online Gradebook', 'Lesson calendar', 'Network profile page', '0% commission on lessons'] }
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Solve your queries regarding the tuition center and platform operation.',
            items: [
                { q: 'How does registration work?', a: 'Registration is simple. Create an account as Student, Parent, or Teacher. Verification is required for teachers. Once registered, you have instant access to your dashboard.' },
                { q: 'Can I take private lessons online?', a: 'Yes! The platform fully supports distance learning with an integrated video room, interactive whiteboard, and lesson recording for future review.' },
                { q: 'Is there a trial lesson available?', a: 'Of course. All new students are entitled to a free 30-minute introductory lesson with the teacher of their choice to discuss goals and study plans.' },
                { q: 'How is tuition paid?', a: 'Payments are made securely via card or bank transfer through the Student Dashboard. We provide automatic monthly billing for subscription plans.' },
                { q: 'Do you provide exam prep material?', a: 'We have the largest database of past papers, exam simulations, and teacher notes, organized by subject and chapter.' }
            ]
        },
        cta: {
            title: 'Ready to start?',
            subtitle: 'Book a free trial lesson today or browse our platform.',
            btnPrimary: 'Free Trial',
            btnSecondary: 'Contact Us'
        },
        admin: {
            tabs: { students: 'Students', lessons: 'Lessons', calendar: 'Calendar', progress: 'Progress' },
            columns: {
                students: ['Student', 'Status', 'Program', 'Grade'],
                lessons: ['Lesson', 'Status', 'Teacher', 'Time'],
                calendar: ['Day', 'Status', 'Lessons', 'Students'],
                progress: ['Student', 'Status', 'Score', 'Improvement']
            }
        }
    },
    es: {
        hero: {
            badge: '100% ÉXITO',
            title: 'Construimos el',
            highlight: 'Futuro',
            title2: 'Juntos.',
            desc: 'Sistema educativo integral para estudiantes de secundaria y bachillerato. Profesores especializados y medios visuales modernos.',
            ctaPrimary: 'Inscripciones 2025-26',
            ctaSecondary: 'Plan de Estudios',
            floatBadge: 'Innovación',
            floatSub: 'En Educación'
        },
        programs: {
            title: 'Programas Educativos',
            subtitle: 'Cubrimos todas las necesidades educativas, desde los primeros pasos escolares hasta la especialización profesional.',
            items: [
                { title: 'Primaria - Centro de Estudio', desc: 'Preparación diaria de lecciones, comprensión de material y participación creativa.' },
                { title: 'Secundaria y Exámenes', desc: 'Clases especializadas de secundaria. Apuntando a la excelencia y el éxito en los exámenes.' },
                { title: 'Cursos Universitarios', desc: 'Apoyo para estudiantes de ciencias y humanidades. Asistencia en tareas y tesis.' },
                { title: 'Idiomas Extranjeros', desc: 'Inglés, Francés, Alemán, Español. Preparación para todos los títulos reconocidos.' },
                { title: 'Robótica e Informática', desc: 'Educación STEM, LEGO Education, Python, Desarrollo Web para niños y adolescentes.' },
                { title: 'Artes y Música', desc: 'Talleres de pintura, dibujo y propedéutica musical. Desarrollo de habilidades creativas.' }
            ]
        },
        educators: {
            badge: 'Para Educadores',
            title: '¿Eres Freelancer?',
            highlight: 'Únete a Nosotros.',
            desc: 'Nuestra plataforma no es solo para estudiantes. Ofrecemos a los educadores freelance herramientas para organizar y hacer crecer su negocio.',
            features: [
                'Gestión de estudiantes y calificaciones',
                'Facturación automática y estadísticas financieras',
                'Aula digital y compartición de material',
                'Acceso a la red de padres y búsqueda de nuevos estudiantes'
            ],
            cta: 'Crear Cuenta de Profesor',
            dashboardTitle: 'Panel del Profesor',
            dashboardSub: 'Resumen Mensual',
            activeStudio: 'Estudio Activo',
            currentStudents: 'Estudiantes Actuales',
            monthlyRevenue: 'Ingresos Mensuales'
        },
        pricing: {
            title: 'Planes Flexibles',
            subtitle: 'Elige el programa que se adapte a tus necesidades.',
            saveBadge: 'AHORRA 20%',
            monthly: 'Mensual',
            annual: 'Anual',
            perMonth: '/ mes',
            selectPlan: 'Seleccionar Plan',
            popular: 'Más Popular',
            plans: [
                { name: 'Estudios Grupales', desc: 'Ideal para estudiantes que rinden mejor en grupos pequeños.', features: ['Grupos pequeños (4-6 personas)', '2 horas de clase / semana', 'Acceso al material de la plataforma', 'Exámenes mensuales', 'Actualizaciones en línea para padres'] },
                { name: 'Privado Premium', desc: 'Atención exclusiva y plan de estudios personalizado.', features: ['Clases particulares (1-1)', 'Horario flexible', 'Asesor de estudios personal', 'Acceso ilimitado a pruebas', 'Lecciones de video bajo demanda', 'Soporte 24/7'] },
                { name: 'Freelancer Pro', desc: 'La solución para profesores independientes que quieren organizarse.', features: ['Gestionar hasta 50 estudiantes', 'Emitir facturas', 'Libro de calificaciones en línea', 'Calendario de lecciones', 'Página de perfil en la red', '0% de comisión en lecciones'] }
            ]
        },
        faq: {
            title: 'Preguntas Frecuentes',
            subtitle: 'Resuelva sus dudas sobre el funcionamiento del centro de estudios y la plataforma.',
            items: [
                { q: '¿Cómo funciona el registro?', a: 'El registro es simple. Cree una cuenta como Estudiante, Padre o Profesor. Se requiere verificación para los profesores. Una vez registrado, tiene acceso instantáneo a su panel.' },
                { q: '¿Puedo tomar clases particulares en línea?', a: '¡Sí! La plataforma soporta completamente el aprendizaje a distancia con sala de video integrada, pizarra interactiva y grabación de lecciones para repaso futuro.' },
                { q: '¿Hay una clase de prueba disponible?', a: 'Por supuesto. Todos los nuevos estudiantes tienen derecho a una lección introductoria gratuita de 30 minutos con el profesor de su elección para discutir objetivos y planes de estudio.' },
                { q: '¿Cómo se pagan las matrículas?', a: 'Los pagos se realizan de forma segura mediante tarjeta o transferencia bancaria a través del Panel del Estudiante. Ofrecemos facturación mensual automática para planes de suscripción.' },
                { q: '¿Proporcionan material de preparación?', a: 'Contamos con la mayor base de datos de exámenes anteriores, simulaciones de exámenes y notas de profesores, organizadas por materia y capítulo.' }
            ]
        },
        cta: {
            title: '¿Listo para empezar?',
            subtitle: 'Reserve una clase de prueba gratuita hoy o navegue por nuestra plataforma.',
            btnPrimary: 'Prueba Gratuita',
            btnSecondary: 'Contáctenos'
        },
        admin: {
            tabs: { students: 'Students', lessons: 'Lessons', calendar: 'Calendar', progress: 'Progress' },
            columns: {
                students: ['Student', 'Status', 'Program', 'Grade'],
                lessons: ['Lesson', 'Status', 'Teacher', 'Time'],
                calendar: ['Day', 'Status', 'Lessons', 'Students'],
                progress: ['Student', 'Status', 'Score', 'Improvement']
            }
        }
    }
};

const TutoringDemo = () => {
    const { viewMode, language } = useOutletContext() || { viewMode: 'desktop', language: 'en' };
    const t = translations[language || 'en'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (viewMode === 'admin') {
        const adminTabs = [
            {
                id: 'students', label: t.admin.tabs.students, icon: Users, columns: t.admin.columns.students,
                rows: [['Maria K.', 'Active', 'IELTS Prep', 'A'], ['John D.', 'Active', 'Math Advanced', 'B+'], ['Elena P.', 'Active', 'Greek Literature', 'A-'], ['George S.', 'Pending', 'Physics 101', '--'], ['Anna M.', 'Active', 'English B2', 'A'], ['Nikos T.', 'Active', 'Algebra', 'B']]
            },
            {
                id: 'lessons', label: t.admin.tabs.lessons, icon: BookOpen, columns: t.admin.columns.lessons,
                rows: [['IELTS Writing', 'Scheduled', 'Dr. Papadopoulos', '10:00'], ['Math Analysis', 'In Progress', 'K. Stavros', '11:30'], ['Greek Lit.', 'Completed', 'M. Alexiou', '09:00'], ['Physics Lab', 'Scheduled', 'N. Georgiou', '14:00'], ['English Conv.', 'Completed', 'S. Williams', '08:00']]
            },
            {
                id: 'calendar', label: t.admin.tabs.calendar, icon: Calendar, columns: t.admin.columns.calendar,
                rows: [['Monday', 'Active', '12 lessons', '28'], ['Tuesday', 'Active', '10 lessons', '24'], ['Wednesday', 'Active', '14 lessons', '32'], ['Thursday', 'Active', '11 lessons', '26'], ['Friday', 'Active', '8 lessons', '18'], ['Saturday', 'Pending', '4 lessons', '10']]
            },
            {
                id: 'progress', label: t.admin.tabs.progress, icon: TrendingUp, columns: t.admin.columns.progress,
                rows: [['Maria K.', 'Active', '92%', '+8%'], ['John D.', 'Active', '85%', '+12%'], ['Elena P.', 'Active', '94%', '+5%'], ['George S.', 'Pending', '71%', '+3%'], ['Anna M.', 'Active', '89%', '+7%'], ['Nikos T.', 'Active', '78%', '+15%']]
            },
        ];

        return (
            <UniversalAdmin config={{
                brandName: 'GM Tutoring',
                brandLogo: '🎓',
                accentColor: 'emerald',
                roles: [{ id: 'admin', label: 'Director' }, { id: 'staff', label: 'Teacher' }, { id: 'user', label: 'Student' }],
                stats: [
                    { label: 'Active Students', value: '1,247', trend: 12 },
                    { label: 'Revenue (Month)', value: '€45.2k', trend: 8 },
                    { label: 'Enrolled Courses', value: '86', trend: 5 },
                    { label: 'Pass Rate', value: '98.7%', trend: 2 }
                ],
                kpis: [
                    { label: 'Student Satisfaction', value: '96%', progress: 96 },
                    { label: 'Teacher Retention', value: '94%', progress: 94 },
                    { label: 'Course Completion', value: '89%', progress: 89 }
                ],
                customTabs: adminTabs,
            }} />
        );
    }

    return (
        <div className="font-sans text-gray-900 bg-white" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <TutoringHero t={t.hero} />
            <Programs t={t.programs} />
            <Educators t={t.educators} />
            <Pricing t={t.pricing} />
            <FAQ t={t.faq} />

            {/* CTA Footer for Landing Page */}
            <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        {t.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                            {t.cta.btnPrimary}
                        </button>
                        <button className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
                            {t.cta.btnSecondary}
                        </button>
                    </div>
                </div>
            </section>

            <AIChat
                brandName="GM Tutoring"
                botName="Education Mentor AI"
                accentColor="emerald"
                welcomeMessage="Building the Future together! 🎓 I'm your Education Mentor. Need help with enrollments or course details?"
            />
        </div>
    );
};

export default TutoringDemo;
