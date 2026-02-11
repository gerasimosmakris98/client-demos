import React from 'react';
import { Link } from 'react-router-dom';
import { SystemPageLogo } from '../components/common/SystemPageLogo';

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0c1122] p-4 text-center">
            <div className="flex w-full max-w-lg flex-col items-center justify-center gap-8">
                <SystemPageLogo />
                <div className="space-y-3">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase">404 - Page Not Found</h1>
                    <p className="text-slate-400 text-base font-medium">
                        The page you are looking for doesn't exist or has been moved to a new destination.
                    </p>
                </div>
                <Link
                    to="/"
                    className="mt-4 px-8 py-4 bg-white text-gray-900 rounded-2xl font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-2xl shadow-white/5"
                >
                    Return to Dashboard
                </Link>
            </div>
        </div>
    );
}
