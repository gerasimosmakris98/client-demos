
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getCookie, setCookie } from 'cookies-next';
import { cn } from '@/lib/utils';
import { Cookie } from 'lucide-react';
// import Link from 'next/link'; // Using react-router-dom Link
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const COOKIE_CONSENT_VERSION = 2; // Increment this to force re-consent on update

const defaultPreferences = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
};

const cookieCategories = [
    { id: 'necessary', title: 'Necessary', description: 'These cookies are essential for the site to function and cannot be disabled.' },
    { id: 'preferences', title: 'Preferences', description: 'These cookies remember your choices to customize your experience (e.g., theme).' },
    { id: 'statistics', title: 'Statistics', description: 'These cookies help us understand how you use my website to improve performance.' },
    { id: 'marketing', title: 'Marketing', description: 'These cookies are used to track visitors across websites to display relevant ads.' },
];


export const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [preferences, setPreferences] = useState(defaultPreferences);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const consentCookie = getCookie('cookie-consent');
            let shouldShow = true;
            if (consentCookie) {
                try {
                    const parsed = JSON.parse(consentCookie);
                    if (parsed.version === COOKIE_CONSENT_VERSION) {
                        shouldShow = false;
                    }
                } catch (e) {
                    // Invalid cookie, should show banner
                }
            }
            if (shouldShow) {
                const timer = setTimeout(() => setIsVisible(true), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    useEffect(() => {
        if (isExpanded) {
            const consentCookie = getCookie('cookie-consent');
            if (consentCookie) {
                try {
                    const savedPrefs = JSON.parse(consentCookie);
                    setPreferences({ ...defaultPreferences, ...savedPrefs, necessary: true });
                } catch (e) {
                    setPreferences(defaultPreferences);
                }
            } else {
                setPreferences(defaultPreferences);
            }
        }
    }, [isExpanded]);

    const savePreferences = (prefs) => {
        const fullPreferences = {
            version: COOKIE_CONSENT_VERSION,
            necessary: true,
            ...prefs
        };
        setCookie('cookie-consent', JSON.stringify(fullPreferences), { maxAge: 60 * 60 * 24 * 365, path: '/' });
        setIsVisible(false);
        window.dispatchEvent(new Event('consent-updated'));
    };

    const handleAcceptAll = () => {
        savePreferences({ preferences: true, statistics: true, marketing: true });
    };

    const handleRejectAll = () => {
        savePreferences({ preferences: false, statistics: false, marketing: false });
        if (isExpanded) {
            setIsExpanded(false);
        }
    };

    const handleSavePreferences = () => {
        const { necessary, ...prefsToSave } = preferences;
        savePreferences(prefsToSave);
        setIsExpanded(false);
    };

    const handleToggle = (key, value) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className={cn(
            "fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 transition-opacity duration-300",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            <Card className="shadow-2xl animate-in slide-in-from-bottom-5 bg-background/80 backdrop-blur-sm">
                {isExpanded ? (
                    <>
                        <CardHeader className="p-4">
                            <CardTitle>Cookie Preferences</CardTitle>
                            <CardDescription>Manage your cookie settings. These can be updated at any time.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-3">
                            {cookieCategories.map(cat => (
                                <div key={cat.id} className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
                                    <Label htmlFor={`consent-${cat.id}`} className="text-sm font-medium pr-4">{cat.title}</Label>
                                    <Switch
                                        id={`consent-${cat.id}`}
                                        checked={preferences[cat.id]}
                                        disabled={cat.id === 'necessary'}
                                        onCheckedChange={(checked) => handleToggle(cat.id, checked)}
                                    />
                                </div>
                            ))}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="details" className="border-b-0">
                                    <AccordionTrigger className="py-1 text-sm justify-start gap-1 hover:no-underline text-muted-foreground">
                                        Show details
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 space-y-3">
                                        <div className="p-4 border rounded-md bg-background/50 space-y-3">
                                            {cookieCategories.map(cat => (
                                                <div key={`desc-${cat.id}`}>
                                                    <h4 className="font-semibold text-sm">{cat.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-end gap-2 p-4 pt-0">
                            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>Cancel</Button>
                            <Button variant="outline" size="sm" onClick={handleRejectAll}>Reject All</Button>
                            <Button size="sm" onClick={handleSavePreferences}>Save Preferences</Button>
                        </CardFooter>
                    </>
                ) : (
                    <>
                        <CardHeader className="p-4">
                            <CardTitle className="flex items-center gap-2"><Cookie className="h-5 w-5" /> Valuing Your Privacy</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm text-muted-foreground">
                                This website uses cookies to enhance your experience. By clicking 'Accept all', you agree to the use of cookies.{' '}
                                <a href="https://g-makris.com/legal/cookies-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Learn more</a>.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-center sm:justify-end gap-2 p-4 pt-0">
                            <Button size="sm" onClick={handleAcceptAll}>Accept all</Button>
                            <Button variant="outline" size="sm" onClick={handleRejectAll}>Reject All</Button>
                            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(true)}>Configure</Button>
                        </CardFooter>
                    </>
                )}
            </Card>
        </div>
    );
};
