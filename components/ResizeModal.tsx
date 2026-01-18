import React, { useState, useEffect } from 'react';

interface ResizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (rows: number, cols: number, tileSize: number) => void;
  currentRows: number;
  currentCols: number;
  currentTileSize: number;
}

export const ResizeModal: React.FC<ResizeModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  currentRows, 
  currentCols,
  currentTileSize
}) => {
  const [rows, setRows] = useState(currentRows);
  const [cols, setCols] = useState(currentCols);
  const [tileSize, setTileSize] = useState(currentTileSize);

  useEffect(() => {
    if (isOpen) {
      setRows(currentRows);
      setCols(currentCols);
      setTileSize(currentTileSize);
    }
  }, [isOpen, currentRows, currentCols, currentTileSize]);

  if (!isOpen) return null;

  const totalWidth = cols * tileSize;
  const totalHeight = rows * tileSize;
  const totalWidthFt = (totalWidth / 12).toFixed(1);
  const totalHeightFt = (totalHeight / 12).toFixed(1);
  const totalWidthCm = (totalWidth * 2.54).toFixed(0);
  const totalHeightCm = (totalHeight * 2.54).toFixed(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl shadow-2xl transform transition-all">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">Resize Grid</h2>
          <p className="text-sm text-slate-400 mt-1">
            Define the grid layout and physical tile dimensions.
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Width (Columns)</label>
              <input 
                type="number" 
                min="1" 
                max="50"
                value={cols}
                onChange={(e) => setCols(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Height (Rows)</label>
              <input 
                type="number" 
                min="1" 
                max="50"
                value={rows}
                onChange={(e) => setRows(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Tile Size (Inches)</label>
            <div className="flex items-center gap-3">
               <input 
                type="number" 
                min="1" 
                max="24"
                value={tileSize}
                onChange={(e) => setTileSize(Math.max(1, Math.min(24, parseFloat(e.target.value) || 1)))}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50"
              />
              <span className="text-sm text-slate-500 whitespace-nowrap">square inches</span>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
             <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Total Dimensions</div>
             <div className="flex flex-col gap-1">
                 <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">{totalWidth}" x {totalHeight}"</span>
                    <span className="text-sm text-slate-400">({totalWidthFt}' x {totalHeightFt}')</span>
                 </div>
                 <div className="text-sm text-slate-500 font-mono">
                    {totalWidthCm} cm x {totalHeightCm} cm
                 </div>
             </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-3 rounded-b-xl">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(rows, cols, tileSize)}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-brand-600/20 transition-all hover:scale-105 active:scale-95"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};