import { TileCategory, TileDefinition } from './types';

export const DEFAULT_COLS = 15;
export const DEFAULT_ROWS = 12;

export const TILES: TileDefinition[] = [
  // Terrain
  { id: 'none', label: 'None', category: TileCategory.TERRAIN, bgColor: '#000000', fgColor: '#000000', iconType: 'solid' },
  { id: 'ground', label: 'Ground', category: TileCategory.TERRAIN, bgColor: '#4ade80', fgColor: '#22c55e', iconType: 'solid' },
  { id: 'sea', label: 'Sea', category: TileCategory.TERRAIN, bgColor: '#3b82f6', fgColor: '#2563eb', iconType: 'waves' },
  { id: 'metal', label: 'Metal', category: TileCategory.TERRAIN, bgColor: '#94a3b8', fgColor: '#64748b', iconType: 'grid' },

  // Roads
  { id: 'road_i', label: 'Road I', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_i' },
  { id: 'road_l', label: 'Road L', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_l' },
  { id: 'road_t', label: 'Road T', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_t' },
  { id: 'road_x', label: 'Road X', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_x' },
  { id: 'road_end', label: 'Road End', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_end' },
  { id: 'bridge_start', label: 'Bridge Start', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f59e0b', iconType: 'bridge' },
  { id: 'uphill', label: 'Uphill', category: TileCategory.ROAD, bgColor: '#65a30d', fgColor: '#334155', iconType: 'uphill' },

  // Channels
  { id: 'channel_i', label: 'Channel I', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_i' },
  { id: 'channel_l', label: 'Channel L', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_l' },
  { id: 'channel_t', label: 'Channel T', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_t' },
  { id: 'channel_x', label: 'Channel X', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_x' },
  { id: 'channel_end', label: 'Channel End', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_end' },
  { id: 'channel_footbridge', label: 'Channel Footbridge', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#78350f', iconType: 'channel_foot' },
  { id: 'channel_long_l', label: 'Chanel Long L', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_long_l' },

  // Docks
  { id: 'dock_l_ext', label: 'Dock L Ext', category: TileCategory.DOCK, bgColor: '#78350f', fgColor: '#0ea5e9', iconType: 'dock_l_ext' },
  { id: 'dock_l_int', label: 'Dock L Int', category: TileCategory.DOCK, bgColor: '#78350f', fgColor: '#0ea5e9', iconType: 'dock_l_int' },
  { id: 'dock_i', label: 'Dock I', category: TileCategory.DOCK, bgColor: '#78350f', fgColor: '#0ea5e9', iconType: 'dock_i' },
  { id: 'dock_u', label: 'Dock U', category: TileCategory.DOCK, bgColor: '#78350f', fgColor: '#0ea5e9', iconType: 'dock_u' },
  { id: 'dock_2_channel', label: 'Dock 2 Channel', category: TileCategory.DOCK, bgColor: '#78350f', fgColor: '#0ea5e9', iconType: 'dock_2_channel' },

  // Industry
  { id: 'industry', label: 'Industry', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#fef3c7', iconType: 'factory' },
  { id: 'industry_road_i', label: 'Ind. Road I', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#334155', iconType: 'ind_road_i' },
  { id: 'industry_road_c', label: 'Ind. Road C', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#334155', iconType: 'ind_road_c' },
  { id: 'industry_road_t', label: 'Ind. Road T', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#334155', iconType: 'ind_road_t' },
  { id: 'industry_road_x', label: 'Ind. Road X', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#334155', iconType: 'ind_road_x' },
  { id: 'industry_road_end', label: 'Ind. Road End', category: TileCategory.INDUSTRY, bgColor: '#b45309', fgColor: '#334155', iconType: 'ind_road_end' },
];

export const TILE_MAP = TILES.reduce((acc, tile) => {
  acc[tile.id] = tile;
  return acc;
}, {} as Record<string, TileDefinition>);

export const DEFAULT_TILE = 'ground';