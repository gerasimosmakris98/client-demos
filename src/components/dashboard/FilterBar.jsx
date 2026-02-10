import React from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';

const FilterBar = ({ category, setCategory, searchQuery, setSearchQuery }) => {
    return (
        <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

                {/* Visual Fake Buttons for Screenshot Accuracy */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white text-sm hover:bg-gray-800 transition">
                    <Filter size={16} /> Filters
                </button>

                <div className="flex items-center gap-2 ml-auto">
                    <button className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition"><LayoutGrid size={18} /></button>
                    <button className="p-2 text-gray-500 hover:text-white transition"><List size={18} /></button>
                    <button className="p-2 text-gray-500 hover:text-white transition"><LayoutGrid size={18} className="opacity-50" /></button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Category Dropdown Mock */}
                <div className="relative flex-1">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Category</label>
                    <select
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white outline-none focus:border-green-500 appearance-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                    </select>
                </div>

                {/* Tags Search Mock */}
                <div className="relative flex-1">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Tags</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Filter by tags..."
                            className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white outline-none focus:border-green-500 pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {/* Fake "search" icon acting as tag icon? or just keep simple */}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 pt-2">
                <span>Total 5 rows(s)</span>
                <div className="flex gap-2 items-center">
                    <span>Rows per page</span>
                    <select className="bg-gray-900 border border-gray-800 rounded p-1 text-white"><option>20</option></select>
                    <span>Page 1 of 1</span>
                    <div className="flex gap-1">
                        <button className="p-1 border border-gray-800 rounded hover:bg-gray-800">«</button>
                        <button className="p-1 border border-gray-800 rounded hover:bg-gray-800">‹</button>
                        <button className="p-1 border border-gray-800 rounded hover:bg-gray-800">›</button>
                        <button className="p-1 border border-gray-800 rounded hover:bg-gray-800">»</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
