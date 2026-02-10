import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, DollarSign, Settings, Bell, Search, Menu,
    TrendingUp, ArrowUpRight, ShieldCheck, Calendar, FileText, Activity,
    Package, BarChart3, ChevronRight, MoreVertical, X, Palette, LogOut,
    Sparkles, Clock, Zap, Target, Award, CheckCircle, AlertCircle,
    CreditCard, Globe, PieChart, Eye, GitBranch, GitCommit, GitPullRequest, Terminal
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

import OverviewView from './admin/OverviewView';
import DataTableView from './admin/DataTableView';
import { CustomersView, RevenueView, GitView, ActivityView, SettingsView } from './admin/AdminViews';

const adminTranslations = {
    en: {
        menu: 'MENU',
        switchRole: 'SWITCH ROLE',
        search: 'Search anything...',
        live: 'LIVE',
        settings: 'Settings',
        logout: 'Log out',
        greeting: { m: 'Good morning', a: 'Good afternoon', e: 'Good evening' },
        dashboard: 'dashboard',
        schedule: 'Schedule',
        quickAction: 'Quick Action',
        performance: 'Performance',
        recentActivity: 'Recent Activity',
        add: 'Add'
    },
    el: {
        menu: 'ΜΕΝΟΥ',
        switchRole: 'ΑΛΛΑΓΗ ΡΟΛΟΥ',
        search: 'Αναζήτηση...',
        live: 'LIVE',
        settings: 'Ρυθμίσεις',
        logout: 'Αποσύνδεση',
        greeting: { m: 'Καλημέρα', a: 'Καλησπέρα', e: 'Καλησπέρα' },
        dashboard: 'ταμπλό',
        schedule: 'Πρόγραμμα',
        quickAction: 'Ενέργεια',
        performance: 'Απόδοση',
        recentActivity: 'Πρόσφατη Δραστηριότητα',
        add: 'Προσθήκη'
    }
};

const UniversalAdmin = ({ config, language = 'en' }) => {
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

    const t = adminTranslations[language] || adminTranslations.en;

    // Build navItems
    const navItems = React.useMemo(() => {
        const base = customTabs.length > 0
            ? [{ id: 'overview', label: 'Overview', icon: LayoutDashboard }, ...customTabs.map(t => ({ id: t.id, label: t.label, icon: t.icon || Package }))]
            : rawNavItems || defaultNavItems;
        if (!base.find(n => n.id === 'settings')) base.push({ id: 'settings', label: t.settings, icon: Settings });
        return base;
    }, [customTabs, rawNavItems, t]);

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
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold px-4 pt-2 pb-2">{t.menu}</p>
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
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-2">{t.switchRole}</p>
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
                <button className="text-slate-500 hover:text-red-400 transition-colors" title={t.logout}><LogOut size={15} /></button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen flex bg-[#080c16] text-slate-300 font-sans overflow-x-hidden md:overflow-visible">
            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-[260px] flex-col border-r border-white/[0.06] bg-[#0c1122] shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile sidebar - High z-index to ensure visibility */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]" onClick={() => setSidebarOpen(false)} />
                        <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="md:hidden fixed left-0 top-0 bottom-0 w-[260px] bg-[#0c1122] z-[9999] border-r border-white/[0.06] flex flex-col shadow-2xl">
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
                            <span className="text-emerald-400 text-[10px] font-mono font-bold">{t.live}</span>
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
                                <input autoFocus type="text" placeholder={t.search} className="w-full bg-[#080c16] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-white/20"
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
                                if (ct.columns) return <DataTableView tab={ct} c={c} t={t} />;
                                return <DataTableView tab={ct} c={c} t={t} />;
                            }
                            // Built-in views
                            if (activeTab === 'overview') return <OverviewView stats={stats} recentItems={recentItems} kpis={kpis} c={c} brandName={brandName} brandLogo={brandLogo} role={activeRole} roles={roles} t={t} />;
                            if (activeTab === 'settings') return <SettingsView c={c} brandName={brandName} accentColor={config?.accentColor} t={t} />;
                            if (activeTab === 'customers') return <CustomersView c={c} brandName={brandName} t={t} />;
                            if (activeTab === 'revenue') return <RevenueView c={c} brandName={brandName} t={t} />;
                            if (activeTab === 'activity') return <ActivityView c={c} brandName={brandName} t={t} />;
                            if (activeTab === 'git') return <GitView c={c} brandName={brandName} t={t} />;
                            return <DataTableView tab={{ label: activeTab }} c={c} t={t} />;
                        })()}
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

/* ═══════════════ TAB VIEWS ═══════════════ */



export default UniversalAdmin;
