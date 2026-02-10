import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

const TemplateCard = ({ demo }) => {
    return (
        <Link
            to={demo.path}
            className="group block bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:-translate-y-1"
        >
            {/* Preview Area with real image */}
            <div className="relative h-44 sm:h-48 overflow-hidden">
                {/* Background gradient fallback */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient || 'from-blue-900 to-slate-900'}`} />

                {/* Real thumbnail image */}
                {demo.image && (
                    <img
                        src={demo.image}
                        alt={demo.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                    />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-bold text-green-400 uppercase tracking-wider">
                    {demo.category}
                </div>

                {/* Brand watermark */}
                <span className="absolute bottom-3 right-3 font-playfair font-bold text-xl text-white/10 group-hover:text-white/30 transition-colors uppercase tracking-widest">
                    {demo.shortName || 'Demo'}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-green-400 transition-colors leading-tight">{demo.title}</h3>
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all mt-1 shrink-0 ml-2" />
                </div>

                <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
                    {demo.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                        {demo.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded-full text-[10px] text-gray-400 font-medium">
                                {tag}
                            </span>
                        ))}
                        {demo.tags.length > 2 && (
                            <span className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded-full text-[10px] text-gray-500">+{demo.tags.length - 2}</span>
                        )}
                    </div>
                    <span className="text-[10px] text-gray-600 shrink-0">{demo.date}</span>
                </div>
            </div>
        </Link>
    );
};

export default TemplateCard;
