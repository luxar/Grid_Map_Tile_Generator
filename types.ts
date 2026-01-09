export enum TileCategory {
  TERRAIN = 'Terrain',
  ROAD = 'Road',
  CHANNEL = 'Channel',
  DOCK = 'Dock',
  INDUSTRY = 'Industry',
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
}

export type GridState = CellData[][]; // 2D array of CellData

export interface ToolState {
  selectedTileId: string;
  isDrawing: boolean;
}