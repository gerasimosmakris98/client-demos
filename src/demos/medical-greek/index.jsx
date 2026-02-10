import React, { useEffect } from 'react';

const MedicalDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-teal-50 min-h-screen text-teal-900 p-10 font-sans flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-teal-800">GM MEDICAL</h1>
            <p className="text-2xl md:text-3xl text-slate-500 font-medium max-w-2xl leading-normal">
                Advanced Care. Compassionate Staff. <br /> <span className="text-teal-600 font-bold mt-4 block">COMING SOON</span>
            </p>
        </div>
    );
};

export default MedicalDemo;
