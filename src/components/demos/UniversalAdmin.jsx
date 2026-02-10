import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, DollarSign, Settings, Bell, Search, Menu,
    TrendingUp, ArrowUpRight, ShieldCheck, Calendar, FileText, Activity,
    Package, BarChart3, ChevronRight, MoreVertical, X, Palette, LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * UniversalAdmin — Fully configurable admin dashboard for any demo
 *
 * Props:
 *   config: {
 *     brandName:      string  ("GM Restaurant")
 *     brandLogo:      string  ("🍽️" or "GM")
 *     accentColor:    string  ("red" | "blue" | "emerald" | "amber" etc.)
 *     roles:          [{ id, label, icon? }]  (e.g. [{ id: 'admin', label: 'Admin' }, { id: 'staff', label: 'Staff' }])
 *     stats:          [{ label, value, trend, icon? }]
 *     recentItems:    [{ title, subtitle, status, amount, time }]
 *     navItems:       [{ id, label, icon }]  (sidebar nav items)
 *     kpis:           [{ label, value, progress }]  (extra KPI bars)
 *   }
 */

const colorMap = {
    red: { bg: 'bg-red-600', bg10: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', shadow: 'shadow-red-500/20', ring: 'focus:ring-red-500/30', hover: 'hover:bg-red-500' },
    blue: { bg: 'bg-blue-600', bg10: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', shadow: 'shadow-blue-500/20', ring: 'focus:ring-blue-500/30', hover: 'hover:bg-blue-500' },
    emerald: { bg: 'bg-emerald-600', bg10: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', shadow: 'shadow-emerald-500/20', ring: 'focus:ring-emerald-500/30', hover: 'hover:bg-emerald-500' },
    amber: { bg: 'bg-amber-600', bg10: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', shadow: 'shadow-amber-500/20', ring: 'focus:ring-amber-500/30', hover: 'hover:bg-amber-500' },
    indigo: { bg: 'bg-indigo-600', bg10: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', shadow: 'shadow-indigo-500/20', ring: 'focus:ring-indigo-500/30', hover: 'hover:bg-indigo-500' },
    teal: { bg: 'bg-teal-600', bg10: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20', shadow: 'shadow-teal-500/20', ring: 'focus:ring-teal-500/30', hover: 'hover:bg-teal-500' },
    purple: { bg: 'bg-purple-600', bg10: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', shadow: 'shadow-purple-500/20', ring: 'focus:ring-purple-500/30', hover: 'hover:bg-purple-500' },
    orange: { bg: 'bg-orange-600', bg10: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20', shadow: 'shadow-orange-500/20', ring: 'focus:ring-orange-500/30', hover: 'hover:bg-orange-500' },
    rose: { bg: 'bg-rose-600', bg10: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20', shadow: 'shadow-rose-500/20', ring: 'focus:ring-rose-500/30', hover: 'hover:bg-rose-500' },
    lime: { bg: 'bg-lime-600', bg10: 'bg-lime-500/10', text: 'text-lime-400', border: 'border-lime-500/20', shadow: 'shadow-lime-500/20', ring: 'focus:ring-lime-500/30', hover: 'hover:bg-lime-500' },
    slate: { bg: 'bg-slate-600', bg10: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20', shadow: 'shadow-slate-500/20', ring: 'focus:ring-slate-500/30', hover: 'hover:bg-slate-500' },
    stone: { bg: 'bg-stone-600', bg10: 'bg-stone-500/10', text: 'text-stone-400', border: 'border-stone-500/20', shadow: 'shadow-stone-500/20', ring: 'focus:ring-stone-500/30', hover: 'hover:bg-stone-500' },
};

const defaultNavItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
];

const UniversalAdmin = ({ config }) => {
    const {
        brandName = 'GM Admin',
        brandLogo = 'GM',
        accentColor = 'blue',
        roles = [{ id: 'admin', label: 'Admin' }, { id: 'staff', label: 'Staff' }],
        stats = [],
        recentItems = [],
        navItems = defaultNavItems,
        kpis = [],
    } = config || {};

    const c = colorMap[accentColor] || colorMap.blue;
    const [activeRole, setActiveRole] = useState(roles[0]?.id || 'admin');
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => setActiveTab('overview'), [activeRole]);

    return (
        <div className="min-h-screen flex bg-[#0b0f1a] text-slate-300 font-sans">
            {/* ═══ Sidebar ═══ */}
            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-[#0f1629] shrink-0">
                <div className="h-16 flex items-center px-5 border-b border-slate-800 gap-3">
                    <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center text-white font-black text-sm shadow-lg ${c.shadow}`}>
                        {brandLogo.length <= 3 ? brandLogo : brandLogo.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-white font-bold text-sm truncate">{brandName}</p>
                        <p className="text-slate-500 text-[10px] font-mono">Admin Panel</p>
                    </div>
                </div>

                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                    {navItems.map(item => {
                        const Icon = item.icon || LayoutDashboard;
                        return (
                            <button key={item.id} onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === item.id
                                        ? `${c.bg} text-white shadow-lg ${c.shadow}`
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}>
                                <Icon size={18} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Role Switcher */}
                <div className="p-4 border-t border-slate-800">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Switch Role</p>
                    <div className="flex gap-1">
                        {roles.map(role => (
                            <button key={role.id} onClick={() => setActiveRole(role.id)}
                                className={`flex-1 px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${activeRole === role.id
                                        ? `${c.bg} text-white`
                                        : 'bg-slate-800 text-slate-400 hover:text-white'
                                    }`}>
                                {role.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="px-4 pb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">GM</div>
                    <div className="overflow-hidden">
                        <p className="text-white text-xs font-bold truncate">Gerasimos M.</p>
                        <p className="text-slate-500 text-[10px] capitalize">{activeRole}</p>
                    </div>
                </div>
            </aside>

            {/* Mobile sidebar overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setSidebarOpen(false)} />
                        <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                            className="md:hidden fixed left-0 top-0 bottom-0 w-64 bg-[#0f1629] z-50 border-r border-slate-800 flex flex-col">
                            <div className="h-14 flex items-center justify-between px-4 border-b border-slate-800">
                                <span className={`font-bold text-sm ${c.text}`}>{brandName}</span>
                                <button onClick={() => setSidebarOpen(false)} className="text-slate-400"><X size={20} /></button>
                            </div>
                            <nav className="flex-1 py-3 px-3 space-y-1 overflow-y-auto">
                                {navItems.map(item => {
                                    const Icon = item.icon || LayoutDashboard;
                                    return (
                                        <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === item.id ? `${c.bg} text-white` : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}>
                                            <Icon size={18} />{item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                            <div className="p-3 border-t border-slate-800">
                                <div className="flex gap-1">
                                    {roles.map(role => (
                                        <button key={role.id} onClick={() => setActiveRole(role.id)}
                                            className={`flex-1 px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase ${activeRole === role.id ? `${c.bg} text-white` : 'bg-slate-800 text-slate-400'}`}>
                                            {role.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* ═══ Main Content ═══ */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-14 md:h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 bg-[#0f1629]/80 backdrop-blur-xl sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        <button className="md:hidden p-1.5 text-slate-400 hover:text-white" onClick={() => setSidebarOpen(true)}>
                            <Menu size={20} />
                        </button>
                        <h2 className="text-white font-bold text-sm md:text-base tracking-tight">
                            {brandName} <span className="text-slate-600 mx-1">/</span> <span className={`${c.text} capitalize`}>{activeTab}</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full ${c.bg10} ${c.border} border`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400 text-[10px] font-mono font-bold">ONLINE</span>
                        </div>
                        <button className="p-2 text-slate-400 hover:text-white relative transition-colors">
                            <Bell size={18} />
                            <span className={`absolute top-1.5 right-1.5 w-2 h-2 ${c.bg} rounded-full border-2 border-[#0f1629]`} />
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <motion.div key={`${activeRole}-${activeTab}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                        {activeTab === 'overview' ? (
                            <OverviewView stats={stats} recentItems={recentItems} kpis={kpis} c={c} brandName={brandName} role={activeRole} />
                        ) : activeTab === 'customers' ? (
                            <CustomersView c={c} brandName={brandName} />
                        ) : activeTab === 'revenue' ? (
                            <RevenueView c={c} />
                        ) : activeTab === 'activity' ? (
                            <ActivityView c={c} brandName={brandName} />
                        ) : (
                            <SettingsView c={c} brandName={brandName} />
                        )}
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

/* ═══════════════ TAB VIEWS ═══════════════ */

const OverviewView = ({ stats, recentItems, kpis, c, brandName, role }) => (
    <div className="space-y-6">
        {/* Welcome banner */}
        <div className={`rounded-2xl p-6 md:p-8 text-white relative overflow-hidden ${c.bg}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
                <p className="text-white/70 text-sm mb-1">Welcome back,</p>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">Gerasimos! 👋</h2>
                <p className="text-white/80 text-sm">Viewing <span className="font-bold capitalize">{role}</span> dashboard for <span className="font-bold">{brandName}</span></p>
            </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                    className="bg-[#131b30] p-4 md:p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                        <div className={`p-1.5 rounded-lg ${c.bg10} ${c.text}`}>
                            {stat.icon || <TrendingUp size={14} />}
                        </div>
                    </div>
                    <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                    <div className={`text-[10px] md:text-xs mt-1 font-bold ${stat.trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.trend > 0 ? '+' : ''}{stat.trend}% <span className="text-slate-500 font-normal">vs last month</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* KPIs if provided */}
        {kpis.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {kpis.map((kpi, i) => (
                    <div key={i} className="bg-[#131b30] p-5 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-slate-400 font-medium">{kpi.label}</span>
                            <span className={`text-sm font-bold ${c.text}`}>{kpi.value}</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${c.bg} rounded-full transition-all duration-1000`} style={{ width: `${kpi.progress || 0}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Chart + Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-[#131b30] p-5 md:p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2"><BarChart3 size={18} className={c.text} /> Performance</h3>
                <div className="h-48 flex items-end gap-1.5">
                    {[30, 45, 35, 60, 55, 75, 70, 85, 80, 60, 75, 90].map((h, i) => (
                        <div key={i} className={`flex-1 ${c.bg} rounded-t-sm opacity-60 hover:opacity-100 transition-opacity cursor-crosshair`} style={{ height: `${h}%` }} />
                    ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-slate-500">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                </div>
            </div>

            <div className="bg-[#131b30] p-5 md:p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-bold mb-4 text-sm">Recent Activity</h3>
                <div className="space-y-3">
                    {(recentItems.length > 0 ? recentItems : [
                        { title: 'New booking #204', subtitle: 'Client: Maria K.', status: 'Completed', amount: '€120', time: '2m ago' },
                        { title: 'Payment received', subtitle: 'Invoice #1089', status: 'Completed', amount: '€85', time: '15m ago' },
                        { title: 'New inquiry', subtitle: 'Contact form', status: 'Pending', amount: '--', time: '1h ago' },
                    ]).slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                            <div>
                                <p className="text-white text-xs font-bold">{item.title}</p>
                                <p className="text-slate-500 text-[10px]">{item.subtitle}</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                                    }`}>{item.status}</span>
                                <p className="text-slate-500 text-[10px] mt-1">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const CustomersView = ({ c, brandName }) => (
    <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#131b30] p-4 rounded-2xl border border-slate-800">
            <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input type="text" placeholder="Search customers..." className="w-full bg-slate-900 border border-slate-700 text-white pl-10 pr-4 py-2 rounded-xl text-sm focus:outline-none" />
            </div>
            <button className={`${c.bg} text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0`}>
                <Users size={16} /> Add Customer
            </button>
        </div>
        <div className="bg-[#131b30] rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="p-4 pl-6">Customer</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Last Visit</th>
                            <th className="p-4 text-right pr-6">Spent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {['Maria K.', 'John D.', 'Elena P.', 'George S.', 'Anna M.', 'Nikos T.'].map((name, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 pl-6 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${c.bg10} ${c.text} flex items-center justify-center text-xs font-bold`}>{name.charAt(0)}</div>
                                    <span className="text-white font-medium">{name}</span>
                                </td>
                                <td className="p-4"><span className={`px-2 py-1 rounded-full text-[10px] font-bold ${i % 3 === 2 ? 'bg-slate-700 text-slate-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{i % 3 === 2 ? 'Inactive' : 'Active'}</span></td>
                                <td className="p-4 text-slate-500 text-xs font-mono">{i + 1}d ago</td>
                                <td className="p-4 text-right pr-6 text-white font-bold text-sm">€{(150 + i * 47)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const RevenueView = ({ c }) => (
    <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { label: 'Total Revenue', value: '€45,230', sub: '75% of goal', progress: 75 },
                { label: 'Avg. Transaction', value: '€85.40', sub: '+5.2% vs last month', progress: 85 },
                { label: 'Outstanding', value: '€3,240', sub: '14 pending invoices', progress: 25 },
            ].map((item, i) => (
                <div key={i} className="bg-[#131b30] p-5 rounded-2xl border border-slate-800">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{item.label}</p>
                    <h3 className="text-2xl font-black text-white mb-1">{item.value}</h3>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mt-3 mb-2">
                        <div className={`h-full ${c.bg} rounded-full`} style={{ width: `${item.progress}%` }} />
                    </div>
                    <p className={`text-xs ${c.text}`}>{item.sub}</p>
                </div>
            ))}
        </div>
        <div className="bg-[#131b30] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-4">Monthly Revenue</h3>
            <div className="h-56 flex items-end gap-2">
                {[3200, 4500, 3800, 6100, 5500, 7200, 6800, 8100, 7500, 5900, 7200, 8500].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[8px] text-slate-500">€{(v / 1000).toFixed(1)}k</span>
                        <div className={`w-full ${c.bg} rounded-t-sm opacity-70 hover:opacity-100 transition-opacity`} style={{ height: `${(v / 8500) * 100}%` }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ActivityView = ({ c, brandName }) => (
    <div className="bg-[#0a0f19] rounded-2xl border border-slate-800 font-mono text-sm overflow-hidden">
        <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-amber-500" /><div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-slate-500 text-xs ml-2">{brandName.toLowerCase().replace(/\s/g, '_')}_logs.log</span>
        </div>
        <div className="p-4 space-y-1.5 h-[500px] overflow-y-auto">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="flex gap-3 text-xs">
                    <span className="text-slate-600 shrink-0">2026-02-10 14:3{Math.floor(i / 10)}:{String(i % 10).padStart(2, '0')}</span>
                    <span className={i % 4 === 0 ? 'text-blue-400' : i % 5 === 0 ? 'text-amber-400' : i % 7 === 0 ? `${c.text}` : 'text-slate-400'}>
                        {i % 4 === 0 ? `[INFO] New customer session started (IP: 192.168.${i}.${i + 1})` :
                            i % 5 === 0 ? `[WARN] API response time elevated (${200 + i * 5}ms)` :
                                i % 7 === 0 ? `[SUCCESS] Payment processed #${4000 + i}` :
                                    `[DEBUG] Component rendered <${brandName.replace(/\s/g, '')}Dashboard />`}
                    </span>
                </div>
            ))}
            <div className="flex gap-3 animate-pulse text-xs">
                <span className="text-slate-600">2026-02-10 14:32:21</span>
                <span className="text-emerald-400">▊</span>
            </div>
        </div>
    </div>
);

const SettingsView = ({ c, brandName }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#131b30] p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2"><Palette size={18} className={c.text} /> Branding</h3>
            <div className="space-y-4">
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Business Name</label>
                    <input defaultValue={brandName} className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none" />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Logo Text</label>
                    <input defaultValue="GM" className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none" />
                </div>
                <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Primary Color</label>
                    <div className="grid grid-cols-6 gap-2">
                        {Object.keys(colorMap).map(color => (
                            <div key={color} className={`w-full aspect-square rounded-lg cursor-pointer border-2 transition-all ${colorMap[color].bg} ${color === 'blue' ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`} title={color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#131b30] p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2"><ShieldCheck size={18} className={c.text} /> Security</h3>
            <div className="space-y-5">
                {['Two-Factor Authentication', 'Force SSL/TLS', 'IP Whitelisting', 'API Rate Limiting'].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">{item}</span>
                        <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${i < 2 ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${i < 2 ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default UniversalAdmin;
