import React, { useMemo, useState } from 'react';
import { GridState, TileCategory } from '../types';
import { TILES } from '../constants';

interface ReportPanelProps {
  grid: GridState;
  inventory: Record<string, number>;
  onUpdateInventory: (id: string, count: number) => void;
  onExportGrid: () => void;
  onImportGrid: () => void;
  onExportCollection: () => void;
  onImportCollection: () => void;
}

export const ReportPanel: React.FC<ReportPanelProps> = ({ 
  grid, 
  inventory,
  onUpdateInventory,
  onExportGrid,
  onImportGrid,
  onExportCollection,
  onImportCollection
}) => {
  const [activeTab, setActiveTab] = useState<'report' | 'collection'>('report');

  // Calculate counts for Report
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    grid.flat().forEach(cell => {
      const tileId = cell.tileId;
      map.set(tileId, (map.get(tileId) || 0) + 1);
    });
    return map;
  }, [grid]);

  // Report: Used Tiles sorted
  const usedTiles = useMemo(() => {
    return TILES.filter(t => (counts.get(t.id) || 0) > 0).sort((a, b) => {
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        return a.label.localeCompare(b.label);
    });
  }, [counts]);

  const totalTiles = grid.flat().length;

  // Collection: All tiles sorted by category
  const allTilesGrouped = useMemo(() => {
     const grouped: Record<string, typeof TILES> = {};
     Object.values(TileCategory).forEach(cat => grouped[cat] = []);
     TILES.forEach(tile => {
         if(!grouped[tile.category]) grouped[tile.category] = [];
         grouped[tile.category].push(tile);
     });
     return grouped;
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-800">
      
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-800 bg-slate-900">
        <button 
          onClick={() => setActiveTab('report')} 
          className={`flex-1 py-4 text-sm font-bold tracking-wide transition-colors ${
            activeTab === 'report' 
              ? 'text-brand-400 border-b-2 border-brand-400 bg-slate-800/50' 
              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
          }`}
        >
          Bill of Materials
        </button>
        <button 
          onClick={() => setActiveTab('collection')} 
          className={`flex-1 py-4 text-sm font-bold tracking-wide transition-colors ${
            activeTab === 'collection' 
              ? 'text-brand-400 border-b-2 border-brand-400 bg-slate-800/50' 
              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
          }`}
        >
          My Collection
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        
        {/* === REPORT TAB === */}
        {activeTab === 'report' && (
          <>
            <div className="p-6 border-b border-slate-800">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-white">Required Tiles</h2>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        Total: {totalTiles}
                    </span>
                </div>
                <p className="text-sm text-slate-400">
                    Calculated based on current map layout. Red numbers indicate you need more tiles than you own.
                </p>
            </div>
            
            <div className="p-6">
              {usedTiles.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-slate-500 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p>Map is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {Array.from(new Set(usedTiles.map(t => t.category))).map(cat => (
                      <div key={cat}>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 ml-1">{cat}</h3>
                          <div className="space-y-2">
                              {usedTiles.filter(t => t.category === cat).map(tile => {
                                  const needed = counts.get(tile.id) || 0;
                                  const owned = inventory[tile.id] || 0;
                                  const isMissing = needed > owned;

                                  return (
                                    <div key={tile.id} className={`flex items-center justify-between p-3 rounded-lg border ${isMissing ? 'bg-rose-900/10 border-rose-900/30' : 'bg-slate-800 border-slate-700/50'}`}>
                                        <div className="flex items-center gap-3">
                                            <div 
                                                className="w-8 h-8 rounded border border-white/10 shadow-sm flex-shrink-0"
                                                style={{ backgroundColor: tile.bgColor }}
                                            ></div>
                                            <span className="text-sm font-medium text-slate-200">{tile.label}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-lg font-bold font-mono block leading-none ${isMissing ? 'text-rose-400' : 'text-brand-400'}`}>
                                                {needed}
                                            </span>
                                            <span className={`text-[10px] ${isMissing ? 'text-rose-300/70' : 'text-slate-500'}`}>
                                                Have: {owned}
                                            </span>
                                        </div>
                                    </div>
                                  );
                              })}
                          </div>
                      </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* === COLLECTION TAB === */}
        {activeTab === 'collection' && (
          <div className="p-6">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-white mb-2">My Inventory</h2>
                <p className="text-sm text-slate-400">
                    Enter the number of tiles you own. Your collection is saved automatically in your browser.
                </p>
            </div>

            <div className="space-y-8">
                {Object.keys(allTilesGrouped).map((cat) => (
                    <div key={cat}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 ml-1 sticky top-0 bg-slate-900 py-2 z-10 border-b border-slate-800/50">
                            {cat}
                        </h3>
                        <div className="space-y-2">
                            {allTilesGrouped[cat].map(tile => (
                                <div key={tile.id} className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded-lg transition-colors group">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div 
                                            className="w-6 h-6 rounded border border-white/10 shadow-sm flex-shrink-0"
                                            style={{ backgroundColor: tile.bgColor }}
                                        ></div>
                                        <span className="text-sm text-slate-300 truncate group-hover:text-white transition-colors">
                                            {tile.label}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                                            onClick={() => onUpdateInventory(tile.id, Math.max(0, (inventory[tile.id] || 0) - 1))}
                                        >
                                            -
                                        </button>
                                        <input 
                                            type="number" 
                                            min="0"
                                            value={inventory[tile.id] || 0}
                                            onChange={(e) => {
                                                const val = parseInt(e.target.value);
                                                onUpdateInventory(tile.id, isNaN(val) ? 0 : Math.max(0, val));
                                            }}
                                            className="w-12 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-center text-sm text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
                                        />
                                        <button 
                                            className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                                            onClick={() => onUpdateInventory(tile.id, (inventory[tile.id] || 0) + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-slate-800 bg-slate-900/50">
        <div className="flex gap-3">
            {activeTab === 'report' ? (
                <>
                    <button 
                        onClick={onImportGrid}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 text-sm font-medium"
                        title="Import JSON"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Import Grid
                    </button>
                    <button 
                        onClick={onExportGrid}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors shadow-lg shadow-brand-600/20 text-sm font-medium"
                        title="Export JSON"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Export Grid
                    </button>
                </>
            ) : (
                <>
                    <button 
                        onClick={onImportCollection}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 text-sm font-medium"
                        title="Import JSON"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Import Collection
                    </button>
                    <button 
                        onClick={onExportCollection}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors shadow-lg shadow-brand-600/20 text-sm font-medium"
                        title="Export JSON"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Export Collection
                    </button>
                </>
            )}
        </div>
      </div>
    </div>
  );
};