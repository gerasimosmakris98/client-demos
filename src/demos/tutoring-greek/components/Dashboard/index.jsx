import React, { useState, useEffect } from 'react';
import {
    Shield, BookOpen, GraduationCap, LayoutDashboard, Users, CreditCard,
    Settings, Calendar, FileText, Bell, Search, Database, Code,
    Menu, X, Zap, Video, MessageCircle, LogOut, ArrowUpRight,
    DollarSign, TrendingUp, Activity, Lock, Smartphone, Mail,
    CheckCircle, AlertCircle, Clock, ChevronRight, MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MAIN DASHBOARD CONTAINER ---
const Dashboard = ({ initialRole = 'admin' }) => {
    const [role, setRole] = useState(initialRole);
    const [activeTab, setActiveTab] = useState('overview');

    // Reset tab when role changes
    useEffect(() => setActiveTab('overview'), [role]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500/30 transition-colors duration-500">
            {role === 'admin' ? (
                <AdminLayout role={role} activeTab={activeTab} setActiveTab={setActiveTab}>
                    <AdminContent activeTab={activeTab} />
                </AdminLayout>
            ) : (
                <UserLayout role={role} activeTab={activeTab} setActiveTab={setActiveTab}>
                    {role === 'teacher' ? <TeacherContent activeTab={activeTab} /> : <StudentContent activeTab={activeTab} />}
                </UserLayout>
            )}

            <RoleSwitcher currentRole={role} setRole={setRole} />
        </div>
    );
};

// --- CONTENT SWITCHERS ---

const AdminContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'overview': return <AdminOverview />;
        case 'finance': return <AdminFinance />;
        case 'users': return <AdminUsers />;
        case 'logs': return <AdminLogs />;
        case 'security': return <AdminSecurity />;
        default: return <AdminOverview />;
    }
};

const TeacherContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'overview': return <TeacherOverview />;
        case 'students': return <TeacherStudents />;
        case 'gradebook': return <TeacherGradebook />;
        case 'chat': return <ChatInterface role="Teacher" />;
        default: return <TeacherOverview />;
    }
};

const StudentContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'overview': return <StudentOverview />;
        case 'assignments': return <StudentAssignments />;
        case 'grades': return <StudentGrades />;
        case 'payments': return <StudentPayments />;
        default: return <StudentOverview />;
    }
};

// --- ADMIN VIEWS ---

const AdminOverview = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <BentoCard colSpan="md:col-span-2" className="bg-gradient-to-br from-indigo-900 to-[#1e1b4b] border-indigo-500/20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-500" />
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">Total MRR</p>
                        <h3 className="text-5xl font-black tracking-tight">€45.2k</h3>
                        <p className="text-indigo-400 text-sm mt-2 flex items-center gap-2">
                            <span className="text-emerald-400 font-bold flex items-center"><ArrowUpRight size={14} /> 12%</span> vs last month
                        </p>
                    </div>
                    <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 border border-indigo-500/30">
                        <CreditCard size={24} />
                    </div>
                </div>
                <div className="mt-8 h-12 flex items-end gap-1 opacity-50 relative z-10">
                    {[30, 45, 35, 60, 55, 75, 70, 85, 80, 60, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-indigo-400 rounded-t-sm hover:bg-indigo-200 transition-colors cursor-crosshair" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </BentoCard>

            <BentoCard className="bg-[#1e293b]/50 border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg"><Users size={20} /></div>
                            <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">+124 this week</span>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-4">Active Users</p>
                        <h3 className="text-3xl font-bold text-white mt-1">1,204</h3>
                    </div>
                </div>
            </BentoCard>

            <BentoCard className="bg-[#1e293b]/50 border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Zap size={20} /></div>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-4">System Load</p>
                        <h3 className="text-3xl font-bold text-white mt-1">24%</h3>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1.5 rounded-full overflow-hidden mt-4">
                        <div className="bg-blue-500 h-full w-[24%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    </div>
                </div>
            </BentoCard>

            <BentoCard colSpan="md:col-span-4" className="bg-[#1e293b]/30 border-slate-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Code size={20} className="text-purple-400" /> Integration Hub
                        </h3>
                        <p className="text-slate-400 text-sm">Manage external classroom tools and API hooks.</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors uppercase tracking-wider">
                        + Add Service
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <IntegrationCard name="Zoom Meetings" status="Active" ping="14ms" icon={<Video size={20} />} color="bg-blue-500" />
                    <IntegrationCard name="Microsoft Teams" status="Active" ping="22ms" icon={<Users size={20} />} color="bg-indigo-600" />
                    <IntegrationCard name="Slack Notifications" status="Idle" ping="--" icon={<MessageCircle size={20} />} color="bg-purple-600" />
                </div>
            </BentoCard>
        </div>
    </div>
);

const AdminFinance = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard className="bg-[#1e293b]/50 border-slate-700">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Revenue</p>
                <h3 className="text-3xl font-black text-white">€128,450</h3>
                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-emerald-500"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">75% of annual goal</p>
            </BentoCard>
            <BentoCard className="bg-[#1e293b]/50 border-slate-700">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Avg. Revenue / User</p>
                <h3 className="text-3xl font-black text-white">€85.40</h3>
                <p className="text-emerald-400 text-xs font-bold mt-2">+5.2% vs last month</p>
            </BentoCard>
            <BentoCard className="bg-[#1e293b]/50 border-slate-700">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Pending Invoices</p>
                <h3 className="text-3xl font-black text-white">14</h3>
                <p className="text-orange-400 text-xs font-bold mt-2">€3,240 outstanding</p>
            </BentoCard>
        </div>

        <BentoCard colSpan="w-full" className="bg-[#1e293b]/30 border-slate-800">
            <h3 className="text-white font-bold text-lg mb-6">Recent Transactions</h3>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                                <DollarSign size={20} />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Tuition Payment #{1000 + i}</p>
                                <p className="text-slate-400 text-xs">Student: Alex P.</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-bold text-sm">+€120.00</p>
                            <p className="text-slate-500 text-xs">Today, 14:30</p>
                        </div>
                    </div>
                ))}
            </div>
        </BentoCard>
    </div>
);

const AdminUsers = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-center bg-[#1e293b]/50 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input type="text" placeholder="Search users..." className="bg-slate-900 border border-slate-700 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-700">All</button>
                    <button className="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-700">Teachers</button>
                    <button className="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-700">Students</button>
                </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                <Users size={16} /> Add User
            </button>
        </div>

        <BentoCard className="bg-[#1e293b]/30 border-slate-800 p-0 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="p-4 pl-6">User</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Last Active</th>
                            <th className="p-4 text-right pr-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {[
                            { name: 'Maria K.', role: 'Student', status: 'Active', color: 'bg-indigo-500' },
                            { name: 'John D.', role: 'Teacher', status: 'Active', color: 'bg-emerald-500' },
                            { name: 'Elena P.', role: 'Student', status: 'Inactive', color: 'bg-amber-500' },
                            { name: 'George S.', role: 'Admin', status: 'Online', color: 'bg-blue-500' },
                            { name: 'Anna M.', role: 'Student', status: 'Active', color: 'bg-indigo-500' },
                        ].map((user, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 pl-6 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${user.color}/20 flex items-center justify-center text-white text-xs font-bold`}>
                                        {user.name.charAt(0)}
                                    </div>
                                    <span className="text-white font-medium text-sm">{user.name}</span>
                                </td>
                                <td className="p-4 text-slate-300 text-sm">{user.role}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-slate-500 text-xs font-mono">2 mins ago</td>
                                <td className="p-4 text-right pr-6">
                                    <button className="text-slate-400 hover:text-white p-2">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </BentoCard>
    </div>
);

const AdminLogs = () => (
    <div className="space-y-6">
        <BentoCard className="bg-black border border-slate-800 font-mono text-sm relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-500 text-xs ml-2">system_logs.log</span>
            </div>
            <div className="mt-8 space-y-2 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                        <span className="text-slate-600 shrink-0">2026-02-10 14:32:{i < 10 ? '0' + i : i}</span>
                        <span className={i % 3 === 0 ? 'text-blue-400' : i % 5 === 0 ? 'text-amber-400' : 'text-slate-300'}>
                            {i % 3 === 0 ? '[INFO] User login successful (ID: 492)' : i % 5 === 0 ? '[WARN] API latency high (245ms)' : '[DEBUG] Rendering component <StudentDashboard />'}
                        </span>
                    </div>
                ))}
                <div className="flex gap-4 animate-pulse">
                    <span className="text-slate-600">2026-02-10 14:32:21</span>
                    <span className="text-emerald-400">_</span>
                </div>
            </div>
        </BentoCard>
    </div>
);

const AdminSecurity = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BentoCard className="bg-[#1e293b]/50 border-slate-700">
            <h3 className="text-white font-bold text-lg mb-6">Access Control</h3>
            <div className="space-y-6">
                {['Two-Factor Authentication (2FA)', 'Force SSL/TLS', 'IP Whitelisting'].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                        <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${i === 0 ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${i === 0 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </BentoCard>
        <BentoCard className="bg-[#1e293b]/50 border-slate-700">
            <h3 className="text-white font-bold text-lg mb-6">Recent Alerts</h3>
            <div className="space-y-4">
                <div className="flex gap-4 items-start p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                    <div>
                        <p className="text-red-400 font-bold text-sm">Failed Login Attempt</p>
                        <p className="text-red-400/70 text-xs mt-1">IP: 192.168.1.1 tried to access /admin/root</p>
                    </div>
                </div>
            </div>
        </BentoCard>
    </div>
);


// --- TEACHER VIEWS ---

const TeacherOverview = () => (
    <div className="space-y-8">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl font-black tracking-tight mb-2">Good Morning, Mr. Makris!</h2>
                <p className="text-violet-100 text-lg mb-8 font-medium">You have <span className="text-white font-bold border-b-2 border-white/30">3 classes</span> scheduled for today.</p>
                <div className="flex gap-4">
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl text-sm font-bold transition-transform hover:-translate-y-1 hover:shadow-lg">
                        View Full Calendar
                    </button>
                    <button className="bg-indigo-700/50 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors hover:bg-indigo-700 backdrop-blur-md">
                        Create New Session
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-900/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-6">
                <div>
                    <h3 className="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
                        <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl"><Video size={20} /></div>
                        Upcoming Sessions
                    </h3>
                    <div className="space-y-4">
                        <ClassCard time="14:00" title="Advanced Physics (Gr 12)" platform="Zoom" students={12} badge="Live" badgeColor="bg-red-100 text-red-600" />
                        <ClassCard time="15:30" title="Mathematics Tutoring" platform="Teams" students={1} badge="Scheduled" badgeColor="bg-blue-100 text-blue-600" />
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 h-fit sticky top-8">
                <h3 className="font-bold text-xl text-slate-900 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                    <ActionButton icon={FileText} label="Upload" color="bg-blue-50 text-blue-600 border border-blue-100" />
                    <ActionButton icon={Bell} label="Notify" color="bg-orange-50 text-orange-600 border border-orange-100" />
                    <ActionButton icon={Calendar} label="Schedule" color="bg-green-50 text-green-600 border border-green-100" />
                    <ActionButton icon={Settings} label="Settings" color="bg-slate-50 text-slate-600 border border-slate-100" />
                </div>
            </div>
        </div>
    </div>
);

const TeacherStudents = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600 font-bold">
                        S{i}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Student {i}</h4>
                        <p className="text-xs text-slate-500">Grade 12 • Physics</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 font-medium">Performance</span>
                            <span className="text-indigo-600 font-bold">{70 + i * 2}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${70 + i * 2}%` }}></div>
                        </div>
                    </div>
                    <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100">
                        View Profile
                    </button>
                </div>
            </div>
        ))}
    </div>
);

const TeacherGradebook = () => (
    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                    <th className="p-6 font-bold text-slate-700">Student</th>
                    <th className="p-6 font-bold text-slate-700">Test 1</th>
                    <th className="p-6 font-bold text-slate-700">Test 2</th>
                    <th className="p-6 font-bold text-slate-700">Midterm</th>
                    <th className="p-6 font-bold text-slate-700">Final</th>
                    <th className="p-6 font-bold text-slate-700">Average</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {[...Array(8)].map((_, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-6 font-bold text-slate-900">Student Name {i + 1}</td>
                        <td className="p-6 text-slate-600">85</td>
                        <td className="p-6 text-slate-600">92</td>
                        <td className="p-6 text-slate-600">88</td>
                        <td className="p-6 text-slate-400 italic">--</td>
                        <td className="p-6 font-bold text-indigo-600">88.3</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


// --- STUDENT VIEWS ---

const StudentOverview = () => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <BentoCard className="bg-white border-slate-100 text-slate-900 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                <h3 className="text-5xl font-black text-blue-600 mb-2 tracking-tight">17.8</h3>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2">Avg. Grade <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span></p>
            </BentoCard>
            <BentoCard className="bg-white border-slate-100 text-slate-900 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                <h3 className="text-5xl font-black text-emerald-600 mb-2 tracking-tight">92%</h3>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2">Attendance <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span></p>
            </BentoCard>
            <BentoCard className="bg-white border-slate-100 text-slate-900 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[4rem] transition-transform group-hover:scale-110" />
                <h3 className="text-5xl font-black text-purple-600 mb-2 tracking-tight">4</h3>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2">Pending Tasks <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span></p>
            </BentoCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-xl text-slate-900 mb-8">Today's Schedule</h3>
                <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                    <TimelineItem time="09:00" title="Algebra Test" type="Exam" color="bg-red-50 text-red-600 border border-red-100" />
                    <TimelineItem time="11:30" title="Physics Group B" type="Zoom" color="bg-blue-50 text-blue-600 border border-blue-100" />
                    <TimelineItem time="14:00" title="Essay Submission" type="Deadline" color="bg-amber-50 text-amber-600 border border-amber-100" />
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] p-8 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <CreditCard className="text-white/80" size={32} />
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20">DUE SOON</span>
                    </div>
                    <p className="text-indigo-100 text-sm mb-1 font-medium relative z-10">Next Tuition installment</p>
                    <h3 className="text-4xl font-black mb-8 relative z-10 tracking-tight">€120.00</h3>
                    <button className="relative z-10 w-full bg-white text-indigo-600 py-4 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                        Pay Now via Stripe
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const StudentAssignments = () => (
    <div className="space-y-6">
        {['Algebra Quadratic Equations', 'Physics Lab Report', 'History Essay'].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</h4>
                        <p className="text-xs text-slate-500">Due: Tomorrow, 23:59</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 text-xs font-bold rounded-full">Pending</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700">Submit</button>
                </div>
            </div>
        ))}
    </div>
);

const StudentGrades = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <h3 className="font-bold text-xl text-slate-900 mb-6">Performance Overview</h3>
        <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[65, 78, 85, 90, 88, 92, 95, 85, 80, 88, 92, 96].map((h, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-t-xl relative group h-full flex items-end">
                    <div className="w-full bg-indigo-500 rounded-t-xl transition-all duration-1000 group-hover:bg-indigo-400" style={{ height: `${h}%` }}></div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">Week {i + 1}</div>
                </div>
            ))}
        </div>
    </div>
);

const StudentPayments = () => (
    <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <p className="text-slate-400 text-sm font-medium mb-1">Current Balance</p>
            <h2 className="text-5xl font-black tracking-tight mb-8">€120.00</h2>
            <div className="space-y-4">
                <button className="w-full py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                    <CreditCard size={20} /> Pay with Card
                </button>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors">
                    Download Invoice
                </button>
            </div>
        </div>
    </div>
);

// --- SHARED COMPONENTS ---

const ChatInterface = ({ role }) => (
    <div className="bg-white h-[600px] rounded-[2rem] border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    <MessageCircle size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Classroom Chat</h3>
                    <p className="text-xs text-slate-500">Advanced Physics • 12 Online</p>
                </div>
            </div>
            <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20} /></button>
        </div>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50">
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 max-w-[80%]">
                    Hello everyone! Don't forget the assignment is due tomorrow.
                </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0"></div>
                <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[80%]">
                    Will the midterm cover Chapter 5?
                </div>
            </div>
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
            <input type="text" placeholder="Type a message..." className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20" />
        </div>
    </div>
);

const BentoCard = ({ children, className, colSpan = "" }) => (
    <div className={`rounded-3xl p-6 md:p-8 ${className} ${colSpan} transition-all`}>
        {children}
    </div>
);

const IntegrationCard = ({ name, status, ping, icon, color }) => (
    <div className="p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors border border-white/5 bg-white/5">
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl text-white ${color} shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <div>
                <p className="text-white font-bold text-sm tracking-wide">{name}</p>
                <div className="flex items-center gap-1.5 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : 'bg-slate-500'} animate-pulse`}></div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase">{status}</p>
                </div>
            </div>
        </div>
        <div className="text-[10px] font-mono text-slate-500 bg-black/20 px-2 py-1 rounded">{ping}</div>
    </div>
);

const ClassCard = ({ time, title, platform, students, badge, badgeColor }) => (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center gap-4 hover:border-indigo-500/50 hover:shadow-md transition-all group">
        <div className="flex items-center justify-between md:block">
            <div className="bg-slate-50 text-slate-700 font-bold px-4 py-3 rounded-xl text-sm min-w-[80px] text-center font-mono group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                {time}
            </div>
            <span className={`md:hidden px-2 py-1 rounded text-[10px] font-bold uppercase ${badgeColor}`}>{badge}</span>
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">{title}</h4>
            <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-2">
                <Users size={12} /> {students} Students <span className="text-slate-300">|</span> {platform}
            </p>
        </div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
            <span className={`hidden md:block px-3 py-1 rounded-lg text-xs font-bold uppercase ${badgeColor}`}>{badge}</span>
            <button className="flex-1 md:flex-none px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/20">
                Launch
            </button>
        </div>
    </div>
);

const TimelineItem = ({ time, title, type, color }) => (
    <div className="flex gap-6 relative group">
        <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center z-10 text-xs font-bold text-slate-400 group-hover:border-indigo-100 group-hover:text-indigo-600 transition-colors">
            {time}
        </div>
        <div className={`flex-1 p-5 rounded-2xl transition-all hover:translate-x-1 ${color}`}>
            <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-900">{title}</h4>
                <span className="px-2 py-1 bg-white/50 rounded-lg text-[10px] font-bold uppercase tracking-wider">{type}</span>
            </div>
            <p className="text-xs opacity-70 font-medium">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
);

const ActionButton = ({ icon: Icon, label, color }) => (
    <button className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl ${color} hover:brightness-95 transition-all text-center`}>
        <div className="p-3 bg-white/60 rounded-xl backdrop-blur-sm">
            <Icon size={20} />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </button>
);

const AdminLayout = ({ children, activeTab, setActiveTab }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden bg-[#0f172a] text-slate-300 font-mono text-sm">
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="flex-shrink-0 border-r border-slate-800 bg-[#0f172a] hidden md:flex flex-col relative z-20"
            >
                <div className="h-16 flex items-center px-6 border-b border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <div className="w-8 h-8 bg-indigo-600 rounded-sm flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg shadow-indigo-500/20">
                        <Shield size={18} />
                    </div>
                    {isSidebarOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-3 font-bold text-white tracking-wider flex flex-col"
                        >
                            <span>CMD_CENTER</span>
                            <span className="text-[10px] text-slate-500 font-normal">v2.4.0-RC</span>
                        </motion.div>
                    )}
                </div>

                <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-none">
                    <AdminNavLinks activeTab={activeTab} setActiveTab={setActiveTab} collapsed={!isSidebarOpen} />
                </div>

                <div className="p-4 border-t border-slate-800">
                    <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
                        <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">GM</div>
                        {isSidebarOpen && (
                            <div className="overflow-hidden">
                                <p className="text-white text-xs font-bold truncate">Gerasimos M.</p>
                                <p className="text-slate-500 text-[10px] truncate">Root Admin</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.aside>

            <main className="flex-1 flex flex-col min-w-0 bg-[#020617] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                </div>

                <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 relative z-10 bg-[#0f172a]/80 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                        <h2 className="text-white font-bold tracking-tight text-lg">Dashboard <span className="text-slate-600">/</span> <span className="text-indigo-400 capitalize">{activeTab}</span></h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-emerald-400 text-xs font-mono font-bold">SYSTEM_OPTIMAL</span>
                        </div>
                        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                            <Bell size={18} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#0f172a]"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 relative z-10 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {children}
                </div>
            </main>
        </div>
    );
};

const UserLayout = ({ role, children, activeTab, setActiveTab }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            <aside className="hidden md:flex w-72 flex-col border-r border-slate-200 bg-white">
                <div className="h-24 flex items-center px-8">
                    <h1 className="text-2xl font-black text-indigo-600 tracking-tighter">Prooptiki<span className="text-slate-300">.</span></h1>
                </div>

                <div className="flex-1 px-4 pb-4 flex flex-col">
                    <div className="mb-8 px-2">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg ${role === 'teacher' ? 'bg-indigo-600 shadow-indigo-200' : 'bg-blue-500 shadow-blue-200'}`}>
                                {role === 'teacher' ? 'T' : 'S'}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">Gerasimos</p>
                                <p className="text-xs text-slate-400 font-medium capitalize tracking-wide">{role} Acc.</p>
                            </div>
                        </div>
                    </div>

                    <UserNavLinks role={role} activeTab={activeTab} setActiveTab={setActiveTab} />

                    <div className="mt-auto px-2">
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all text-sm font-bold group">
                            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40 flex justify-around p-2 safe-area-bottom shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.1)]">
                <UserNavLinks role={role} activeTab={activeTab} setActiveTab={setActiveTab} mobile />
            </div>

            <main className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] relative">
                <header className="md:hidden h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
                    <span className="font-black text-indigo-600 text-xl tracking-tighter">Prooptiki.</span>
                    <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20"></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-10 pb-28 md:pb-10 scrollbar-hide">
                    <div className="max-w-7xl mx-auto">
                        <header className="mb-8 hidden md:block">
                            <h2 className="text-4xl font-extrabold text-slate-900 capitalize tracking-tight mb-2">Hello, {role}! 👋</h2>
                            <p className="text-slate-500 text-lg">Here's what's on your agenda today.</p>
                        </header>

                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
