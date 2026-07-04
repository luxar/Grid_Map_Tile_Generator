export enum TileCategory {
  TERRAIN = 'Terrain',
  ROAD = 'Road',
  CHANNEL = 'Channel',
  LAVA_CHANNEL = 'Lava Channel',
  DOCK = 'Dock',
  INDUSTRY = 'Industry',
  TRENCH = 'Trench',
  MUD = 'Mud',
}

export interface TileDefinition {
  id: string;
  label: string;
  category: TileCategory;
  bgColor: string;
  fgColor: string;
  iconType: string; // Used to render specific SVG shapes
}

export interface CellData {
  tileId: string;
  rotation: number;
  height?: number;
}

export type GridState = CellData[][]; // 2D array of CellData

export interface ToolState {
  selectedTileId: string;
  isDrawing: boolean;
}