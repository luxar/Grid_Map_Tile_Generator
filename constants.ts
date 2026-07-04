import { TileCategory, TileDefinition } from './types';

export const DEFAULT_COLS = 15;
export const DEFAULT_ROWS = 12;

export const TILES: TileDefinition[] = [
  // Terrain
  { id: 'none', label: 'None', category: TileCategory.TERRAIN, bgColor: '#000000', fgColor: '#000000', iconType: 'solid' },
  { id: 'ground', label: 'Sidewalk', category: TileCategory.TERRAIN, bgColor: '#FAD6A5', fgColor: '#22c55e', iconType: 'solid' },
  { id: 'dirt', label: 'Dirt', category: TileCategory.TERRAIN, bgColor: '#3f2e27', fgColor: '#9ca3af', iconType: 'dirt' },
  { id: 'greenery', label: 'Greenery', category: TileCategory.TERRAIN, bgColor: '#22c55e', fgColor: '#064e3b', iconType: 'greenery' },
  { id: 'sea', label: 'Sea', category: TileCategory.TERRAIN, bgColor: '#3b82f6', fgColor: '#2563eb', iconType: 'waves' },
  { id: 'metal', label: 'Metal', category: TileCategory.TERRAIN, bgColor: '#94a3b8', fgColor: '#64748b', iconType: 'grid' },
  { id: 'industrial', label: 'Industrial', category: TileCategory.TERRAIN, bgColor: '#b87333', fgColor: '#8c5226', iconType: 'grid' },

  // Roads
  { id: 'road_i', label: 'Road I', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_i' },
  { id: 'road_l', label: 'Road L', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_l' },
  { id: 'road_t', label: 'Road T', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_t' },
  { id: 'road_x', label: 'Road X', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_x' },
  { id: 'road_end', label: 'Road End', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f8fafc', iconType: 'road_end' },
  { id: 'bridge_start', label: 'Bridge Start', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#f59e0b', iconType: 'bridge' },
  { id: 'uphill', label: 'Uphill', category: TileCategory.ROAD, bgColor: '#334155', fgColor: '#ef4444', iconType: 'uphill' },

  // Channels
  { id: 'channel_i', label: 'Channel I', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_i' },
  { id: 'channel_l', label: 'Channel L', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_l' },
  { id: 'channel_t', label: 'Channel T', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_t' },
  { id: 'channel_x', label: 'Channel X', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_x' },
  { id: 'channel_end', label: 'Channel End', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_end' },
  { id: 'channel_footbridge', label: 'Channel Footbridge', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#78350f', iconType: 'channel_foot' },
  { id: 'channel_long_l', label: 'Channel Long L', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_long_l' },
  { id: 'channel_long_l_aux_1', label: 'Channel Long L Aux 1', category: TileCategory.CHANNEL, bgColor: '#0ea5e9', fgColor: '#e0f2fe', iconType: 'channel_i' },
  { id: 'channel_long_l_aux_2', label: 'Channel Long L Aux 2', category: TileCategory.CHANNEL, bgColor: '#FAD6A5', fgColor: '#22c55e', iconType: 'channel_long_l_aux_2' },

  // Lava Channels
  { id: 'lava_channel_i', label: 'Lava Chan. I', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_i' },
  { id: 'lava_channel_l', label: 'Lava Chan. L', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_l' },
  { id: 'lava_channel_t', label: 'Lava Chan. T', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_t' },
  { id: 'lava_channel_x', label: 'Lava Chan. X', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_x' },
  { id: 'lava_channel_end', label: 'Lava Chan. End', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_end' },
  { id: 'lava_channel_footbridge', label: 'Lava Footbridge', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#78350f', iconType: 'lava_channel_foot' },
  { id: 'lava_channel_long_l', label: 'Lava Chan. Long L', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_long_l' },
  { id: 'lava_channel_long_l_aux_1', label: 'Lava Chan. L Aux 1', category: TileCategory.LAVA_CHANNEL, bgColor: '#dc2626', fgColor: '#fca5a5', iconType: 'channel_i' },
  { id: 'lava_channel_long_l_aux_2', label: 'Lava Chan. L Aux 2', category: TileCategory.LAVA_CHANNEL, bgColor: '#FAD6A5', fgColor: '#22c55e', iconType: 'lava_channel_long_l_aux_2' },

  // Trench
  { id: 'trench_i', label: 'Trench I', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'channel_i' },
  { id: 'trench_l', label: 'Trench L', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'channel_l' },
  { id: 'trench_t', label: 'Trench T', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'channel_t' },
  { id: 'trench_x', label: 'Trench X', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'channel_x' },
  { id: 'trench_end', label: 'Trench End', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'channel_end' },
  { id: 'trench_bridge', label: 'Trench Bridge', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_bridge' },
  { id: 'trench_half', label: 'Trench Half', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_half' },
  { id: 'trench_quarter', label: 'Trench Quarter', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_quarter' },
  { id: 'trench_3quarter', label: 'Trench 3 Quarter', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_3quarter' },
  { id: 'trench_half_start', label: 'Trench Half Start', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_half_start' },
  { id: 'trench_3quarter_start', label: 'Trench 3 Q. Start', category: TileCategory.TRENCH, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'trench_3quarter_start' },

  // Mud
  { id: 'mud', label: 'Mud', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#9ca3af', iconType: 'solid' },
  { id: 'mud_half', label: 'Mud Half', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'mud_half' },
  { id: 'mud_quarter', label: 'Mud Quarter', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'mud_quarter' },
  { id: 'mud_3quarter', label: 'Mud 3 Quarter', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#94a3b8', iconType: 'mud_3quarter' },
  { id: 'mud_hill_i', label: 'Mud Hill I', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#9ca3af', iconType: 'mud_hill_i' },
  { id: 'mud_hill_l', label: 'Mud Hill L', category: TileCategory.MUD, bgColor: '#3f2e27', fgColor: '#9ca3af', iconType: 'mud_hill_l' },

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