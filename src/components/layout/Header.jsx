
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LogIn, LayoutDashboard, User as UserIcon, LifeBuoy, GitBranch, Map, Server, Home, Wrench, FileText, Briefcase, Newspaper, Mail, ChevronsUpDown, Search, Info, Languages, Globe, Check, MoreVertical, ThumbsUp, Scale, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser, useAuth } from "@/hooks/use-user";
// import { signOut } from "firebase/auth"; // Mocked
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AccessibilityToggle } from "./AccessibilityToggle";
import { LanguageSelector } from "./LanguageSelector";
import { Separator } from "../ui/separator";
import { Notifications } from '@/components/layout/Notifications';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { CommandMenu } from "./CommandMenu";
import { Skeleton } from "../ui/skeleton";
import { useSettings } from "@/context/SettingsContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpButton } from "./HelpButton";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

// External links for g-makris main site
const MAIN_SITE = "https://g-makris.com";

const exploreLinks = [
    { title: "Portfolio", href: `${MAIN_SITE}/portfolio`, description: "A showcase of my projects in FinTech, AI, and web development." },
    { title: "Blog", href: `${MAIN_SITE}/blog`, description: "My latest articles and thoughts on technology and business." },
    { title: "Testimonials", href: `${MAIN_SITE}/feedback/testimonials`, description: "What clients and colleagues say about my work." },
];

const aboutLinks = [
    { title: "About Me", href: `${MAIN_SITE}/about`, description: "The vision behind the platform and my professional philosophy." },
    { title: "Services", href: `${MAIN_SITE}/services`, description: "An overview of the professional services I offer." },
    { title: "Resume", href: `${MAIN_SITE}/resume`, description: "My detailed professional experience and skills." },
];

const platformLinks = [
    { title: "Roadmap", href: `${MAIN_SITE}/roadmap/board`, description: "What's been built, what's in progress, and what's next." },
    { title: "System Status", href: `${MAIN_SITE}/status/current`, description: "Real-time service status and incident history." },
    { title: "Help Center", href: `${MAIN_SITE}/help`, description: "Find answers to frequently asked questions (FAQs)." },
    { title: "Feedback Center", href: `${MAIN_SITE}/feedback`, description: "Provide feedback on the site, services, or communications." },
    { title: "Legal Center", href: `${MAIN_SITE}/legal/privacy-policy`, description: "View the Privacy Policy, Terms of Service, and more." },
    { title: "Sitemap", href: `${MAIN_SITE}/sitemap`, description: "A complete overview of all pages on the site." },
];


const ListItem = ({ className, title, children, href, ...props }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

const mobileNavGroups = [
    {
        title: "Explore",
        links: [
            { href: `${MAIN_SITE}/portfolio`, label: "Portfolio", icon: <Briefcase className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/blog`, label: "Blog", icon: <Newspaper className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/feedback/testimonials`, label: "Testimonials", icon: <Star className="mr-2 h-4 w-4" /> },
        ]
    },
    {
        title: "About",
        links: [
            { href: `${MAIN_SITE}/about`, label: "About Me & Platform", icon: <Info className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/services`, label: "Services", icon: <Wrench className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/resume`, label: "Resume", icon: <FileText className="mr-2 h-4 w-4" /> },
        ]
    },
    {
        title: "Platform Resources",
        links: [
            { href: `${MAIN_SITE}/roadmap/board`, label: "Roadmap", icon: <GitBranch className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/status/current`, label: "System Status", icon: <Server className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/help`, label: "Help Center", icon: <LifeBuoy className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/feedback`, label: "Feedback", icon: <ThumbsUp className="mr-2 h-4 w-4" /> },
            { href: `${MAIN_SITE}/legal/privacy-policy`, label: "Legal Center", icon: <Scale className="mr-2 h-4 w-4" /> },
        ]
    }
];


const MobileNavContent = ({ user, isAdmin, closeMenu, onLogout, onLoginClick }) => {

    return (
        <>
            <SheetHeader className="p-4 border-b">
                <SheetTitle>
                    <Link to="/" className="flex items-center gap-2 font-bold text-lg font-headline" onClick={closeMenu}>
                        <span>Menu</span>
                    </Link>
                </SheetTitle>
            </SheetHeader>
            <ScrollArea className="flex-grow">
                <nav className="space-y-1 p-4">
                    {mobileNavGroups.map(group => (
                        <Collapsible key={group.title} className="py-1" defaultOpen={true}>
                            <CollapsibleTrigger className="w-full text-left">
                                <div className="flex items-center justify-between px-3 py-2 text-base font-semibold hover:bg-muted rounded-md">
                                    <span>{group.title}</span>
                                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 mt-1 border-l-2">
                                {group.links.map(link => (
                                    <NavLink key={link.href} href={link.href} label={link.label} icon={link.icon} className="text-sm py-2 px-3 w-full justify-start rounded-md font-normal" onClick={closeMenu} isExternal />
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                    <Separator />
                    <NavLink href={`${MAIN_SITE}/contact`} label="Contact" icon={<Mail className="mr-2 h-4 w-4" />} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-base font-semibold" onClick={closeMenu} isExternal />
                </nav>
                <Separator />
                <div className="p-4">
                    <Collapsible>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="w-full justify-between">
                                Appearance & Accessibility
                                <ChevronsUpDown className="h-4 w-4" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="p-2 rounded-md border mt-2">
                                <AccessibilityToggle />
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </ScrollArea>
        </>
    );
};

const NavLink = ({ href, label, icon, className, onClick, isExternal }) => {
    // Basic active state check for internal links would go here, simplified for external
    const isActive = false;

    if (isExternal) {
        return (
            <a
                href={href}
                className={cn(
                    "flex items-center transition-colors hover:text-primary",
                    isActive ? "text-primary font-semibold" : "text-muted-foreground",
                    className
                )}
                onClick={onClick}
            >
                {icon}
                {label}
            </a>
        )
    }

    return (
        <Link
            to={href}
            className={cn(
                "flex items-center transition-colors hover:text-primary",
                isActive ? "text-primary font-semibold" : "text-muted-foreground",
                className
            )}
            onClick={onClick}
        >
            {icon}
            {label}
        </Link>
    )
};


export function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
    const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
    const { user, isAdmin } = useUser();
    const auth = useAuth();
    const [isClient, setIsClient] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    //   const { maintenanceSettings, isLoadingMaintenance } = useSettings();

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        console.log("Logout mocked");
    };

    const handleMobileLoginClick = () => {
        setMobileMenuOpen(false);
        // Redirect to main site login
        window.location.href = `${MAIN_SITE}/login`;
    }

    const GuestNav = () => (
        <div className="flex items-center gap-1" data-onboarding="login-button">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setCommandMenuOpen(true)}>
                            <Search className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Search</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Notifications />
            <LanguageSelector />
            <HelpButton />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="More options">
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64" align="end" forceMount>
                    <AccessibilityToggle />
                </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" asChild>
                <a href={`${MAIN_SITE}/login`}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                </a>
            </Button>
        </div>
    )

    return (
        <>
            <header className="sticky top-0 z-50 p-4">
                <div
                    className={cn(
                        "relative container mx-auto flex h-16 items-center rounded-lg transition-all duration-300",
                        scrolled
                            ? "border bg-background/80 backdrop-blur-sm border-border/50 shadow-lg"
                            : "border border-transparent"
                    )}
                >
                    <div className="flex flex-1 items-center justify-start gap-2">
                        <Link to="/" className="flex items-center gap-2 font-bold text-lg font-headline transition-colors hover:text-primary">
                            <span className="font-headline text-xl font-bold">GM</span>
                        </Link>
                    </div>

                    {isClient ? (
                        <nav className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1 text-sm font-medium">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {exploreLinks.map((component) => (
                                                    <ListItem key={component.title} href={component.href} title={component.title}>
                                                        {component.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {aboutLinks.map((component) => (
                                                    <ListItem key={component.title} href={component.href} title={component.title}>
                                                        {component.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {platformLinks.map((component) => (
                                                    <ListItem key={component.title} href={component.href} title={component.title}>
                                                        {component.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <a href={`${MAIN_SITE}/contact`} className={navigationMenuTriggerStyle()}>
                                                Contact
                                            </a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>
                    ) : (
                        <div className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Skeleton className="h-10 w-[450px]" />
                        </div>
                    )}

                    <div className="flex-1 flex items-center justify-end gap-2">

                        <div className="hidden xl:inline-flex">
                            {isClient ? <GuestNav /> : <Skeleton className="h-10 w-40" />}
                        </div>

                        <div className="xl:hidden flex items-center gap-1">
                            {isClient ? (
                                <>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" onClick={() => setCommandMenuOpen(true)}>
                                                    <Search className="h-5 w-5" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent><p>Search</p></TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <Notifications />
                                    <LanguageSelector />
                                    <HelpButton />
                                    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                        <SheetTrigger asChild>
                                            <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                                                <Menu className="h-6 w-6" />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col p-0">
                                            <MobileNavContent user={user} isAdmin={isAdmin} closeMenu={() => setMobileMenuOpen(false)} onLogout={handleLogout} onLoginClick={handleMobileLoginClick} />
                                        </SheetContent>
                                    </Sheet>
                                </>
                            ) : <Skeleton className="h-10 w-24" />}
                        </div>
                    </div>
                </div>
            </header>
            <CommandMenu isOpen={isCommandMenuOpen} onOpenChange={setCommandMenuOpen} searchAll={true} />
        </>
    );
}
