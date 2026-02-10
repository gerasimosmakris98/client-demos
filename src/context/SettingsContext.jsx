
import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext({});

export function SettingsProvider({ children }) {
    const [maintenanceSettings] = useState({ isActive: false });
    const [activeAccessibilityModes, setActiveAccessibilityModes] = useState(new Set());

    const handleAccessibilityModeChange = (mode) => {
        setActiveAccessibilityModes(prev => {
            const next = new Set(prev);
            if (mode === 'default') {
                next.clear();
            } else if (next.has(mode)) {
                next.delete(mode);
            } else {
                next.add(mode);
            }
            return next;
        });

        // Apply class to HTML for Tailwind
        if (mode === 'high-contrast') {
            document.documentElement.classList.toggle('high-contrast');
        } else if (mode === 'bigger-fonts') {
            document.documentElement.classList.toggle('bigger-fonts');
        }
    };

    return (
        <SettingsContext.Provider value={{ maintenanceSettings, activeAccessibilityModes, handleAccessibilityModeChange }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);
