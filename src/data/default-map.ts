import type {
  Position,
  TooltipData,
  TextSection,
  ModalContent,
  MapNode,
  MapNodeWithId,
  MapEdge,
  ProjectMapConfig,
} from "@/types/ProjectMapConfig";

export enum validNodes {
  DefaultNode = "DefaultNode",
}

const nodes: { [id in validNodes]: MapNode } = {
  [validNodes.DefaultNode]: {
    label: "Default Node",
    nodeType: "text",
    text: "default",
    color: "#66c2ff",
    position: {
      x: 0,
      y: 0,
    },
  },
};

// No edges - just one standalone node
const edges: MapEdge<validNodes>[] = [];

const projectMapConfig: ProjectMapConfig = {
  getMapNodes: function () {
    const nodeMap: { [id: string]: MapNodeWithId } = {};

    for (const [id, node] of Object.entries(nodes)) {
      nodeMap[id] = { ...node, id };
    }

    return nodeMap;
  },
  getMapEdges: function () {
    return edges;
  },
  projectId: "default-map",
  centerNodeId: "DefaultNode",
  title: "Default Map",
};

// Modal content for the single node
export const modalContent: Record<validNodes, ModalContent> = {
  [validNodes.DefaultNode]: {
    title: "Default Node",
    description: "This is a simple default node for testing the map system.",
    sections: [
      {
        title: "Purpose",
        body: "This node serves as a minimal example for testing the dynamic map loading system.",
      },
    ],
    imageTooltips: {},
  },
};

export default projectMapConfig;
