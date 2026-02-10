
import { Eye, Text, ZapOff, BookOpen, Contrast } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Separator } from '../ui/separator';
// import { ThemeToggle } from './ThemeToggle'; // TODO: Create ThemeToggle
import { useSettings } from '../../context/SettingsContext';

const ThemeToggle = () => null; // Stub for now

export function AccessibilityToggle() {
    const { activeAccessibilityModes, handleAccessibilityModeChange } = useSettings();

    const accessibilityOptions = [
        { mode: 'default', icon: <Eye className="h-4 w-4 mr-2" />, label: 'Default View' },
        { mode: 'bigger-fonts', icon: <Text className="h-4 w-4 mr-2" />, label: 'Bigger Fonts' },
        { mode: 'reduce-motion', icon: <ZapOff className="h-4 w-4 mr-2" />, label: 'Reduce Motion' },
        { mode: 'reading-mode', icon: <BookOpen className="h-4 w-4 mr-2" />, label: 'Reading Mode' },
        { mode: 'high-contrast', icon: <Contrast className="h-4 w-4 mr-2" />, label: 'High Contrast' },
    ];

    return (
        <div className="w-full">
            <p className="px-2 py-1.5 text-sm font-semibold">Accessibility</p>
            {accessibilityOptions.map(({ mode, icon, label }) => (
                <button
                    key={mode}
                    onClick={() => handleAccessibilityModeChange(mode)}
                    className={cn(
                        "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
                        activeAccessibilityModes?.has(mode) && "bg-accent"
                    )}
                >
                    {icon} {label}
                </button>
            ))}
            <Separator className="my-1" />
            <p className="px-2 py-1.5 text-sm font-semibold">Theme</p>
            <ThemeToggle />
        </div>
    );
}
