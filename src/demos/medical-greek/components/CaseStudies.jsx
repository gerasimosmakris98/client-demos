import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const CaseStudies = () => {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Track Record</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2">Recent Victories</h2>
                    </div>
                    <button className="flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors group">
                        View All Cases <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            cat: "Corporate",
                            title: "Merger Acquisition for Tech Giant",
                            desc: "Navigated complex regulatory hurdles to secure a €50M merger deal.",
                            result: "Success"
                        },
                        {
                            cat: "IP Law",
                            title: "Trademark Defense for Local Brand",
                            desc: "Successfully defended a legacy Greek brand against international infringement.",
                            result: "Won"
                        },
                        {
                            cat: "Real Estate",
                            title: "Commercial Development Dispute",
                            desc: "Resolved a multi-party land use dispute allowing a major development to proceed.",
                            result: "Settled"
                        }
                    ].map((c, i) => (
                        <div key={i} className="group p-8 border border-slate-700 hover:border-indigo-500 hover:bg-white/5 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="p-4 bg-slate-800 rounded-none group-hover:bg-indigo-600 transition-colors">
                                <FileText size={24} />
                            </div>
                            <div className="flex-1">
                                <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">{c.cat}</span>
                                <h3 className="text-2xl font-bold mt-1 group-hover:text-indigo-300 transition-colors">{c.title}</h3>
                                <p className="text-slate-400 mt-2 max-w-2xl">{c.desc}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right hidden md:block">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Result</p>
                                    <p className="text-emerald-400 font-bold">{c.result}</p>
                                </div>
                                <div className="w-10 h-10 border border-slate-600 flex items-center justify-center group-hover:border-indigo-400 group-hover:text-indigo-400 transition-colors">
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
