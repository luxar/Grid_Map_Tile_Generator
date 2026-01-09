import React, { useState, useEffect } from 'react';

interface ResizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (rows: number, cols: number) => void;
  currentRows: number;
  currentCols: number;
}

export const ResizeModal: React.FC<ResizeModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  currentRows, 
  currentCols 
}) => {
  const [rows, setRows] = useState(currentRows);
  const [cols, setCols] = useState(currentCols);

  useEffect(() => {
    if (isOpen) {
      setRows(currentRows);
      setCols(currentCols);
    }
  }, [isOpen, currentRows, currentCols]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl shadow-2xl transform transition-all">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">Resize Grid</h2>
          <p className="text-sm text-slate-400 mt-1">
            Changing the size will preserve existing tiles from the top-left corner.
          </p>
        </div>
        
        <div className="p-6 grid grid-cols-2 gap-6">
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

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-3 rounded-b-xl">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(rows, cols)}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-brand-600/20 transition-all hover:scale-105 active:scale-95"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};