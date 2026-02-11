import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, DollarSign, Settings, Bell, Search, Menu,
    TrendingUp, ArrowUpRight, ShieldCheck, Calendar, FileText, Activity,
    Package, BarChart3, ChevronRight, ChevronLeft, ChevronDown, MoreVertical, X, Palette, LogOut,
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
    },
    es: {
        menu: 'MENÚ',
        switchRole: 'CAMBIAR ROL',
        search: 'Buscar algo...',
        live: 'EN VIVO',
        settings: 'Ajustes',
        logout: 'Cerrar sesión',
        greeting: { m: 'Buenos días', a: 'Buenas tardes', e: 'Buenas noches' },
        dashboard: 'panel',
        schedule: 'Agenda',
        quickAction: 'Acción Rápida',
        performance: 'Rendimiento',
        recentActivity: 'Actividad Reciente',
        add: 'Añadir'
    }
};

const UniversalAdmin = ({ config, language = 'en', switcher = null }) => {
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
        if (!base.find(n => n.id === 'settings')) {
            const arr = [...base];
            arr.push({ id: 'settings', label: t.settings, icon: Settings });
            return arr;
        }
        return base;
    }, [customTabs, rawNavItems, t]);

    const c = colorMap[accentColor] || colorMap.blue;
    const [activeRole, setActiveRole] = useState(roles[0]?.id || 'admin');
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);

    // Header scroll logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => setActiveTab('overview'), [activeRole]);

    const SidebarContent = ({ mobile = false }) => (
        <>
            {/* Brand Header */}
            <div className={`${mobile ? 'h-16' : 'h-[72px]'} flex items-center px-5 border-b border-white/[0.06] gap-3`}>
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-black text-sm shadow-lg ${c.shadow} ring-2 ring-white/10 shrink-0`}>
                    {brandLogo.length <= 3 ? brandLogo : brandLogo.charAt(0)}
                </div>
                {!isCollapsed && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden flex-1">
                        <p className="text-white font-bold text-sm truncate leading-tight tracking-tight">{brandName}</p>
                        <p className={`${c.text} text-[10px] font-black tracking-widest uppercase opacity-80 mt-0.5`}>Admin Panel</p>
                    </motion.div>
                )}
                {mobile && <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-xl transition-colors"><X size={20} /></button>}
                {!mobile && (
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors absolute -right-3 top-[26px] bg-[#0c1122] border border-white/10 z-50 shadow-xl hidden md:block"
                    >
                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                    </button>
                )}
            </div>

            {/* Switcher Injection for Mobile Sidebar */}
            {mobile && switcher && (
                <div className="px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                    {switcher}
                </div>
            )}

            {/* Quick Stats Mini - Only if not collapsed */}
            {!isCollapsed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 pt-4 pb-2">
                    <div className={`rounded-xl p-3 bg-gradient-to-br ${c.gradient} relative overflow-hidden group cursor-pointer`}>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
                        <div className="relative flex items-center justify-between">
                            <div>
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Today</p>
                                <p className="text-white text-lg font-black">{stats[0]?.value || '0'}</p>
                            </div>
                            <div className="text-white/80"><TrendingUp size={20} /></div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Navigation */}
            <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
                {!isCollapsed && <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold px-4 pt-2 pb-2">{t.menu}</p>}
                {navItems.map(item => {
                    const Icon = item.icon || LayoutDashboard;
                    const isActive = activeTab === item.id;
                    return (
                        <button key={item.id} onClick={() => { setActiveTab(item.id); if (mobile) setSidebarOpen(false); }}
                            title={isCollapsed ? item.label : ''}
                            className={`w-full flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : 'px-4'} py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 group relative ${isActive
                                ? `bg-gradient-to-r ${c.gradient} text-white shadow-lg ${c.shadow}`
                                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                }`}>
                            <div className={`${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`}><Icon size={18} /></div>
                            {!isCollapsed && <span>{item.label}</span>}
                            {isActive && !isCollapsed && <ChevronRight size={14} className="ml-auto opacity-60" />}
                            {isActive && isCollapsed && (
                                <motion.div layoutId="activeIndicator" className={`absolute -left-1 w-1 h-6 rounded-r-full bg-white`} />
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Role Switcher */}
            <div className={`px-4 py-4 border-t border-white/[0.06] ${isCollapsed ? 'flex justify-center' : ''}`}>
                {!isCollapsed ? (
                    <>
                        <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-3">{t.switchRole}</p>
                        <div className="flex gap-1 bg-[#0a0e1a] rounded-xl p-1 border border-white/[0.02]">
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
                    </>
                ) : (
                    <button onClick={() => setIsCollapsed(false)} className={`w-8 h-8 rounded-lg ${c.bg10} ${c.text} flex items-center justify-center hover:bg-white/5 transition-colors`}>
                        <ArrowUpRight size={16} />
                    </button>
                )}
            </div>

            {/* User */}
            <div className={`px-4 pb-4 flex items-center gap-3 ${isCollapsed ? 'justify-center px-0' : ''}`}>
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-[10px] font-black text-white ring-2 ring-white/10 shrink-0`}>GM</div>
                {!isCollapsed && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden flex-1">
                        <p className="text-white text-xs font-bold truncate">Gerasimos M.</p>
                        <p className={`${c.text} text-[10px] capitalize font-semibold`}>{roles.find(r => r.id === activeRole)?.label || activeRole}</p>
                    </motion.div>
                )}
                {!isCollapsed && <button className="text-slate-500 hover:text-red-400 transition-colors p-1" title={t.logout}><LogOut size={15} /></button>}
            </div>
        </>
    );

    return (
        <div className="min-h-[100dvh] flex bg-[#080c16] text-slate-300 font-sans overflow-x-hidden relative">
            {/* Desktop sidebar - Only show on LG (1024px+) */}
            <aside className={`hidden lg:flex flex-col border-r border-white/[0.06] bg-[#0c1122] transition-all duration-300 ease-in-out shrink-0 relative ${isCollapsed ? 'w-[80px]' : 'w-[260px]'}`}>
                <SidebarContent />
            </aside>

            {/* Mobile/Tablet sidebar drawer */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]" onClick={() => setSidebarOpen(false)} />
                        <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-[#0c1122] z-[10000] border-r border-white/[0.06] flex flex-col shadow-2xl h-[100dvh]">
                            <SidebarContent mobile />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* ═══ Main ═══ */}
            <div className="flex-1 flex flex-col min-w-0 min-h-[100dvh] relative">
                {/* Header */}
                <motion.header
                    animate={{ y: headerVisible ? 0 : -80 }}
                    transition={{ duration: 0.3 }}
                    className="h-16 lg:h-[64px] border-b border-white/[0.06] flex items-center justify-between px-4 lg:px-8 bg-[#0c1122]/95 backdrop-blur-2xl sticky top-0 z-40"
                >
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-xl" onClick={() => setSidebarOpen(true)}>
                            <Menu size={20} />
                        </button>
                        <div className="hidden lg:flex items-center gap-3 text-sm">
                            <span className="text-white/40 font-medium">{brandName}</span>
                            <ChevronRight size={14} className="text-slate-700" />
                            <span className={`${c.text} font-bold capitalize tracking-tight px-3 py-1 rounded-lg bg-white/5`}>{activeTab}</span>
                        </div>
                        {/* Mobile Brand Label */}
                        <div className="lg:hidden flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-black text-[10px]`}>
                                {brandLogo.charAt(0)}
                            </div>
                            <span className="text-white font-bold text-sm truncate max-w-[120px]">{brandName}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        {/* Search Bar - Desktop Only */}
                        <div className="hidden lg:flex items-center relative group">
                            <Search className="absolute left-3 text-slate-500 group-focus-within:text-white transition-colors" size={15} />
                            <input
                                type="text"
                                placeholder={t.search}
                                className="bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-xs w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-1">
                            <button onClick={() => setSearchOpen(!searchOpen)} className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                <Search size={18} />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all relative group">
                                <Bell size={18} />
                                <span className={`absolute top-2 right-2 w-2 h-2 ${c.bg} rounded-full border-2 border-[#0c1122] shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                            </button>
                            <button className="hidden sm:flex items-center gap-2 pl-2 pr-1 py-1 rounded-xl hover:bg-white/5 transition-all text-slate-400 hover:text-white">
                                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-[9px] font-black text-white`}>GM</div>
                                <MoreVertical size={14} className="opacity-40" />
                            </button>
                        </div>
                    </div>
                </motion.header>

                {/* Mobile/Tablet Bottom Navigation (Hides on LG) */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0c1122]/95 backdrop-blur-2xl border-t border-white/[0.06] z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                    {navItems.slice(0, 4).map(item => {
                        const Icon = item.icon || LayoutDashboard;
                        const isActive = activeTab === item.id;
                        return (
                            <button key={item.id} onClick={() => setActiveTab(item.id)}
                                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${isActive ? c.text : 'text-slate-500'}`}>
                                <Icon size={isActive ? 20 : 18} className={isActive ? 'animate-pulse' : ''} />
                                <span className="text-[9px] font-bold uppercase tracking-tight">{item.label.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                    <button onClick={() => setSidebarOpen(true)} className="flex flex-col items-center gap-1 text-slate-500 px-3">
                        <Menu size={18} />
                        <span className="text-[9px] font-bold uppercase tracking-tight">More</span>
                    </button>
                </div>

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
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-32 lg:pb-8">
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
