import React, { useMemo, useState } from 'react';
import { TILES } from '../constants';
import { TileCategory } from '../types';
import { TileIcon } from './TileIcon';

interface TilePaletteProps {
  selectedTileId: string;
  onSelectTile: (id: string) => void;
}

export const TilePalette: React.FC<TilePaletteProps> = ({ selectedTileId, onSelectTile }) => {
  const [activeCategory, setActiveCategory] = useState<TileCategory>(TileCategory.TERRAIN);

  // Group tiles by category for rendering
  const categories = useMemo(() => {
    return Object.values(TileCategory);
  }, []);

  const filteredTiles = useMemo(() => {
    return TILES.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-xl font-bold text-slate-100">Tools</h2>
        <p className="text-xs text-slate-400 mt-1">Select a tile type to paint</p>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto p-2 gap-1 border-b border-slate-800 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tile Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredTiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => onSelectTile(tile.id)}
              className={`group flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all ${
                selectedTileId === tile.id
                  ? 'border-brand-500 bg-slate-800 shadow-lg shadow-brand-500/20'
                  : 'border-transparent bg-slate-800/50 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden ring-1 ring-slate-900/10 shadow-sm">
                <TileIcon tile={tile} />
              </div>
              <span className={`text-xs text-center font-medium ${
                selectedTileId === tile.id ? 'text-brand-400' : 'text-slate-400 group-hover:text-slate-200'
              }`}>
                {tile.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};