import React from 'react';
import { ArrowUpRight, BarChart3, Calendar, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple Sparkline component for the overview
const Sparkline = ({ data, color }) => (
    <div className="flex items-end gap-0.5 h-8 w-16">
        {data.map((d, i) => (
            <div key={i} className="flex-1 rounded-sm opacity-80"
                style={{ height: `${(d / Math.max(...data)) * 100}%`, backgroundColor: color }} />
        ))}
    </div>
);

const OverviewView = ({ stats, recentItems, kpis, c, brandName, brandLogo, role, roles, t }) => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? t.greeting.m : hour < 18 ? t.greeting.a : t.greeting.e;
    const roleName = roles?.find(r => r.id === role)?.label || role;

    return (
        <div className="space-y-5">
            {/* Welcome banner */}
            <div className={`rounded-2xl p-6 md:p-8 text-white relative overflow-hidden bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <p className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2">{greeting}</p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-1">Gerasimos! 👋</h2>
                        <p className="text-white/70 text-sm font-medium">
                            <span className="font-bold text-white/90 capitalize">{roleName}</span> {t.dashboard} — {brandName}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
                        <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl px-4 py-3.5 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-white/10 shadow-xl">
                            <Calendar size={16} /> {t.schedule}
                        </button>
                        <button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-white/90 px-4 py-3.5 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl">
                            <Zap size={16} fill="currentColor" /> {t.quickAction}
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
                {stats.map((stat, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all group cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em] leading-tight">{stat.label}</span>
                            <Sparkline color={c.hex} data={[3, 5, 4, 7, 6, 8 + i, 7 + i, 9, 8 + i, 6, 8 + i, 10 + i]} />
                        </div>
                        <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                        <div className={`text-[10px] mt-2 font-bold flex items-center gap-1.5 ${stat.trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            <div className={`p-0.5 rounded ${stat.trend > 0 ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                                <ArrowUpRight size={10} className={stat.trend < 0 ? 'rotate-90' : ''} />
                            </div>
                            {stat.trend > 0 ? '+' : ''}{stat.trend}%
                            <span className="text-slate-600 font-normal ml-1 tracking-tight">vs last mo.</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* KPIs */}
            {kpis.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    {kpis.map((kpi, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }}
                            className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{kpi.label}</span>
                                <span className={`text-xs font-black ${c.text}`}>{kpi.value}</span>
                            </div>
                            <div className="h-2 bg-[#141c32] rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${kpi.progress || 0}%` }} transition={{ duration: 1.2, ease: 'easeOut' }}
                                    className={`h-full bg-gradient-to-r ${c.gradient} rounded-full`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Chart + Recent */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 md:gap-4 pb-4">
                <div className="xl:col-span-3 bg-[#0e1425] p-5 md:p-8 rounded-2xl border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h3 className="text-white font-bold flex items-center gap-2 tracking-tight"><BarChart3 size={18} className={c.text} /> {t.performance}</h3>
                        <div className="flex gap-1 bg-black/20 rounded-xl p-1 shrink-0 border border-white/5">
                            {['7D', '1M', '1Y'].map(p => <button key={p} className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${p === '1M' ? `bg-white text-black shadow-lg` : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>{p}</button>)}
                        </div>
                    </div>
                    <div className="h-56 md:h-64 flex items-end gap-1.5 md:gap-2">
                        {[30, 45, 35, 60, 55, 75, 70, 85, 80, 60, 75, 90].map((h, i) => (
                            <div key={i} className="flex-1 group relative h-full flex flex-col justify-end">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className={`w-full bg-gradient-to-t ${c.gradient} rounded-t-lg opacity-40 group-hover:opacity-100 transition-all duration-300 relative`}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        {h}%
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-[9px] text-slate-600 font-black uppercase tracking-widest px-1">
                        {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => <span key={m}>{m}</span>)}
                    </div>
                </div>

                <div className="xl:col-span-2 bg-[#0e1425] p-5 md:p-8 rounded-2xl border border-white/[0.06] h-full">
                    <h3 className="text-white font-bold mb-6 text-sm flex items-center gap-2 tracking-tight"><Clock size={16} className={c.text} /> {t.recentActivity}</h3>
                    <div className="space-y-2">
                        {(recentItems.length > 0 ? recentItems : [
                            { title: 'New booking #204', subtitle: 'Client: Maria K.', status: 'Completed', time: '2m ago' },
                            { title: 'Payment received', subtitle: 'Invoice #1089', status: 'Completed', time: '15m ago' },
                            { title: 'New review', subtitle: '5 stars from John', status: 'Pending', time: '1h ago' },
                            { title: 'System update', subtitle: 'v2.4.0 deployed', status: 'Completed', time: '3h ago' },
                            { title: 'Server backup', subtitle: 'Automated', status: 'Completed', time: '5h ago' },
                        ]).map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all group cursor-pointer">
                                <div className={`shrink-0 w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse' : 'bg-slate-700'}`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-xs font-bold truncate group-hover:text-white transition-colors tracking-tight">{item.title}</p>
                                    <p className="text-slate-500 text-[10px] truncate font-medium">{item.subtitle}</p>
                                </div>
                                <span className="text-[10px] text-slate-600 font-black tracking-widest uppercase">{item.time}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-[0.2em] transition-all text-slate-400 hover:text-white">
                        View Detailed Logs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OverviewView;
