import React from 'react';

const LoadingDots = () => (
    <div className="flex space-x-1 justify-center items-center">
        <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-1.5 w-1.5 bg-current rounded-full animate-bounce"></div>
    </div>
);

export function SystemPageLogo({ className = "", isLoading = false }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className={`font-serif text-6xl font-bold text-white/80 ${className}`}>
                GM
            </div>
            {isLoading && <LoadingDots />}
        </div>
    );
}
