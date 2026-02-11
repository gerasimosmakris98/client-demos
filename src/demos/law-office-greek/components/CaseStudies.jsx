import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const CaseStudies = ({ t }) => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
                    <div>
                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">{t.caseStudies.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2">{t.caseStudies.title}</h2>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {t.caseStudies.list.map((c, i) => (
                        <div key={i} className="group p-6 md:p-8 border border-slate-700 hover:border-indigo-500 hover:bg-white/5 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center rounded-xl">
                            <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-indigo-600 transition-colors shrink-0">
                                <FileText size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold mt-1 group-hover:text-indigo-300 transition-colors">{c.title}</h3>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Result</p>
                                    <p className="text-emerald-400 font-bold">{c.result}</p>
                                </div>
                                <div className="w-10 h-10 border border-slate-600 flex items-center justify-center group-hover:border-indigo-400 group-hover:text-indigo-400 transition-colors rounded-lg">
                                    <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
