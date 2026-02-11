import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('app-language');
        return saved || 'en';
    });

    useEffect(() => {
        localStorage.setItem('app-language', language);
        document.documentElement.lang = language;
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: (key, translations) => translations[language] || translations['en'] || key
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
