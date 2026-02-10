
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
// import { useSearch } from "@/hooks/useSearch"; // TODO: Create this hook
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Bot, Home, Layout, FileText, Briefcase, Mail, Info, Wrench } from "lucide-react";

// Simple client-side search mock
function useSearch({ searchAll }) {
    const [query, setQuery] = useState("");

    // Mock results based on demos
    const results = [
        {
            group: "Pages",
            commands: [
                { id: "home", label: "Home", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
                { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: <Layout className="mr-2 h-4 w-4" /> },
                { id: "about", label: "About", href: "/about", icon: <Info className="mr-2 h-4 w-4" /> },
                { id: "services", label: "Services", href: "/services", icon: <Wrench className="mr-2 h-4 w-4" /> },
                { id: "portfolio", label: "Portfolio", href: "/portfolio", icon: <Briefcase className="mr-2 h-4 w-4" /> },
                { id: "blog", label: "Blog", href: "/blog", icon: <FileText className="mr-2 h-4 w-4" /> },
                { id: "contact", label: "Contact", href: "/contact", icon: <Mail className="mr-2 h-4 w-4" /> },
            ]
        },
        {
            group: "Demos",
            commands: [
                { id: "demo-electrician", label: "Electrician Demo", href: "/demos/electrician-greek", icon: <Layout className="mr-2 h-4 w-4" /> },
                { id: "demo-restaurant", label: "Restaurant Demo", href: "/demos/restaurant-greek", icon: <Layout className="mr-2 h-4 w-4" /> },
                { id: "demo-cafe", label: "Cafe Demo", href: "/demos/cafe-greek", icon: <Layout className="mr-2 h-4 w-4" /> },
                { id: "demo-tutoring", label: "Tutoring Demo", href: "/demos/tutoring-greek", icon: <Layout className="mr-2 h-4 w-4" /> },
            ]
        }
    ];

    // Filter results
    const filteredResults = query ? results.map(group => ({
        ...group,
        commands: group.commands.filter(cmd =>
            cmd.label.toLowerCase().includes(query.toLowerCase())
        )
    })).filter(group => group.commands.length > 0) : [];

    return { results: filteredResults, query, setQuery, isLoading: false };
}


export function CommandMenu({ isOpen, onOpenChange, searchAll = false }) {
    const navigate = useNavigate();
    const { results, query, setQuery, isLoading } = useSearch({ searchAll });

    const runCommand = useCallback((command) => {
        onOpenChange(false)
        command()
    }, [onOpenChange]);

    const safeResults = results || [];

    return (
        <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
            <CommandInput
                placeholder={searchAll ? "Search all site content..." : "Search articles and projects..."}
                value={query}
                onValueChange={setQuery}
            />
            <CommandList>
                {isLoading && <CommandEmpty>Loading...</CommandEmpty>}

                {!isLoading && query && (
                    <CommandGroup heading="AI Assistant">
                        <CommandItem
                            key="ask-ai"
                            value={`ask-ai-${query}`}
                            onSelect={() => console.log("AI not implemented in demo")}
                            className="cursor-pointer"
                        >
                            <Bot className="mr-2 h-4 w-4" />
                            <span>Ask GM-Bot: "{query}"</span>
                        </CommandItem>
                    </CommandGroup>
                )}

                {!isLoading && query && safeResults.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}

                {!isLoading && safeResults.length > 0 && (
                    safeResults.map(({ group, commands }) => (
                        <CommandGroup key={group} heading={group}>
                            {commands.map((command) => (
                                <CommandItem
                                    key={command.id}
                                    value={`${group}-${command.label}`}
                                    onSelect={() => runCommand(() => navigate(command.href))}
                                    className="cursor-pointer"
                                >
                                    {command.icon}
                                    <span>{command.label}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))
                )}
            </CommandList>
        </CommandDialog>
    )
}
