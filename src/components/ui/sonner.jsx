
"use client"

// import { useTheme } from "next-themes" // Removed unused import
import { Toaster as Sonner } from "sonner"

// Mock useTheme for now, or install next-themes if needed.
// g-makris uses next-themes. 
// For client-demos, I can just default to 'system' or 'dark'.
const useThemeMock = () => ({ theme: 'dark' });

const Toaster = ({ ...props }) => {
    const { theme = "system" } = useThemeMock()

    return (
        <Sonner
            theme={theme}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
