import React, { useEffect } from 'react';

const RealEstateDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-amber-100 p-10 font-serif flex flex-col items-center justify-center text-center border-l-8 border-r-8 border-amber-600">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-widest text-amber-600">GM ESTATES</h1>
            <p className="text-2xl md:text-3xl text-white font-light italic max-w-2xl leading-normal">
                Luxury Living Redefined. <br /> <span className="text-amber-600 not-italic font-bold mt-4 block">COMING SOON</span>
            </p>
        </div>
    );
};

export default RealEstateDemo;
