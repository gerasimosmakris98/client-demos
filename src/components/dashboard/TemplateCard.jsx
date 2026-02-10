import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Heart } from 'lucide-react';

const TemplateCard = ({ demo }) => {
    return (
        <Link
            to={demo.path}
            className="group block bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 hover:shadow-2xl transition-all duration-300"
        >
            {/* Preview Area */}
            <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity">
                {/* Placeholder Gradient if no image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient || 'from-blue-900 to-slate-900'}`} />
                <span className="relative z-10 font-playfair font-bold text-3xl text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-widest">
                    {demo.shortName || 'Demo'}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-green-500 uppercase tracking-wider">{demo.category}</span>
                    <div className="flex flex-col items-end text-xs text-gray-500 gap-1">
                        <span className="flex items-center gap-1"><Heart size={12} /> 0 reactions</span>
                        <span className="flex items-center gap-1"><MessageSquare size={12} /> 0 comments</span>
                        <span className="opacity-60">{demo.date || 'Just now'}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{demo.title}</h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {demo.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {demo.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-400 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default TemplateCard;
