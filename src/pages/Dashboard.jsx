
import { useState, useMemo } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentCard } from "@/components/content/ContentCard";
import { ContentCardMini } from "@/components/content/ContentCardMini";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, List, Search, SlidersHorizontal, ArrowUpDown, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


// Multi-language Data for Demos
const DEMO_PROJECTS_DATA = [
    {
        id: 'premium-template',
        type: 'project',
        title: {
            en: 'Universal Admin Dashboard',
            el: 'Universal Admin Dashboard',
            es: 'Panel de Administración Universal'
        },
        slug: 'premium-template',
        description: {
            en: 'A comprehensive SaaS admin dashboard with analytics, user management, and settings. Features light/dark mode and data visualization.',
            el: 'Ένας ολοκληρωμένος πίνακας ελέγχου SaaS με αναλυτικά στοιχεία, διαχείριση χρηστών και ρυθμίσεις. Διαθέτει light/dark mode.',
            es: 'Un panel de administración SaaS completo con análisis, gestión de usuarios y configuraciones. Cuenta con modo claro/oscuro.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        images: [],
        tags: ['SaaS', 'Admin', 'Dashboard', 'Analytics'],
        category: 'Technology',
        technologies: ['React', 'Recharts', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/premium-template',
        href: '/demos/premium-template',
        date: '2023-09-01T12:00:00Z',
        engagement: { views: 320, likes: 45, comments: 8 }
    },
    {
        id: 'hair-salon-greek',
        type: 'project',
        title: {
            en: 'Beauty & Hair Salon',
            el: 'Κομμωτήριο & Αισθητική',
            es: 'Salón de Belleza y Peluquería'
        },
        slug: 'hair-salon-greek',
        description: {
            en: 'Modern booking and showcase template for beauty salons. Includes service menu, stylist profiles, and appointment requests.',
            el: 'Μοντέρνο πρότυπο για κομμωτήρια. Περιλαμβάνει μενού υπηρεσιών, προφίλ στυλιτσών και αιτήματα ραντεβού.',
            es: 'Plantilla moderna de reservas y exhibición para salones de belleza. Incluye menú de servicios y perfiles de estilistas.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
        images: [],
        tags: ['Beauty', 'Service Business', 'Greek', 'Booking'],
        category: 'Beauty',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/hair-salon-greek',
        href: '/demos/hair-salon-greek',
        date: '2023-09-15T12:00:00Z',
        engagement: { views: 95, likes: 18, comments: 1 }
    },
    {
        id: 'law-office-greek',
        type: 'project',
        title: {
            en: 'Law Partners',
            el: 'Δικηγορικό Γραφείο',
            es: 'Socios Legales'
        },
        slug: 'law-office-greek',
        description: {
            en: 'Professional presence for legal firms. Features practice areas, attorney profiles, case studies, and consultation booking.',
            el: 'Επαγγελματική παρουσία για δικηγορικά γραφεία. Περιλαμβάνει τομείς δικαίου, προφίλ δικηγόρων και κράτηση ραντεβού.',
            es: 'Presencia profesional para firmas legales. Incluye áreas de práctica, perfiles de abogados y reserva de consultas.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop',
        images: [],
        tags: ['Legal', 'Professional Services', 'Greek'],
        category: 'Professional Services',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/law-office-greek',
        href: '/demos/law-office-greek',
        date: '2023-10-01T12:00:00Z',
        engagement: { views: 110, likes: 14, comments: 0 }
    },
    {
        id: 'electrician-greek',
        type: 'project',
        title: {
            en: 'Electrician Services',
            el: 'Ηλεκτρολογικές Υπηρεσίες',
            es: 'Servicios de Electricista'
        },
        slug: 'electrician-greek',
        description: {
            en: 'A professional website template for electricians and technical service providers. Features a clean design, service showcase, and contact forms.',
            el: 'Επαγγελματικό πρότυπο ιστοσελίδας για ηλεκτρολόγους. Καθαρός σχεδιασμός, παρουσίαση υπηρεσιών και φόρμες επικοινωνίας.',
            es: 'Una plantilla de sitio web profesional para electricistas. Diseño limpio, exhibición de servicios y formularios de contacto.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
        images: [],
        tags: ['Service Business', 'Greek', 'Template', 'Contact Form'],
        category: 'Small Business',
        technologies: ['React', 'Tailwind', 'Vite'],
        githubUrl: '',
        liveUrl: '/demos/electrician-greek',
        href: '/demos/electrician-greek',
        date: '2023-10-15T12:00:00Z',
        engagement: { views: 120, likes: 15, comments: 2 }
    },
    {
        id: 'gym-greek',
        type: 'project',
        title: {
            en: 'Pro Fitness Gym',
            el: 'Γυμναστήριο Pro Fitness',
            es: 'Gimnasio Pro Fitness'
        },
        slug: 'gym-greek',
        description: {
            en: 'Energetic design for gyms and fitness centers. Class schedules, trainer profiles, membership pricing, and trial sign-ups.',
            el: 'Δυναμικός σχεδιασμός για γυμναστήρια. Προγράμματα μαθημάτων, προφίλ γυμναστών, τιμές συνδρομών και εγγραφές.',
            es: 'Diseño energético para gimnasios. Horarios de clases, perfiles de entrenadores, precios de membresía e inscripciones.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        images: [],
        tags: ['Fitness', 'Health', 'Greek', 'Membership'],
        category: 'Health & Fitness',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/gym-greek',
        href: '/demos/gym-greek',
        date: '2023-10-25T12:00:00Z',
        engagement: { views: 180, likes: 25, comments: 4 }
    },
    {
        id: 'real-estate-greek',
        type: 'project',
        title: {
            en: 'Prime Real Estate',
            el: 'Μεσιτικό Γραφείο',
            es: 'Bienes Raíces Prime'
        },
        slug: 'real-estate-greek',
        description: {
            en: 'Property listing platform for agencies. Search filters, property details, agent contact, and map integration.',
            el: 'Πλατφόρμα αγγελιών ακινήτων. Φίλτρα αναζήτησης, λεπτομέρειες ακινήτων, επικοινωνία με πράκτορες και χάρτης.',
            es: 'Plataforma de listado de propiedades. Filtros de búsqueda, detalles de la propiedad, contacto con el agente y mapa.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
        images: [],
        tags: ['Real Estate', 'Listings', 'Greek', 'Map'],
        category: 'Real Estate',
        technologies: ['React', 'Mapbox', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/real-estate-greek',
        href: '/demos/real-estate-greek',
        date: '2023-11-05T12:00:00Z',
        engagement: { views: 210, likes: 28, comments: 6 }
    },
    {
        id: 'restaurant-greek',
        type: 'project',
        title: {
            en: 'Restaurant & Dining',
            el: 'Εστιατόριο & Γεύση',
            es: 'Restaurante y Cena'
        },
        slug: 'restaurant-greek',
        description: {
            en: 'An elegant template for restaurants and cafes. Includes menu display, reservation system, and gallery integration.',
            el: 'Κομψό πρότυπο για εστιατόρια. Περιλαμβάνει μενού, σύστημα κρατήσεων και συλλογή φωτογραφιών.',
            es: 'Una plantilla elegante para restaurantes. Incluye visualización de menú, sistema de reservas e integración de galería.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        images: [],
        tags: ['Hospitality', 'Greek', 'Menu', 'Reservations'],
        category: 'Hospitality',
        technologies: ['React', 'Framer Motion'],
        githubUrl: '',
        liveUrl: '/demos/restaurant-greek',
        href: '/demos/restaurant-greek',
        date: '2023-11-20T12:00:00Z',
        engagement: { views: 250, likes: 32, comments: 5 }
    },
    {
        id: 'medical-greek',
        type: 'project',
        title: {
            en: 'Medical Clinic',
            el: 'Ιατρικό Κέντρο',
            es: 'Clínica Médica'
        },
        slug: 'medical-greek',
        description: {
            en: 'Trustworthy design for clinics and doctors. Specialties, doctor profiles, online appointment booking, and health blog.',
            el: 'Αξιόπιστος σχεδιασμός για κλινικές. Ειδικότητες, προφίλ γιατρών, online ραντεβού και blog υγείας.',
            es: 'Diseño confiable para clínicas. Especialidades, perfiles de médicos, reserva de citas en línea y blog de salud.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
        images: [],
        tags: ['Healthcare', 'Medical', 'Greek', 'Booking'],
        category: 'Healthcare',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/medical-greek',
        href: '/demos/medical-greek',
        date: '2023-12-01T12:00:00Z',
        engagement: { views: 90, likes: 10, comments: 0 }
    },
    {
        id: 'hotel-greek',
        type: 'project',
        title: {
            en: 'Luxury Hotel',
            el: 'Πολυτελές Ξενοδοχείο',
            es: 'Hotel de Lujo'
        },
        slug: 'hotel-greek',
        description: {
            en: 'Immersive experience for hotels. Room showcases, amenities, booking engine integration, and local guide.',
            el: 'Μοναδική εμπειρία για ξενοδοχεία. Παρουσίαση δωματίων, παροχές, μηχανή κρατήσεων και τοπικός οδηγός.',
            es: 'Experiencia inmersiva para hoteles. Exhibición de habitaciones, comodidades, motor de reservas y guía local.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        images: [],
        tags: ['Hospitality', 'Hotel', 'Greek', 'Booking'],
        category: 'Hospitality',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/hotel-greek',
        href: '/demos/hotel-greek',
        date: '2023-12-15T12:00:00Z',
        engagement: { views: 160, likes: 22, comments: 2 }
    },
    {
        id: 'cafe-greek',
        type: 'project',
        title: {
            en: 'Modern Cafe',
            el: 'Modern Cafe',
            es: 'Cafetería Moderna'
        },
        slug: 'cafe-greek',
        description: {
            en: 'A cozy and modern design for coffee shops and bakeries. specialized in highlighting products and atmosphere.',
            el: 'Ζεστός και μοντέρνος σχεδιασμός για καφετέριες. Εξειδικευμένο στην ανάδειξη προϊόντων και ατμόσφαιρας.',
            es: 'Un diseño acogedor y moderno para cafeterías. Especializado en resaltar productos y ambiente.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop',
        images: [],
        tags: ['Hospitality', 'Cafe', 'Greek'],
        category: 'Hospitality',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/cafe-greek',
        href: '/demos/cafe-greek',
        date: '2024-01-10T12:00:00Z',
        engagement: { views: 85, likes: 12, comments: 0 }
    },
    {
        id: 'accounting-greek',
        type: 'project',
        title: {
            en: 'Accounting Firm',
            el: 'Λογιστικό Γραφείο',
            es: 'Firma de Contabilidad'
        },
        slug: 'accounting-greek',
        description: {
            en: 'Corporate design for accountants and financial advisors. Services, team, tax calculators, and resources.',
            el: 'Εταιρικός σχεδιασμός για λογιστές. Υπηρεσίες, ομάδα, φορολογικοί υπολογιστές και πόροι.',
            es: 'Diseño corporativo para contadores. Servicios, equipo, calculadoras de impuestos y recursos.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
        images: [],
        tags: ['Finance', 'Corporate', 'Greek'],
        category: 'Professional Services',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/accounting-greek',
        href: '/demos/accounting-greek',
        date: '2024-01-20T12:00:00Z',
        engagement: { views: 70, likes: 8, comments: 0 }
    },
    {
        id: 'tutoring-greek',
        type: 'project',
        title: {
            en: 'Education & Tutoring',
            el: 'Εκπαίδευση & Φροντιστήριο',
            es: 'Educación y Tutoría'
        },
        slug: 'tutoring-greek',
        description: {
            en: 'A professional platform for private tutors and educational centers. Course listings, teacher profiles, and scheduling.',
            el: 'Επαγγελματική πλατφόρμα για φροντιστήρια. Λίστες μαθημάτων, προφίλ εκπαιδευτικών και πρόγραμμα.',
            es: 'Una plataforma profesional para tutores. Listados de cursos, perfiles de profesores y horarios.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
        images: [],
        tags: ['Education', 'Service Business', 'Greek'],
        category: 'Education',
        technologies: ['React', 'Vogs'],
        githubUrl: '',
        liveUrl: '/demos/tutoring-greek',
        href: '/demos/tutoring-greek',
        date: '2024-02-05T12:00:00Z',
        engagement: { views: 150, likes: 20, comments: 3 }
    },
    {
        id: 'studio-greek',
        type: 'project',
        title: {
            en: 'Yoga & Pilates Studio',
            el: 'Στούντιο Yoga & Pilates',
            es: 'Estudio de Yoga y Pilates'
        },
        slug: 'studio-greek',
        description: {
            en: 'Calm and balanced design for wellness studios. Class schedules, instructor bios, gallery, and pricing.',
            el: 'Ήρεμος σχεδιασμός για στούντιο ευεξίας. Πρόγραμμα μαθημάτων, βιογραφικά εκπαιδευτών, συλλογή και τιμές.',
            es: 'Diseño tranquilo para estudios de bienestar. Horarios de clases, biografías de instructores, galería y precios.'
        },
        content: '',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop',
        images: [],
        tags: ['Wellness', 'Fitness', 'Greek', 'Classes'],
        category: 'Health & Fitness',
        technologies: ['React', 'Tailwind'],
        githubUrl: '',
        liveUrl: '/demos/studio-greek',
        href: '/demos/studio-greek',
        date: '2024-02-10T12:00:00Z',
        engagement: { views: 130, likes: 19, comments: 2 }
    }
];

// Helper to get unique values
const getUniqueValues = (items, key) => {
    return Array.from(new Set(items.flatMap(item => item[key] || []))).sort();
}
const getUniqueCategories = (items) => {
    return Array.from(new Set(items.map(item => item.category))).sort();
}


import { useLanguage } from '@/context/LanguageContext';

export default function Dashboard() {
    const { language } = useLanguage();
    const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'list' | 'compact'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTags, setSelectedTags] = useState([]);

    // Translate Projects
    const DEMO_PROJECTS = useMemo(() => {
        return DEMO_PROJECTS_DATA.map(p => ({
            ...p,
            title: p.title[language] || p.title['en'],
            description: p.description[language] || p.description['en']
        }));
    }, [language]);

    // Filtering logic
    const filteredProjects = useMemo(() => {
        return DEMO_PROJECTS.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));

            return matchesSearch && matchesCategory && matchesTags;
        });
    }, [searchQuery, selectedCategory, selectedTags, DEMO_PROJECTS]);

    const allTags = useMemo(() => getUniqueValues(DEMO_PROJECTS, 'tags'), [DEMO_PROJECTS]);
    const allCategories = useMemo(() => ['All', ...getUniqueCategories(DEMO_PROJECTS)], [DEMO_PROJECTS]);

    const toggleTag = (tag) => {
        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    }

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
        setSelectedTags([]);
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">Client Demos</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            Explore a collection of production-ready templates and demos designed for various industries.
                            These examples showcase modern design, responsive layouts, and optimized performance.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg border">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={viewMode === 'gallery' ? 'secondary' : 'ghost'}
                                        size="icon"
                                        onClick={() => setViewMode('gallery')}
                                        className="h-8 w-8"
                                    >
                                        <LayoutGrid className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Gallery View</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={viewMode === 'compact' ? 'secondary' : 'ghost'}
                                        size="icon"
                                        onClick={() => setViewMode('compact')}
                                        className="h-8 w-8"
                                    >
                                        <div className="flex gap-0.5">
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                            <div className="w-1.5 h-1.5 bg-current rounded-[1px]" />
                                        </div>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Compact View</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                                        size="icon"
                                        onClick={() => setViewMode('list')}
                                        className="h-8 w-8"
                                    >
                                        <List className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>List View</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>

                <div className="sticky top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 mb-8 border-b">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search demos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 bg-muted/50 border-transparent focus:bg-background transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="h-9 border-dashed">
                                        <SlidersHorizontal className="mr-2 h-4 w-4" />
                                        Category
                                        {selectedCategory !== 'All' && (
                                            <Separator orientation="vertical" className="mx-2 h-4" />
                                        )}
                                        {selectedCategory !== 'All' && (
                                            <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                                                {selectedCategory}
                                            </Badge>
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[200px]">
                                    <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {allCategories.map(category => (
                                        <DropdownMenuCheckboxItem
                                            key={category}
                                            checked={selectedCategory === category}
                                            onCheckedChange={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="h-9 border-dashed">
                                        <ArrowUpDown className="mr-2 h-4 w-4" />
                                        Tags
                                        {selectedTags.length > 0 && (
                                            <Separator orientation="vertical" className="mx-2 h-4" />
                                        )}
                                        {selectedTags.length > 0 && (
                                            <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                                                {selectedTags.length}
                                            </Badge>
                                        )}
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Filter by Tags</SheetTitle>
                                    </SheetHeader>
                                    <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
                                        <div className="space-y-4">
                                            {allTags.map(tag => (
                                                <div key={tag} className="flex items-center space-x-2">
                                                    <Button
                                                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => toggleTag(tag)}
                                                        className="w-full justify-start"
                                                    >
                                                        {selectedTags.includes(tag) ? <X className="mr-2 h-3 w-3" /> : <span className="mr-5" />}
                                                        {tag}
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                    <div className="mt-4">
                                        <Button variant="destructive" className="w-full" onClick={() => setSelectedTags([])}>Clear Tags</Button>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {(searchQuery || selectedCategory !== 'All' || selectedTags.length > 0) && (
                                <Button variant="ghost" onClick={clearFilters} className="h-9 px-2 lg:px-3">
                                    Reset
                                    <X className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>


                {filteredProjects.length === 0 ? (
                    <div className="text-center py-24">
                        <div className="bg-muted/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Search className="h-10 w-10 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No demos found</h3>
                        <p className="text-muted-foreground max-w-md mx-auto mb-6">
                            We couldn't find any demos matching your current filters. Try adjusting your search query or filters.
                        </p>
                        <Button onClick={clearFilters}>Clear all filters</Button>
                    </div>
                ) : (
                    <div className={cn(
                        "grid gap-6",
                        viewMode === 'gallery' && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                        viewMode === 'compact' && "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                        viewMode === 'list' && "grid-cols-1"
                    )}>
                        {filteredProjects.map((project, index) => (
                            viewMode === 'compact' ? (
                                <ContentCardMini key={project.id} item={project} index={index} />
                            ) : (
                                <ContentCard key={project.id} item={project} index={index} />
                            )
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
