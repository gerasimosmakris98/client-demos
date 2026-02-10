import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, DollarSign, Settings, Bell, Search, Menu,
    TrendingUp, ArrowUpRight, ShieldCheck, Calendar, FileText, Activity,
    Package, BarChart3, ChevronRight, MoreVertical, X, Palette, LogOut,
    Sparkles, Clock, Zap, Target, Award, CheckCircle, AlertCircle,
    CreditCard, Globe, PieChart, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const colorMap = {
    red: { bg: 'bg-red-600', bg10: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', shadow: 'shadow-red-500/20', gradient: 'from-red-600 to-rose-700', light: 'text-red-300', hex: '#dc2626' },
    blue: { bg: 'bg-blue-600', bg10: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', shadow: 'shadow-blue-500/20', gradient: 'from-blue-600 to-indigo-700', light: 'text-blue-300', hex: '#2563eb' },
    emerald: { bg: 'bg-emerald-600', bg10: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', shadow: 'shadow-emerald-500/20', gradient: 'from-emerald-600 to-teal-700', light: 'text-emerald-300', hex: '#059669' },
    amber: { bg: 'bg-amber-600', bg10: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', shadow: 'shadow-amber-500/20', gradient: 'from-amber-600 to-orange-700', light: 'text-amber-300', hex: '#d97706' },
    indigo: { bg: 'bg-indigo-600', bg10: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', shadow: 'shadow-indigo-500/20', gradient: 'from-indigo-600 to-violet-700', light: 'text-indigo-300', hex: '#4f46e5' },
    teal: { bg: 'bg-teal-600', bg10: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20', shadow: 'shadow-teal-500/20', gradient: 'from-teal-600 to-cyan-700', light: 'text-teal-300', hex: '#0d9488' },
    purple: { bg: 'bg-purple-600', bg10: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', shadow: 'shadow-purple-500/20', gradient: 'from-purple-600 to-fuchsia-700', light: 'text-purple-300', hex: '#9333ea' },
    orange: { bg: 'bg-orange-600', bg10: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20', shadow: 'shadow-orange-500/20', gradient: 'from-orange-600 to-red-700', light: 'text-orange-300', hex: '#ea580c' },
    rose: { bg: 'bg-rose-600', bg10: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20', shadow: 'shadow-rose-500/20', gradient: 'from-rose-600 to-pink-700', light: 'text-rose-300', hex: '#e11d48' },
    lime: { bg: 'bg-lime-600', bg10: 'bg-lime-500/10', text: 'text-lime-400', border: 'border-lime-500/20', shadow: 'shadow-lime-500/20', gradient: 'from-lime-600 to-green-700', light: 'text-lime-300', hex: '#65a30d' },
    slate: { bg: 'bg-slate-600', bg10: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20', shadow: 'shadow-slate-500/20', gradient: 'from-slate-600 to-gray-700', light: 'text-slate-300', hex: '#475569' },
    stone: { bg: 'bg-stone-600', bg10: 'bg-stone-500/10', text: 'text-stone-400', border: 'border-stone-500/20', shadow: 'shadow-stone-500/20', gradient: 'from-stone-600 to-neutral-700', light: 'text-stone-300', hex: '#57534e' },
};

const defaultNavItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
];

// Sparkline mini-chart
const Sparkline = ({ data = [3, 5, 4, 7, 6, 8, 7, 9, 8, 6, 8, 10], color }) => (
    <svg viewBox="0 0 60 20" className="w-16 h-5" preserveAspectRatio="none">
        <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            points={data.map((v, i) => `${(i / (data.length - 1)) * 60},${20 - (v / Math.max(...data)) * 18}`).join(' ')} />
    </svg>
);

/* Generic table view for custom tabs */
const DataTableView = ({ tab, c }) => {
    const columns = tab.columns || ['Name', 'Status', 'Date', 'Action'];
    const rows = tab.rows || [];
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0e1425] p-4 rounded-2xl border border-white/[0.06]">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input type="text" placeholder={`Search ${tab.label || ''}...`} className="w-full bg-[#080c16] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20" />
                </div>
                <button className={`bg-gradient-to-r ${c.gradient} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg ${c.shadow}`}>
                    + Add {tab.label?.replace(/s$/, '') || 'Item'}
                </button>
            </div>
            <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#0a0e1a] text-slate-500 text-[10px] uppercase tracking-wider">
                            <tr>{columns.map(col => <th key={col} className="p-4 first:pl-6 last:pr-6 last:text-right">{col}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04]">
                            {rows.map((row, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                    {row.map((cell, j) => (
                                        <td key={j} className={`p-4 ${j === 0 ? 'pl-6' : ''} ${j === row.length - 1 ? 'text-right pr-6' : ''}`}>
                                            {j === 0 ? (
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white text-xs font-bold opacity-80`}>{String(cell).charAt(0)}</div>
                                                    <span className="text-white font-semibold text-sm">{cell}</span>
                                                </div>
                                            ) : j === 1 ? (
                                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${cell === 'Active' || cell === 'Confirmed' || cell === 'Completed' || cell === 'Paid' ? 'bg-emerald-500/10 text-emerald-400' :
                                                        cell === 'Pending' || cell === 'In Progress' || cell === 'Scheduled' ? 'bg-amber-500/10 text-amber-400' :
                                                            cell === 'Cancelled' || cell === 'Overdue' ? 'bg-red-500/10 text-red-400' :
                                                                `${c.bg10} ${c.text}`
                                                    }`}>{cell}</span>
                                            ) : (
                                                <span className={j === row.length - 1 ? 'text-white font-bold' : 'text-slate-400 text-xs'}>{cell}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const UniversalAdmin = ({ config }) => {
    const {
        brandName = 'GM Admin',
        brandLogo = 'GM',
        accentColor = 'blue',
        roles = [{ id: 'admin', label: 'Admin' }, { id: 'staff', label: 'Staff' }],
        stats = [],
        recentItems = [],
        navItems: rawNavItems,
        kpis = [],
        customTabs = [],
    } = config || {};

    // Build navItems: use customTabs for nav if provided, else rawNavItems, else defaults. Always add settings.
    const navItems = React.useMemo(() => {
        const base = customTabs.length > 0
            ? [{ id: 'overview', label: 'Overview', icon: LayoutDashboard }, ...customTabs.map(t => ({ id: t.id, label: t.label, icon: t.icon || Package }))]
            : rawNavItems || defaultNavItems;
        if (!base.find(n => n.id === 'settings')) base.push({ id: 'settings', label: 'Settings', icon: Settings });
        return base;
    }, [customTabs, rawNavItems]);

    const c = colorMap[accentColor] || colorMap.blue;
    const [activeRole, setActiveRole] = useState(roles[0]?.id || 'admin');
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => setActiveTab('overview'), [activeRole]);

    const SidebarContent = ({ mobile = false }) => (
        <>
            {/* Brand Header */}
            <div className={`${mobile ? 'h-14' : 'h-[72px]'} flex items-center px-5 border-b border-white/[0.06] gap-3`}>
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-black text-sm shadow-lg ${c.shadow} ring-2 ring-white/10`}>
                    {brandLogo.length <= 3 ? brandLogo : brandLogo.charAt(0)}
                </div>
                <div className="overflow-hidden flex-1">
                    <p className="text-white font-bold text-sm truncate leading-tight">{brandName}</p>
                    <p className={`${c.text} text-[10px] font-semibold tracking-wide`}>Admin Panel</p>
                </div>
                {mobile && <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white"><X size={18} /></button>}
            </div>

            {/* Quick Stats Mini */}
            <div className="px-4 pt-4 pb-2">
                <div className={`rounded-xl p-3 bg-gradient-to-br ${c.gradient} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex items-center justify-between">
                        <div>
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Today</p>
                            <p className="text-white text-lg font-black">{stats[0]?.value || '0'}</p>
                        </div>
                        <div className="text-white/80"><TrendingUp size={20} /></div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-2 px-3 space-y-0.5 overflow-y-auto">
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold px-4 pt-2 pb-2">Menu</p>
                {navItems.map(item => {
                    const Icon = item.icon || LayoutDashboard;
                    const isActive = activeTab === item.id;
                    return (
                        <button key={item.id} onClick={() => { setActiveTab(item.id); if (mobile) setSidebarOpen(false); }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${isActive
                                ? `bg-gradient-to-r ${c.gradient} text-white shadow-lg ${c.shadow}`
                                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                }`}>
                            <div className={`${isActive ? 'text-white' : ''}`}><Icon size={17} /></div>
                            {item.label}
                            {isActive && <ChevronRight size={14} className="ml-auto opacity-60" />}
                        </button>
                    );
                })}
            </nav>

            {/* Role Switcher */}
            <div className="px-4 py-3 border-t border-white/[0.06]">
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-2">Switch Role</p>
                <div className="flex gap-1.5 bg-[#0a0e1a] rounded-xl p-1">
                    {roles.map(role => (
                        <button key={role.id} onClick={() => setActiveRole(role.id)}
                            className={`flex-1 px-2 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${activeRole === role.id
                                ? `bg-gradient-to-r ${c.gradient} text-white shadow-md`
                                : 'text-slate-500 hover:text-slate-300'
                                }`}>
                            {role.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* User */}
            <div className="px-4 pb-4 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-[10px] font-black text-white ring-2 ring-white/10`}>GM</div>
                <div className="overflow-hidden flex-1">
                    <p className="text-white text-xs font-bold truncate">Gerasimos M.</p>
                    <p className={`${c.text} text-[10px] capitalize font-medium`}>{roles.find(r => r.id === activeRole)?.label || activeRole}</p>
                </div>
                <button className="text-slate-500 hover:text-red-400 transition-colors"><LogOut size={15} /></button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen flex bg-[#080c16] text-slate-300 font-sans">
            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-[260px] flex-col border-r border-white/[0.06] bg-[#0c1122] shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />
                        <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="md:hidden fixed left-0 top-0 bottom-0 w-[260px] bg-[#0c1122] z-50 border-r border-white/[0.06] flex flex-col shadow-2xl">
                            <SidebarContent mobile />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* ═══ Main ═══ */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-14 md:h-[60px] border-b border-white/[0.06] flex items-center justify-between px-4 md:px-6 bg-[#0c1122]/90 backdrop-blur-xl sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        <button className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors" onClick={() => setSidebarOpen(true)}>
                            <Menu size={20} />
                        </button>
                        <div className="hidden md:flex items-center gap-2 text-sm">
                            <span className="text-white font-bold">{brandName}</span>
                            <span className="text-slate-600">/</span>
                            <span className={`${c.text} font-semibold capitalize`}>{activeTab}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                        {/* Search */}
                        <button onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                            <Search size={17} />
                        </button>
                        {/* Status Badge */}
                        <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full ${c.bg10} ${c.border} border`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400 text-[10px] font-mono font-bold">LIVE</span>
                        </div>
                        {/* Notifications */}
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all relative">
                            <Bell size={17} />
                            <span className={`absolute top-1.5 right-1.5 w-2 h-2 ${c.bg} rounded-full border-2 border-[#0c1122] animate-pulse`} />
                        </button>
                        {/* Avatar mini */}
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-[10px] font-black text-white md:hidden`}>GM</div>
                    </div>
                </header>

                {/* Search overlay */}
                <AnimatePresence>
                    {searchOpen && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                            className="absolute top-14 md:top-[60px] left-0 right-0 bg-[#0c1122] border-b border-white/[0.06] p-4 z-20">
                            <div className="max-w-2xl mx-auto relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input autoFocus type="text" placeholder="Search anything..." className="w-full bg-[#080c16] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-white/20"
                                    onBlur={() => setSearchOpen(false)} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <motion.div key={`${activeRole}-${activeTab}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                        {(() => {
                            // Check customTabs first
                            const ct = customTabs.find(t => t.id === activeTab);
                            if (ct) {
                                if (ct.content) return ct.content;
                                if (ct.columns) return <DataTableView tab={ct} c={c} />;
                                return <DataTableView tab={ct} c={c} />;
                            }
                            // Built-in views
                            if (activeTab === 'overview') return <OverviewView stats={stats} recentItems={recentItems} kpis={kpis} c={c} brandName={brandName} brandLogo={brandLogo} role={activeRole} roles={roles} />;
                            if (activeTab === 'settings') return <SettingsView c={c} brandName={brandName} accentColor={config?.accentColor} />;
                            if (activeTab === 'customers') return <CustomersView c={c} brandName={brandName} />;
                            if (activeTab === 'revenue') return <RevenueView c={c} brandName={brandName} />;
                            if (activeTab === 'activity') return <ActivityView c={c} brandName={brandName} />;
                            return <DataTableView tab={{ label: activeTab }} c={c} />;
                        })()}
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

/* ═══════════════ TAB VIEWS ═══════════════ */

const OverviewView = ({ stats, recentItems, kpis, c, brandName, brandLogo, role, roles }) => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    const roleName = roles?.find(r => r.id === role)?.label || role;

    return (
        <div className="space-y-5">
            {/* Welcome banner */}
            <div className={`rounded-2xl p-6 md:p-8 text-white relative overflow-hidden bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <p className="text-white/60 text-xs font-medium mb-1">{greeting},</p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-1">Gerasimos! 👋</h2>
                        <p className="text-white/70 text-sm">
                            <span className="font-bold text-white/90 capitalize">{roleName}</span> dashboard — {brandName}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-white/15 hover:bg-white/25 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border border-white/10">
                            <Calendar size={14} /> Schedule
                        </button>
                        <button className="bg-white text-gray-900 hover:bg-white/90 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg">
                            <Zap size={14} /> Quick Action
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="bg-[#0e1425] p-4 md:p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all group cursor-default">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{stat.label}</span>
                            <Sparkline color={c.hex} data={[3, 5, 4, 7, 6, 8 + i, 7 + i, 9, 8 + i, 6, 8 + i, 10 + i]} />
                        </div>
                        <div className="text-xl md:text-2xl font-black text-white tracking-tight">{stat.value}</div>
                        <div className={`text-[10px] mt-1.5 font-bold flex items-center gap-1 ${stat.trend > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            <ArrowUpRight size={12} className={stat.trend < 0 ? 'rotate-90' : ''} />
                            {stat.trend > 0 ? '+' : ''}{stat.trend}%
                            <span className="text-slate-500 font-normal ml-1">vs last mo.</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* KPIs */}
            {kpis.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {kpis.map((kpi, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }}
                            className="bg-[#0e1425] p-5 rounded-2xl border border-white/[0.06]">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm text-slate-400 font-medium">{kpi.label}</span>
                                <span className={`text-sm font-black ${c.text}`}>{kpi.value}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                <div className="lg:col-span-3 bg-[#0e1425] p-5 md:p-6 rounded-2xl border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold flex items-center gap-2"><BarChart3 size={17} className={c.text} /> Performance</h3>
                        <div className="flex gap-1 bg-[#0a0e1a] rounded-lg p-0.5">
                            {['7D', '1M', '1Y'].map(p => <button key={p} className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${p === '1M' ? `${c.bg} text-white` : 'text-slate-500 hover:text-slate-300'}`}>{p}</button>)}
                        </div>
                    </div>
                    <div className="h-44 flex items-end gap-1.5">
                        {[30, 45, 35, 60, 55, 75, 70, 85, 80, 60, 75, 90].map((h, i) => (
                            <div key={i} className="flex-1 group relative">
                                <div className={`w-full bg-gradient-to-t ${c.gradient} rounded-t opacity-50 group-hover:opacity-100 transition-all duration-200`} style={{ height: `${h}%` }} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] text-slate-600 font-medium">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                    </div>
                </div>

                <div className="lg:col-span-2 bg-[#0e1425] p-5 md:p-6 rounded-2xl border border-white/[0.06]">
                    <h3 className="text-white font-bold mb-4 text-sm flex items-center gap-2"><Clock size={15} className={c.text} /> Recent Activity</h3>
                    <div className="space-y-1">
                        {(recentItems.length > 0 ? recentItems : [
                            { title: 'New booking #204', subtitle: 'Client: Maria K.', status: 'Completed', time: '2m ago' },
                            { title: 'Payment received', subtitle: 'Invoice #1089', status: 'Completed', time: '15m ago' },
                            { title: 'New inquiry', subtitle: 'Contact form', status: 'Pending', time: '1h ago' },
                            { title: 'Review submitted', subtitle: '5 stars — Google', status: 'New', time: '3h ago' },
                        ]).slice(0, 5).map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                                <div className={`w-8 h-8 rounded-lg ${c.bg10} ${c.text} flex items-center justify-center shrink-0`}>
                                    <CheckCircle size={14} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-xs font-bold truncate">{item.title}</p>
                                    <p className="text-slate-500 text-[10px] truncate">{item.subtitle}</p>
                                </div>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                    item.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' : `${c.bg10} ${c.text}`}`}>{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomersView = ({ c, brandName }) => (
    <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0e1425] p-4 rounded-2xl border border-white/[0.06]">
            <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input type="text" placeholder="Search customers..." className="w-full bg-[#080c16] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20" />
            </div>
            <button className={`bg-gradient-to-r ${c.gradient} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg ${c.shadow}`}>
                <Users size={16} /> Add Customer
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

const RevenueView = ({ c, brandName }) => (
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

const ActivityView = ({ c, brandName }) => (
    <div className="bg-[#080c16] rounded-2xl border border-white/[0.06] font-mono text-sm overflow-hidden">
        <div className="h-10 bg-[#0a0e1a] border-b border-white/[0.06] flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-500 text-xs ml-3">{brandName.toLowerCase().replace(/\s/g, '_')}_logs.log</span>
            <div className="ml-auto flex gap-2">
                <span className={`text-[9px] px-2 py-0.5 rounded-full ${c.bg10} ${c.text} font-bold`}>LIVE</span>
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

const SettingsView = ({ c, brandName, accentColor }) => (
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

export default UniversalAdmin;
