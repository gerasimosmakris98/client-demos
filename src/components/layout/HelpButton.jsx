
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { useMemo } from 'react';

// This mapping should be kept in sync with the page structure
const pathCategoryMap = {
    '/about': 'about-platform',
    '/services': 'services',
    '/resume': 'resume',
    '/portfolio': 'content-engagement',
    '/blog': 'content-engagement',
    '/contact': 'contact-support',
    '/roadmap': 'roadmap',
    '/help': 'sitemap-navigation',
    '/status': 'status',
    '/legal/accessibility': 'accessibility',
    '/legal': 'privacy-data',
    '/user/overview': 'user-dashboard',
    '/user/notifications': 'user-dashboard',
    '/user/activity': 'user-dashboard',
    '/user/settings': 'account-auth',
    '/user/ai': 'ai',
};

export function HelpButton() {
    const { pathname } = useLocation();

    const helpCategory = useMemo(() => {
        // Find the most specific match first by sorting keys by length descending
        const sortedPaths = Object.keys(pathCategoryMap).sort((a, b) => b.length - a.length);
        const specificMatch = sortedPaths.find(path => pathname.startsWith(path));

        if (specificMatch) {
            return pathCategoryMap[specificMatch];
        }
        // Default to general for homepage or non-matched paths
        return 'general';
    }, [pathname]);

    if (pathname.startsWith('/admin') || pathname === '/') {
        return null;
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <a href={`https://g-makris.com/help/${helpCategory}`} target="_blank" rel="noopener noreferrer" aria-label="Help for this page">
                            <HelpCircle className="h-5 w-5" />
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Help for this page</p></TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
