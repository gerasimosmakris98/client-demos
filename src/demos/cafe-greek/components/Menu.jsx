import React from 'react';

const highlights = [
    {
        title: 'Espresso Blend',
        desc: 'Μοναδικό χαρμάνι 100% Arabica από Βραζιλία και Αιθιοπία.',
        price: '€ 2.50'
    },
    {
        title: 'Brunch Special',
        desc: 'Αυγά Benedict σε φρεσκοψημένο ψωμί brioche.',
        price: '€ 8.00'
    },
    {
        title: 'Signature Cocktails',
        desc: 'Χειροποίητα cocktails για τα βράδια σας.',
        price: 'από € 9.00'
    }
];

const CafeMenu = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-stone-900">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl text-center mb-12 font-playfair text-[#d4a373] drop-shadow-md">
                    {t.menu.title}
                </h2>

                <div className="glass-panel p-6 md:p-12 bg-stone-900/60 backdrop-blur-md border border-[#d4a373]/20 shadow-2xl rounded-2xl">
                    <div className="grid gap-8">
                        {t.menu.items.map((item, index) => (
                            <div key={index} className={`flex justify-between items-center pb-6 ${index !== t.menu.items.length - 1 ? 'border-b border-[#d4a373]/30 border-dashed' : ''}`}>
                                <div>
                                    <h3 className="text-xl md:text-2xl mb-2 text-white font-playfair">{item.title}</h3>
                                    <p className="text-stone-400 italic text-sm md:text-base">{item.desc}</p>
                                </div>
                                <div className="text-lg md:text-xl font-bold text-[#d4a373] whitespace-nowrap ml-4">
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CafeMenu;
