import React, { useState, useEffect } from 'react';
import { MapGrid } from './components/MapGrid';
import { TilePalette } from './components/TilePalette';
import { ReportPanel } from './components/ReportPanel';
import { ResizeModal } from './components/ResizeModal';
import { GridState, CellData } from './types';
import { DEFAULT_TILE, DEFAULT_COLS, DEFAULT_ROWS } from './constants';

const createInitialGrid = (rows: number, cols: number): GridState => 
  Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => ({ tileId: DEFAULT_TILE, rotation: 0 }))
  );

export default function App() {
  const [grid, setGrid] = useState<GridState>(() => createInitialGrid(DEFAULT_ROWS, DEFAULT_COLS));
  const [selectedTileId, setSelectedTileId] = useState<string>(DEFAULT_TILE);
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [isResizeModalOpen, setIsResizeModalOpen] = useState(false);

  // Load inventory from local storage on mount
  useEffect(() => {
    const savedInventory = localStorage.getItem('tilemap_inventory');
    if (savedInventory) {
      try {
        setInventory(JSON.parse(savedInventory));
      } catch (e) {
        console.error("Failed to load inventory from local storage", e);
      }
    }
  }, []);

  const handleUpdateInventory = (id: string, count: number) => {
    setInventory(prev => {
      const next = { ...prev, [id]: count };
      localStorage.setItem('tilemap_inventory', JSON.stringify(next));
      return next;
    });
  };

  const handleCellClick = (row: number, col: number) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(r => r.map(c => ({ ...c })));
      const cell = newGrid[row][col];

      if (cell.tileId === selectedTileId) {
        // Rotate if same tile
        cell.rotation = (cell.rotation + 90) % 360;
      } else {
        // Place new tile
        cell.tileId = selectedTileId;
        cell.rotation = 0;
      }
      return newGrid;
    });
  };

  const handleCellEnter = (row: number, col: number) => {
    // This supports drag-to-paint
    setGrid(prevGrid => {
      // Optimization: only update if different to avoid rerenders
      if (prevGrid[row][col].tileId === selectedTileId) return prevGrid;
      
      const newGrid = prevGrid.map(r => r.map(c => ({ ...c })));
      newGrid[row][col] = { tileId: selectedTileId, rotation: 0 };
      return newGrid;
    });
  };

  const handleReset = () => {
      // Explicitly set all tiles to 'ground' based on current grid size
      setGrid(prevGrid => 
          Array.from({ length: prevGrid.length }, () => 
              Array.from({ length: prevGrid[0].length }, () => ({ tileId: 'ground', rotation: 0 }))
          )
      );
  };

  const handleResize = (newRows: number, newCols: number) => {
    setGrid(prevGrid => {
      const newGrid: GridState = [];
      for (let r = 0; r < newRows; r++) {
        const newRow: CellData[] = [];
        for (let c = 0; c < newCols; c++) {
          if (r < prevGrid.length && c < prevGrid[0].length) {
            // Preserve existing cell
            newRow.push({ ...prevGrid[r][c] });
          } else {
            // New cell
            newRow.push({ tileId: DEFAULT_TILE, rotation: 0 });
          }
        }
        newGrid.push(newRow);
      }
      return newGrid;
    });
    setIsResizeModalOpen(false);
  };

  const handleExportGrid = () => {
      const exportData = {
          rows: grid.length,
          cols: grid[0]?.length || 0,
          grid: grid
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "tilemap_grid.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
  };

  const handleImportGrid = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (event) => {
              try {
                  const content = event.target?.result as string;
                  const data = JSON.parse(content);

                  // Support both wrapped format and legacy raw array
                  if (data.grid && Array.isArray(data.grid)) {
                      setGrid(data.grid);
                  } else if (Array.isArray(data)) {
                      setGrid(data);
                  } else {
                      alert('Invalid grid file format');
                  }
              } catch (error) {
                  console.error('Error importing grid:', error);
                  alert('Failed to import grid file. Check console for details.');
              }
          };
          reader.readAsText(file);
      };
      input.click();
  };

  const handleExportCollection = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inventory, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "tilemap_inventory.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
  };

  const handleImportCollection = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (event) => {
              try {
                  const content = event.target?.result as string;
                  const data = JSON.parse(content);
                  if (typeof data === 'object' && data !== null) {
                      setInventory(data);
                      localStorage.setItem('tilemap_inventory', JSON.stringify(data));
                  } else {
                      alert('Invalid collection file format');
                  }
              } catch (error) {
                  console.error('Error importing collection:', error);
                  alert('Failed to import collection file. Check console for details.');
              }
          };
          reader.readAsText(file);
      };
      input.click();
  };

  return (
    <div className="flex flex-row h-screen w-full bg-slate-950 text-slate-200">
        
        <ResizeModal 
          isOpen={isResizeModalOpen}
          onClose={() => setIsResizeModalOpen(false)}
          onConfirm={handleResize}
          currentRows={grid.length}
          currentCols={grid[0]?.length || 0}
        />

        {/* Left Side: Palette (Toolbox) - Fixed width */}
        <div className="w-64 h-full flex-shrink-0 z-20 shadow-xl">
            <TilePalette 
                selectedTileId={selectedTileId} 
                onSelectTile={setSelectedTileId} 
            />
        </div>

        {/* Center: Map Area - Flexible grow */}
        <div className="flex-1 h-full relative flex flex-col min-w-0">
            {/* Header / Top Bar */}
            <div className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-6 backdrop-blur-sm z-10">
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-500 animate-pulse"></span>
                    TileMap Architect
                </h1>
                
                <div className="flex items-center gap-4">
                    <div className="text-sm text-slate-400 hidden lg:block">
                        {grid[0]?.length}x{grid.length} Grid • Click to rotate • Drag to paint
                    </div>
                    <div className="h-6 w-px bg-slate-800 mx-2 hidden lg:block"></div>
                    
                    <button 
                        onClick={() => setIsResizeModalOpen(true)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 text-xs font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        Resize Map
                    </button>

                    <button 
                        onClick={handleReset}
                        className="flex items-center gap-2 px-3 py-1.5 bg-rose-950/30 hover:bg-rose-900/40 text-rose-400 rounded-lg transition-colors border border-rose-900/30 text-xs font-medium"
                        title="Set all tiles to Ground"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear Map
                    </button>
                </div>
            </div>

            {/* Canvas */}
            <div className="flex-1 bg-slate-950 relative overflow-hidden">
                 {/* Subtle grid background pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ 
                        backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', 
                        backgroundSize: '20px 20px' 
                    }}>
                </div>
                
                <MapGrid 
                    grid={grid} 
                    onCellClick={handleCellClick} 
                    onCellEnter={handleCellEnter}
                />
            </div>
        </div>

        {/* Right Side: Report - 1/3 width essentially, but responsive */}
        <div className="w-80 lg:w-96 h-full flex-shrink-0 z-20 shadow-xl">
            <ReportPanel 
                grid={grid} 
                inventory={inventory}
                onUpdateInventory={handleUpdateInventory}
                onExportGrid={handleExportGrid}
                onImportGrid={handleImportGrid}
                onExportCollection={handleExportCollection}
                onImportCollection={handleImportCollection}
            />
        </div>

    </div>
  );
}