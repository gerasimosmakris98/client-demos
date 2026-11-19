import React from 'react';

const images = [
    "/demo-art/cafe-1.svg",
    "/demo-art/cafe-2.svg",
    "/demo-art/cafe-3.svg"
];

const CafeGallery = ({ t }) => {
    return (
        <section className="bg-stone-950 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 text-center">
                <span className="text-[#d4a373] font-bold tracking-widest uppercase text-sm">{t.gallery.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-2">{t.gallery.title}</h2>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {images.map((img, index) => (
                    <div key={index} className="h-[300px] md:h-[400px] overflow-hidden group">
                        <img
                            src={img}
                            alt="Cafe vibe"
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 cursor-pointer"
                        />
                    </div>
                ))}
            </section>
        </section>
    );
};

export default CafeGallery;
