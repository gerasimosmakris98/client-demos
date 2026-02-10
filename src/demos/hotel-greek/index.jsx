import React, { useEffect } from 'react';

const HotelDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#1a1814] min-h-screen text-[#d4cbb8] p-10 font-serif flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-9xl font-medium mb-8 tracking-widest">GM HOTEL</h1>
            <p className="text-xl md:text-2xl text-[#d4cbb8]/60 font-light tracking-widest max-w-2xl leading-loose uppercase">
                A Sanctuary of Calm <br /> <span className="text-[#d4cbb8] font-bold mt-8 block border-t border-[#d4cbb8]/20 pt-8">Opening Soon</span>
            </p>
        </div>
    );
};

export default HotelDemo;
