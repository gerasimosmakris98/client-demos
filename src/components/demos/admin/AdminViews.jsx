import React from 'react';
import { Search, Users, DollarSign, CreditCard, FileText, BarChart3, GitBranch, GitPullRequest, Globe, Terminal, GitCommit, Palette, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CustomersView = ({ c, brandName, t }) => (
    <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0e1425] p-4 rounded-2xl border border-white/[0.06]">
            <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input type="text" placeholder={`${t.search} customers...`} className="w-full bg-[#080c16] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20" />
            </div>
            <button className={`bg-gradient-to-r ${c.gradient} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg ${c.shadow}`}>
                <Users size={16} /> {t.add} Customer
            </button>
        </div>
        <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#0a0e1a] text-slate-500 text-[10px] uppercase tracking-wider">
                        <tr>
                            <th className="p-4 pl-6">Customer</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Last Visit</th>
                            <th className="p-4 text-right pr-6">Spent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                        {['Maria K.', 'John D.', 'Elena P.', 'George S.', 'Anna M.', 'Nikos T.'].map((name, i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 pl-6 flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-xs font-bold opacity-80`}>{name.charAt(0)}</div>
                                    <div>
                                        <span className="text-white font-semibold text-sm">{name}</span>
                                        <p className="text-slate-500 text-[10px]">{name.toLowerCase().replace(' ', '.')}@email.com</p>
                                    </div>
                                </td>
                                <td className="p-4"><span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${i % 3 === 2 ? 'bg-slate-800 text-slate-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{i % 3 === 2 ? 'Inactive' : 'Active'}</span></td>
                                <td className="p-4 text-slate-500 text-xs">{i + 1}d ago</td>
                                <td className="p-4 text-right pr-6 text-white font-bold">€{(150 + i * 47)}</td>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
                { label: 'Total Revenue', value: '€45,230', sub: '75% of goal', progress: 75, icon: DollarSign },
                { label: 'Avg. Transaction', value: '€85.40', sub: '+5.2% vs last month', progress: 85, icon: CreditCard },
                { label: 'Outstanding', value: '€3,240', sub: '14 pending invoices', progress: 25, icon: FileText },
            ].map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06]">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{item.label}</p>
                            <div className={`p-2 rounded-lg ${c.bg10} ${c.text}`}><Icon size={15} /></div>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-1">{item.value}</h3>
                        <div className="h-1.5 bg-[#141c32] rounded-full overflow-hidden mt-3 mb-2">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${item.progress}%` }} transition={{ duration: 1, ease: 'easeOut' }}
                                className={`h-full bg-gradient-to-r ${c.gradient} rounded-full`} />
                        </div>
                        <p className={`text-xs ${c.text} font-medium`}>{item.sub}</p>
                    </motion.div>
                );
            })}
        </div>
        <div className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06]">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2"><BarChart3 size={17} className={c.text} /> Monthly Revenue</h3>
                <span className="text-emerald-400 text-xs font-bold">+18.3% YoY</span>
            </div>
            <div className="h-52 flex items-end gap-2">
                {[3200, 4500, 3800, 6100, 5500, 7200, 6800, 8100, 7500, 5900, 7200, 8500].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                        <span className="text-[8px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">€{(v / 1000).toFixed(1)}k</span>
                        <div className={`w-full bg-gradient-to-t ${c.gradient} rounded-t opacity-50 group-hover:opacity-100 transition-all duration-200`} style={{ height: `${(v / 8500) * 100}%` }} />
                        <span className="text-[8px] text-slate-600">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const GitView = ({ c, brandName, t }) => (
    <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
                { label: 'Active Branches', value: '8', sub: 'main, dev, feat/ui...', icon: GitBranch },
                { label: 'Pending PRs', value: '3', sub: 'Needs review', icon: GitPullRequest },
                { label: 'Last Deploy', value: '4m ago', sub: 'Production', icon: Globe },
            ].map((item, i) => {
                const Icon = item.icon;
                return (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                            <Icon size={16} className={c.text} />
                        </div>
                        <div className="text-2xl font-black text-white">{item.value}</div>
                        <div className="text-slate-500 text-xs mt-1">{item.sub}</div>
                    </motion.div>
                );
            })}
        </div>

        <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
                <h3 className="text-white font-bold flex items-center gap-2"><Terminal size={17} className={c.text} /> Recent Commits</h3>
                <div className="flex gap-2">
                    <span className="text-xs text-slate-500 bg-black/20 px-2 py-1 rounded font-mono">branch: main</span>
                </div>
            </div>
            <div className="divide-y divide-white/[0.04]">
                {[
                    { msg: 'feat: updated dashboard layout', author: 'Gerasimos M.', time: '10m ago', hash: '8a2b9c1' },
                    { msg: 'fix: mobile navigation overlap', author: 'Gerasimos M.', time: '45m ago', hash: '7d3e4f2' },
                    { msg: 'chore: updated dependencies', author: 'Bot', time: '2h ago', hash: '3c1a2b5' },
                    { msg: 'docs: added installation guide', author: 'Elena P.', time: '5h ago', hash: '9e8d7a4' },
                ].map((commit, i) => (
                    <div key={i} className="p-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-slate-400">
                            <GitCommit size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate group-hover:text-blue-400 transition-colors cursor-pointer">{commit.msg}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs text-slate-500">{commit.author}</span>
                                <span className="text-[10px] text-slate-600">•</span>
                                <span className="text-xs text-slate-500">{commit.time}</span>
                            </div>
                        </div>
                        <div className="font-mono text-xs text-slate-500 bg-black/20 px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {commit.hash}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-3 bg-black/20 border-t border-white/[0.06] text-center">
                <button className="text-xs text-slate-400 hover:text-white font-medium transition-colors">View all commits</button>
            </div>
        </div>
    </div>
);

export const ActivityView = ({ c, brandName, t }) => (
    <div className="bg-[#080c16] rounded-2xl border border-white/[0.06] font-mono text-sm overflow-hidden">
        <div className="h-10 bg-[#0a0e1a] border-b border-white/[0.06] flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-500 text-xs ml-3">{brandName.toLowerCase().replace(/\s/g, '_')}_logs.log</span>
            <div className="ml-auto flex gap-2">
                <span className={`text-[9px] px-2 py-0.5 rounded-full ${c.bg10} ${c.text} font-bold`}>{t.live}</span>
            </div>
        </div>
        <div className="p-4 space-y-1 h-[500px] overflow-y-auto">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="flex gap-3 text-xs py-0.5 hover:bg-white/[0.02] px-1 rounded">
                    <span className="text-slate-600 shrink-0 tabular-nums">2026-02-10 14:3{Math.floor(i / 10)}:{String(i % 10).padStart(2, '0')}</span>
                    <span className={i % 4 === 0 ? 'text-blue-400' : i % 5 === 0 ? 'text-amber-400' : i % 7 === 0 ? `${c.text}` : 'text-slate-400'}>
                        {i % 4 === 0 ? `[INFO] New customer session started (IP: 192.168.${i}.${i + 1})` :
                            i % 5 === 0 ? `[WARN] API response time elevated (${200 + i * 5}ms)` :
                                i % 7 === 0 ? `[SUCCESS] Payment processed #${4000 + i}` :
                                    `[DEBUG] Component rendered <${brandName.replace(/\s/g, '')}Dashboard />`}
                    </span>
                </div>
            ))}
            <div className="flex gap-3 animate-pulse text-xs px-1">
                <span className="text-slate-600 tabular-nums">2026-02-10 14:32:21</span>
                <span className="text-emerald-400">▊</span>
            </div>
        </div>
    </div>
);

export const SettingsView = ({ c, brandName, accentColor, colorMap, t }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#0e1425] p-6 rounded-2xl border border-white/[0.06]">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2"><Palette size={17} className={c.text} /> Branding</h3>
            <div className="space-y-5">
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Business Name</label>
                    <input defaultValue={brandName} className="w-full bg-[#080c16] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20 transition-colors" />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Logo Text</label>
                    <input defaultValue="GM" className="w-full bg-[#080c16] border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20 transition-colors" />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Primary Color</label>
                    <div className="grid grid-cols-6 gap-2">
                        {Object.entries(colorMap).map(([color, vals]) => (
                            <div key={color} className={`w-full aspect-square rounded-xl cursor-pointer border-2 transition-all bg-gradient-to-br ${vals.gradient} ${color === accentColor ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105 hover:border-white/20'}`} title={color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="space-y-4">
            <div className="bg-[#0e1425] p-6 rounded-2xl border border-white/[0.06]">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2"><ShieldCheck size={17} className={c.text} /> Security</h3>
                <div className="space-y-4">
                    {[
                        { item: 'Two-Factor Auth', on: true },
                        { item: 'Force SSL/TLS', on: true },
                        { item: 'IP Whitelisting', on: false },
                        { item: 'API Rate Limiting', on: false },
                    ].map(({ item, on }, i) => (
                        <div key={i} className="flex items-center justify-between py-1">
                            <span className="text-slate-300 text-sm">{item}</span>
                            <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${on ? `bg-gradient-to-r ${c.gradient}` : 'bg-slate-700'}`}>
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${on ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#0e1425] p-6 rounded-2xl border border-white/[0.06]">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Globe size={17} className={c.text} /> Notifications</h3>
                <div className="space-y-4">
                    {['Email Alerts', 'Push Notifications', 'Weekly Report'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-1">
                            <span className="text-slate-300 text-sm">{item}</span>
                            <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${i < 2 ? `bg-gradient-to-r ${c.gradient}` : 'bg-slate-700'}`}>
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${i < 2 ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
