import React from 'react';
import { Search } from 'lucide-react';

/* Generic table view for custom tabs */
const DataTableView = ({ tab, c, t }) => {
    const columns = tab.columns || ['Name', 'Status', 'Date', 'Action'];
    const rows = tab.rows || [];
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0e1425] p-4 rounded-2xl border border-white/[0.06]">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input type="text" placeholder={`${t.search} ${tab.label || ''}...`} className="w-full bg-[#080c16] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-white/20" />
                </div>
                <button className={`bg-gradient-to-r ${c.gradient} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 shadow-lg ${c.shadow}`}>
                    + {t.add} {tab.label?.replace(/s$/, '') || 'Item'}
                </button>
            </div>
            <div className="bg-[#0e1425] rounded-2xl border border-white/[0.06] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#0a0e1a] text-slate-500 text-[10px] uppercase tracking-wider">
                            <tr>
                                {columns.map((col, i) => (
                                    <th key={i} className={`p-4 font-bold ${i === 0 ? 'pl-6' : ''} ${i === columns.length - 1 ? 'text-right pr-6' : ''}`}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04]">
                            {rows.length > 0 ? rows.map((row, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                    {row.map((cell, j) => (
                                        <td key={j} className={`p-4 ${j === 0 ? 'pl-6 font-medium text-white' : 'text-slate-400'} ${j === row.length - 1 ? 'text-right pr-6' : ''}`}>
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={columns.length} className="p-8 text-center text-slate-500 text-xs italic">
                                        No data available for {tab.label}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataTableView;
