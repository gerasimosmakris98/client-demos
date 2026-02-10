
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, ArrowRight, Info, Gift, AlertTriangle, Wrench, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const bannerConfig = {
    info: { icon: <Info className="h-4 w-4" />, style: "text-blue-800 dark:text-blue-300" },
    new_content: { icon: <Gift className="h-4 w-4" />, style: "text-primary/90 dark:text-primary/80" },
    promo: { icon: <Gift className="h-4 w-4" />, style: "text-purple-800 dark:text-purple-300" },
    incident: { icon: <AlertTriangle className="h-4 w-4" />, style: "text-destructive" },
    warning: { icon: <AlertTriangle className="h-4 w-4" />, style: "text-amber-800 dark:text-amber-300" },
    maintenance: { icon: <Wrench className="h-4 w-4" />, style: "text-gray-800 dark:text-gray-300" },
};

function PublicNotificationItem({ announcement }) {
    const displayConfig = bannerConfig[announcement.type] || bannerConfig.info;

    return (
        <div className={cn("p-3 rounded-lg relative group", displayConfig.style)}>
            <div className="flex items-start gap-3">
                {displayConfig.icon}
                <div className="flex-1 pr-6">
                    <p className="font-semibold text-sm">{announcement.title}</p>
                    <p className="text-xs mt-1">{announcement.description}</p>
                </div>
            </div>
        </div>
    );
}

// Mock data for demo purposes
const MOCK_ANNOUNCEMENTS = [
    { id: 1, type: 'info', title: 'Welcome to Client Demos', description: 'Explore our latest web templates and demos.' },
    { id: 2, type: 'new_content', title: 'New Electrician Demo', description: 'Check out the polished Electrician demo with enhanced visuals.' }
];

export function Notifications() {
    // Guest mode only for client-demos
    return <GuestNotifications />;
}

function GuestNotifications() {
    const [isOpen, setIsOpen] = useState(false);
    const activeAnnouncements = MOCK_ANNOUNCEMENTS;
    const unreadCount = activeAnnouncements.length;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative rounded-full"
                                aria-label={`Toggle notifications (${unreadCount} unread)`}
                            >
                                <Bell className="h-5 w-5" />
                                {unreadCount > 0 && (
                                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center rounded-full p-0 text-xs">
                                        {unreadCount}
                                    </Badge>
                                )}
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[calc(100vw-2rem)] sm:w-80 md:w-96 p-0" align="end">
                            <div className="p-3 flex justify-between items-center border-b">
                                <h4 className="font-medium text-sm">Site Announcements</h4>
                            </div>
                            <ScrollArea className="h-96">
                                <div className="p-2 space-y-1">
                                    {activeAnnouncements.map(announcement => (
                                        <PublicNotificationItem key={announcement.id} announcement={announcement} />
                                    ))}
                                </div>
                            </ScrollArea>
                        </PopoverContent>
                    </Popover>
                </TooltipTrigger>
                <TooltipContent><p>Announcements</p></TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
