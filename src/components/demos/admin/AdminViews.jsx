import React from 'react';
import { Search, Users, DollarSign, CreditCard, FileText, BarChart3, GitBranch, GitPullRequest, Globe, Terminal, GitCommit, Palette, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CustomersView = ({ c, brandName, t }) => (
    <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06]">
            <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input type="text" placeholder={`${t.search} customers...`} className="w-full bg-[#080c16] border border-white/10 text-white pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-white/20 transition-all font-medium" />
            </div>
            <button className={`bg-gradient-to-r ${c.gradient} text-white px-6 py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 shrink-0 shadow-lg ${c.shadow} hover:opacity-90 transition-all`}>
                <Users size={16} /> {t.add} Customer
            </button>
        </div>
        <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden shadow-xl">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-sm whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#0a0e1a] text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">
                        <tr>
                            <th className="p-5 pl-8">Customer</th>
                            <th className="p-5">Status</th>
                            <th className="p-5">Last Visit</th>
                            <th className="p-5 text-right pr-8">Spent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                        {['Maria K.', 'John D.', 'Elena P.', 'George S.', 'Anna M.', 'Nikos T.'].map((name, i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="p-5 pl-8 flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-[12px] font-black shadow-lg transition-transform group-hover:scale-110`}>{name.charAt(0)}</div>
                                    <div>
                                        <span className="text-white font-bold text-sm block group-hover:text-white transition-colors">{name}</span>
                                        <p className="text-slate-500 text-[11px] font-medium tracking-tight">{name.toLowerCase().replace(' ', '.')}@email.com</p>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${i % 3 === 2 ? 'bg-slate-800 text-slate-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                        {i % 3 === 2 ? 'Inactive' : 'Active'}
                                    </span>
                                </td>
                                <td className="p-5 text-slate-500 text-xs font-bold tracking-tight">{i + 1} days ago</td>
                                <td className="p-5 text-right pr-8 text-white font-black text-base">€{(150 + i * 47)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export const RevenueView = ({ c, brandName, t }) => (
    <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
            {[
                { label: 'Total Revenue', value: '€45,230', sub: '75% of monthly goal', progress: 75, icon: DollarSign },
                { label: 'Avg. Transaction', value: '€85.40', sub: '+5.2% vs last month', progress: 85, icon: CreditCard },
                { label: 'Outstanding', value: '€3,240', sub: '14 pending invoices', progress: 25, icon: FileText },
            ].map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className="bg-[#0e1425] p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.02]">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</p>
                            <div className={`p-2.5 rounded-xl ${c.bg10} ${c.text} group-hover:scale-110 transition-transform`}><Icon size={16} /></div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{item.value}</h3>
                        <div className="h-2 bg-[#141c32] rounded-full overflow-hidden mt-4 mb-3">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${item.progress}%` }} transition={{ duration: 1.2, ease: 'easeOut' }}
                                className={`h-full bg-gradient-to-r ${c.gradient} rounded-full`} />
                        </div>
                        <p className={`text-xs ${c.text} font-bold tracking-tight`}>{item.sub}</p>
                    </motion.div>
                );
            })}
        </div>
        <div className="bg-[#0e1425] p-6 md:p-8 rounded-2xl border border-white/[0.06] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h3 className="text-white font-black flex items-center gap-2 tracking-tight"><BarChart3 size={18} className={c.text} /> Monthly Revenue</h3>
                <span className="text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-lg">+18.3% YoY</span>
            </div>
            <div className="h-48 md:h-64 flex items-end gap-2 md:gap-3">
                {[3200, 4500, 3800, 6100, 5500, 7200, 6800, 8100, 7500, 5900, 7200, 8500].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative h-full">
                        <div className="absolute -top-6 text-[9px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">€{(v / 1000).toFixed(1)}k</div>
                        <div className={`w-full bg-gradient-to-t ${c.gradient} rounded-t-lg opacity-40 group-hover:opacity-100 transition-all duration-300 relative`} style={{ height: `${(v / 8500) * 100}%` }}>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const GitView = ({ c, brandName, t }) => (
    <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
                { label: 'Active Branches', value: '8', sub: 'main, dev, feat/ui...', icon: GitBranch },
                { label: 'Pending PRs', value: '3', sub: 'Needs review', icon: GitPullRequest },
                { label: 'Last Deploy', value: '4m ago', sub: 'v2.3.4 Production', icon: Globe },
            ].map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className="bg-[#0e1425] p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.02]">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
                            <Icon size={17} className={`${c.text} group-hover:scale-110 transition-transform`} />
                        </div>
                        <div className="text-3xl font-black text-white tracking-tight">{item.value}</div>
                        <div className="text-slate-500 text-[11px] font-bold mt-2 tracking-tight">{item.sub}</div>
                    </motion.div>
                );
            })}
        </div>

        <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden shadow-xl">
            <div className="p-6 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-white font-black flex items-center gap-2 tracking-tight"><Terminal size={18} className={c.text} /> Recent Commits</h3>
                <div className="flex gap-2">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.1em] bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">branch: main</span>
                </div>
            </div>
            <div className="divide-y divide-white/[0.04]">
                {[
                    { msg: 'feat: updated dashboard layout', author: 'Gerasimos M.', time: '10m ago', hash: '8a2b9c1' },
                    { msg: 'fix: mobile navigation overlap', author: 'Gerasimos M.', time: '45m ago', hash: '7d3e4f2' },
                    { msg: 'chore: updated dependencies', author: 'Bot', time: '2h ago', hash: '3c1a2b5' },
                    { msg: 'docs: added installation guide', author: 'Elena P.', time: '5h ago', hash: '9e8d7a4' },
                ].map((commit, i) => (
                    <div key={i} className="p-5 flex items-center gap-5 hover:bg-white/[0.02] transition-colors group cursor-pointer relative overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                            <GitCommit size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-bold truncate group-hover:text-white transition-colors tracking-tight">{commit.msg}</p>
                            <div className="flex items-center gap-2.5 mt-1">
                                <span className="text-xs text-slate-500 font-bold tracking-tight">{commit.author}</span>
                                <span className="text-slate-800 text-[10px]">•</span>
                                <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{commit.time}</span>
                            </div>
                        </div>
                        <div className="hidden sm:block font-mono text-[10px] text-slate-600 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {commit.hash}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-black/20 border-t border-white/[0.06] text-center">
                <button className="text-[10px] text-slate-500 hover:text-white font-black uppercase tracking-[0.2em] transition-all">View Full Repository</button>
            </div>
        </div>
    </div>
);

export const ActivityView = ({ c, brandName, t }) => (
    <div className="bg-[#080c16] rounded-2xl border border-white/[0.06] font-mono text-sm overflow-hidden shadow-2xl relative">
        <div className="h-12 bg-[#0a0e1a] border-b border-white/[0.06] flex items-center px-5 gap-3">
            <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/40 border border-red-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40 border border-amber-500/20" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/40 border border-green-500/20" />
            </div>
            <span className="text-slate-600 text-[11px] ml-4 font-bold tracking-tight">{brandName.toLowerCase().replace(/\s/g, '_')}_system.log</span>
            <div className="ml-auto flex gap-3 items-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-black tracking-widest uppercase">{t.live}</span>
                </div>
            </div>
        </div>
        <div className="p-4 md:p-5 space-y-2 h-[350px] md:h-[500px] overflow-y-auto custom-scrollbar bg-black/5">
            {[...Array(24)].map((_, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-[11px] py-1 hover:bg-white/5 px-2 rounded-lg transition-colors group">
                    <span className="text-slate-600 shrink-0 tabular-nums font-bold tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">2026-02-11 12:0{Math.floor(i / 10)}:{String(i % 59).padStart(2, '0')}</span>
                    <span className={i % 4 === 0 ? 'text-blue-400/80' : i % 5 === 0 ? 'text-amber-400/80' : i % 7 === 0 ? `${c.text}` : 'text-slate-400'}>
                        {i % 4 === 0 ? `[INFO] New secure handshake established (TLS v1.3)` :
                            i % 5 === 0 ? `[WARN] High latency detected in auth-service node-2 (${340 + i * 2}ms)` :
                                i % 7 === 0 ? `[SUCCESS] Database transaction committed: #tx_${8900 + i}` :
                                    `[DEBUG] State synchronized with <${brandName.replace(/\s/g, '')}Client />`}
                    </span>
                </div>
            ))}
            <div className="flex gap-3 animate-pulse text-xs px-2 pt-2">
                <span className="text-slate-600 tabular-nums">2026-02-11 12:01:10</span>
                <span className={`${c.text} opacity-80`}>▊</span>
            </div>
        </div>
    </div>
);

export const SettingsView = ({ c, brandName, accentColor, colorMap, t }) => (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-8">
        <div className="bg-[#0e1425] p-6 md:p-8 rounded-2xl border border-white/[0.06] shadow-xl">
            <h3 className="text-white font-black mb-8 flex items-center gap-3 tracking-tight"><Palette size={19} className={c.text} /> Admin Aesthetics</h3>
            <div className="space-y-6">
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black block mb-3">Enterprise Identity</label>
                    <input defaultValue={brandName} className="w-full bg-[#080c16] border border-white/10 text-white px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:border-white/20 transition-all font-bold tracking-tight shadow-inner" />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black block mb-3">Accent Configuration</label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                        {Object.entries(colorMap).map(([color, vals]) => (
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={color} className={`aspect-square rounded-xl cursor-pointer border-2 transition-all bg-gradient-to-br ${vals.gradient} ${color === accentColor ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-transparent hover:border-white/20'}`} title={color} />
                        ))}
                    </div>
                </div>
                <div className="pt-4">
                    <button className={`w-full bg-gradient-to-r ${c.gradient} text-white py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] shadow-xl ${c.shadow} hover:opacity-90 transition-all`}>
                        Save Visual Updates
                    </button>
                </div>
            </div>
        </div>
        <div className="space-y-4">
            <div className="bg-[#0e1425] p-6 md:p-8 rounded-2xl border border-white/[0.06] shadow-xl">
                <h3 className="text-white font-black mb-8 flex items-center gap-3 tracking-tight"><ShieldCheck size={19} className={c.text} /> Security Matrix</h3>
                <div className="space-y-5">
                    {[
                        { item: 'Adaptive MFA Enrollment', on: true },
                        { item: 'Strict Content Security Policy', on: true },
                        { item: 'Real-time Threat Intelligence', on: false },
                        { item: 'Encrypted Log Streaming', on: true },
                    ].map(({ item, on }, i) => (
                        <div key={i} className="flex items-center justify-between py-2 group">
                            <span className="text-slate-300 text-sm font-bold tracking-tight group-hover:text-white transition-colors">{item}</span>
                            <div className={`w-12 h-6.5 rounded-full p-1 cursor-pointer transition-all duration-300 ${on ? `bg-gradient-to-r ${c.gradient} shadow-lg ${c.shadow}` : 'bg-slate-800'}`}>
                                <div className={`w-4.5 h-4.5 rounded-full bg-white shadow-xl transition-transform duration-300 ${on ? 'translate-x-[22px]' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#0e1425] p-6 md:p-8 rounded-2xl border border-white/[0.06] shadow-xl">
                <h3 className="text-white font-black mb-8 flex items-center gap-3 tracking-tight"><Globe size={19} className={c.text} /> Data Sync</h3>
                <div className="space-y-5">
                    {['Automated CDN Invalidation', 'Edge Cache Warmup', 'Global Load Balancer Sync'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 group">
                            <span className="text-slate-300 text-sm font-bold tracking-tight group-hover:text-white transition-colors">{item}</span>
                            <div className={`w-12 h-6.5 rounded-full p-1 cursor-pointer transition-all duration-300 ${i < 2 ? `bg-gradient-to-r ${c.gradient} shadow-lg ${c.shadow}` : 'bg-slate-800'}`}>
                                <div className={`w-4.5 h-4.5 rounded-full bg-white shadow-xl transition-transform duration-300 ${i < 2 ? 'translate-x-[22px]' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
