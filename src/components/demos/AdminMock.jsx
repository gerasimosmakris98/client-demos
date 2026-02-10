import React from 'react';
import { LayoutDashboard, Users, DollarSign, Settings, Bell, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminMock = ({ title, stats, data }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex font-sans text-gray-800">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
                <div className="p-4 border-b border-gray-800 font-bold text-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">A</div> {title} Admin
                </div>
                <div className="p-4 space-y-2 flex-1">
                    <div className="flex items-center gap-3 p-3 bg-blue-600 rounded cursor-pointer">
                        <LayoutDashboard size={18} /> Dashboard
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded cursor-pointer text-gray-400 hover:text-white">
                        <Users size={18} /> Customers
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded cursor-pointer text-gray-400 hover:text-white">
                        <DollarSign size={18} /> Revenue
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded cursor-pointer text-gray-400 hover:text-white">
                        <Settings size={18} /> Settings
                    </div>
                </div>
                <div className="p-4 border-t border-gray-800 text-xs text-gray-500">
                    v2.4.0 (Demo Build)
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                    <div className="md:hidden"><Menu /></div>
                    <div className="flex items-center gap-4 bg-gray-100 px-3 py-1.5 rounded-lg w-96 ml-4">
                        <Search size={18} className="text-gray-400" />
                        <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-full" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell size={20} className="text-gray-400" />
                        <div className="w-8 h-8 rounded-full bg-gray-300" />
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6 overflow-auto flex-1">
                    <div className="mb-6 flex justify-between items-end">
                        <h1 className="text-2xl font-bold">Overview</h1>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-black transition-colors">Download Report</button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                            >
                                <div className="text-gray-500 text-sm font-medium mb-1">{stat.label}</div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className={`text-xs mt-2 ${stat.trend > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {stat.trend > 0 ? '+' : ''}{stat.trend}% from last month
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chart Area Mock */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8 h-80 flex items-center justify-center bg-grid-slate-100">
                        <div className="text-gray-400 flex flex-col items-center">
                            <div className="w-full h-40 flex items-end gap-2 mb-2">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="w-8 bg-blue-100 rounded-t" style={{ height: `${Math.random() * 100}%` }} />
                                ))}
                            </div>
                            <p>Annual Performance Overview</p>
                        </div>
                    </div>

                    {/* Recent Activity Mock */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-gray-200 font-semibold">Recent Activity</div>
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="p-4 font-medium">User / Event</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium">Date</th>
                                    <th className="p-4 font-medium text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((row) => (
                                    <tr key={row} className="border-t border-gray-100 hover:bg-gray-50">
                                        <td className="p-4">
                                            <div className="font-medium">Order #{2030 + row}</div>
                                            <div className="text-xs text-gray-500">Client ID: 883{row}</div>
                                        </td>
                                        <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Completed</span></td>
                                        <td className="p-4 text-gray-500">Today, 14:0{row}</td>
                                        <td className="p-4 text-right font-medium">$1{row}5.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminMock;
