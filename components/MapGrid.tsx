import React, { useCallback } from 'react';
import { TILE_MAP } from '../constants';
import { GridState } from '../types';
import { TileIcon } from './TileIcon';

interface MapGridProps {
  grid: GridState;
  onCellClick: (row: number, col: number) => void;
  onCellEnter: (row: number, col: number) => void;
}

export const MapGrid: React.FC<MapGridProps> = ({ grid, onCellClick, onCellEnter }) => {
  const handleMouseDown = useCallback((r: number, c: number) => {
    onCellClick(r, c);
  }, [onCellClick]);

  const handleMouseEnter = useCallback((r: number, c: number) => {
    onCellEnter(r, c);
  }, [onCellEnter]);

  // Derive dimensions from current grid state
  const rows = grid.length;
  const cols = grid[0]?.length || 0;

  return (
    <div className="w-full h-full p-8 flex items-center justify-center bg-slate-950 overflow-auto">
      <div 
        className="grid bg-slate-900 border-4 border-slate-800 shadow-2xl shadow-black rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(32px, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(32px, 1fr))`,
          aspectRatio: `${cols}/${rows}`,
          width: '100%',
          maxWidth: '1200px', // Prevent it from getting too huge on large screens
        }}
        onMouseLeave={() => {
            // Optional: stop drawing state if needed
        }}
      >
        {grid.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            const tile = TILE_MAP[cell.tileId];
            return (
              <div
                key={`${rIndex}-${cIndex}`}
                onMouseDown={(e) => {
                    e.preventDefault(); // prevent drag behavior
                    handleMouseDown(rIndex, cIndex);
                }}
                onMouseEnter={(e) => {
                    if (e.buttons === 1) {
                         handleMouseEnter(rIndex, cIndex);
                    }
                }}
                className="relative border border-slate-800/30 cursor-crosshair hover:ring-2 hover:ring-white/50 hover:z-10 transition-transform duration-200"
                title={`Row: ${rIndex + 1}, Col: ${cIndex + 1}, Rot: ${cell.rotation}°`}
              >
                <div className="w-full h-full" style={{ transform: `rotate(${cell.rotation}deg)` }}>
                    {tile && <TileIcon tile={tile} className="w-full h-full" />}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};