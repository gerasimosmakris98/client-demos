import React from 'react';
import { SystemPageLogo } from './SystemPageLogo';

export function LoadingScreen({ title = "", message = "" }) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0c1122] p-4 text-center">
            <div className="flex w-full max-w-lg flex-col items-center justify-center gap-8">
                <SystemPageLogo isLoading={true} />
                {(title || message) && (
                    <div className="space-y-3">
                        {title && <h1 className="text-2xl font-black tracking-tight text-white">{title}</h1>}
                        {message && <p className="text-slate-400 text-sm font-medium">{message}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
