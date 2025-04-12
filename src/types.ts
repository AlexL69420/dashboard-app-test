export type WidgetType = "chart" | "stats" | "table" | "calendar" | "progress"; // Add all widget types

export interface LayoutItem {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AvailableWidget {
  id: WidgetType;
  name: string;
  defaultWidth?: number;
  defaultHeight?: number;
}

export const DEFAULT_LAYOUTS: LayoutItem[] = [
  // Add your default layouts here if needed
];
