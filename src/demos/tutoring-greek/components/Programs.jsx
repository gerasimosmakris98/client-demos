import React from 'react';
import { BookOpen, Calculator, GraduationCap, Globe, Cpu, Palette, Music, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const programConfig = [
    {
        icon: <BookOpen className="text-blue-500" size={32} />,
        color: 'bg-blue-50',
        borderColor: 'border-blue-100'
    },
    {
        icon: <Calculator className="text-indigo-500" size={32} />,
        color: 'bg-indigo-50',
        borderColor: 'border-indigo-100'
    },
    {
        icon: <GraduationCap className="text-purple-500" size={32} />,
        color: 'bg-purple-50',
        borderColor: 'border-purple-100'
    },
    {
        icon: <Globe className="text-green-500" size={32} />,
        color: 'bg-green-50',
        borderColor: 'border-green-100'
    },
    {
        icon: <Cpu className="text-orange-500" size={32} />,
        color: 'bg-orange-50',
        borderColor: 'border-orange-100'
    },
    {
        icon: <Palette className="text-pink-500" size={32} />,
        color: 'bg-pink-50',
        borderColor: 'border-pink-100'
    }
];

const Programs = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, index) => {
                        const config = programConfig[index] || programConfig[0];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-2xl border ${config.borderColor} ${config.color} hover:shadow-lg transition-all cursor-pointer group`}
                            >
                                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {config.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Programs;
