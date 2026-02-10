import React from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';

const FilterBar = ({ category, setCategory, searchQuery, setSearchQuery, totalItems }) => {
    return (
        <div className="space-y-3 sm:space-y-4">
            {/* Top row — Filter button + view toggles */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-white text-sm font-medium hover:bg-gray-800 transition sm:w-auto">
                    <Filter size={14} /> Filters
                </button>

                <div className="flex items-center gap-2 justify-end">
                    <button className="p-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition"><LayoutGrid size={16} /></button>
                    <button className="p-2 text-gray-500 hover:text-white transition"><List size={16} /></button>
                </div>
            </div>

            {/* Filter row — Category + Search */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block tracking-wider">Category</label>
                    <select
                        className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white outline-none focus:border-green-500 appearance-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Trades">Trades</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                </div>

                <div className="relative flex-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block tracking-wider">Search</label>
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search templates or tags..."
                            className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 pl-9 text-sm text-white outline-none focus:border-green-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Info row */}
            <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 pt-1">
                <span>Total {totalItems || 0} template(s)</span>
            </div>
        </div>
    );
};

export default FilterBar;
