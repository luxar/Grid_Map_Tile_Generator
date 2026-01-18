import React from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl transform transition-all" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to Use
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
            {/* Section 1: Drawing */}
            <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-400 font-bold border border-brand-500/30">1</div>
                <div>
                    <h3 className="text-lg font-medium text-white mb-1">Design Your Map</h3>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm marker:text-slate-600">
                        <li><strong>Select a Tile:</strong> Choose from the categories in the left sidebar (Terrain, Roads, Channels, etc.).</li>
                        <li><strong>Place:</strong> Click on any grid cell to place the selected tile.</li>
                        <li><strong>Rotate:</strong> Click on an already placed tile to rotate it 90 degrees.</li>
                        <li><strong>Paint:</strong> Click and drag across the grid to place multiple tiles quickly.</li>
                    </ul>
                </div>
            </div>

            {/* Section 2: Management */}
            <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">2</div>
                <div>
                    <h3 className="text-lg font-medium text-white mb-1">Manage Resources</h3>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm marker:text-slate-600">
                        <li><strong>Bill of Materials:</strong> The right panel automatically calculates all the tiles needed for your current layout.</li>
                        <li><strong>Inventory Tracking:</strong> Switch to the "My Collection" tab to enter the tiles you already own.</li>
                        <li><strong>Missing Items:</strong> In the report view, tiles you lack will be highlighted in <span className="text-rose-400">red</span>.</li>
                    </ul>
                </div>
            </div>

             {/* Section 3: Tools */}
             <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">3</div>
                <div>
                    <h3 className="text-lg font-medium text-white mb-1">Tools & Exports</h3>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm marker:text-slate-600">
                        <li><strong>Resize:</strong> Change the grid dimensions using the "Resize Map" button.</li>
                        <li><strong>Save Work:</strong> Use "Export Grid" to save your layout as a JSON file to your computer.</li>
                        <li><strong>Import:</strong> Load a previously saved grid to continue working.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};