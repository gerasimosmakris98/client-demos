import React, { useEffect } from 'react';

const ElectricianDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-900 min-h-screen text-orange-500 p-10 font-sans flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white">GM <span className="text-orange-500">ELECTRIC</span></h1>
            <p className="text-2xl md:text-4xl text-slate-300 font-bold max-w-2xl leading-normal">
                POWERING YOUR WORLD <br /> <span className="text-orange-500">COMING SOON</span>
            </p>
        </div>
    );
};

export default ElectricianDemo;
