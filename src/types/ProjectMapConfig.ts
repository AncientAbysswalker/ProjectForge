export interface Position {
  x: number;
  y: number;
}

export interface TooltipData {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
}

export interface TextSection {
  title: string;
  body: string; // Can now contain HTML markup including hyperlinks
}

export interface ModalContent {
  title: string; // Title for the modal
  description: string; // Main text content - can now contain HTML markup including hyperlinks
  sections?: TextSection[]; // Sections of text content
  imageTooltips?: Record<string, TooltipData[]>; // Map of image filename to tooltips
}

export interface MapNode {
  label: string;
  nodeType: string;
  parent?: string;
  color?: string;
  altitude?: string;
  position: Position;
  iconUrl?: string;
  autoIconUrl?: string;
  text?: string;
}

export interface MapNodeWithId extends MapNode {
  id: string;
}

export interface MapEdge<T = string> {
  sourceNode: T;
  targetNode: T;
  forceNonOrthogonal?: boolean; // Optional property to force non-orthogonal edges
  verticalBeforeHorizontal?: boolean; // Optional property to force vertical before horizontal edges
}

export interface ProjectMapConfig {
  getMapNodes: () => { [id: string]: MapNodeWithId };
  getMapEdges: () => MapEdge[];
  projectId: string;
  centerNodeId: string;
  title: string;
}
