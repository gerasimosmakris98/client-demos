import React from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    const languages = {
        'en': 'English',
        'el': 'Ελληνικά',
        'es': 'Español'
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" title="Change Language">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Change Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {Object.entries(languages).map(([code, label]) => (
                    <DropdownMenuItem
                        key={code}
                        onClick={() => setLanguage(code)}
                        className={language === code ? "bg-accent" : ""}
                    >
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
