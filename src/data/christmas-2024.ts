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
  body: string;
}

export interface ModalContent {
  title: string; // Title for the modal
  description: string; // Main text content
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

export enum validNodes {
  Start = "Start",
  Page1 = "Page1",
  Sticky1 = "Sticky1",
  Sticky2 = "Sticky2",
  Sticky3 = "Sticky3",
  Sticky4 = "Sticky4",
  Sticky5 = "Sticky5",
  FakeBulb = "FakeBulb",
  FridgeKey = "FridgeKey",
  FridgeChest = "FridgeChest",
  Page6 = "Page6",
  DPadWitness = "DPadWitness",
  TheWitness = "TheWitness",
  FakeRock = "FakeRock",
  LocationFakeRock = "LocationFakeRock",
  BrokenUSB = "BrokenUSB",
  MazeUSB = "MazeUSB",
  TowelKey = "TowelKey",
  TowelChest = "TowelChest",
  SDCard = "SDCard",
  BuriedBox = "BuriedBox",
  Page4 = "Page4",
  Ciphers1 = "Ciphers1",
  Ciphers2 = "Ciphers2",
  Ciphers3 = "Ciphers3",
  Ciphers4 = "Ciphers4",
  Ciphers5 = "Ciphers5",
  Page10 = "Page10",
  LeftMap = "LeftMap",
  Page2 = "Page2",
  Page5 = "Page5",
  TrainStamp = "TrainStamp",
  IPAddress = "IPAddress",
  Maze3D = "Maze3D",
  PixelPark = "PixelPark",
  Scrabble = "Scrabble",
  DPadComboLock = "DPadComboLock",
  ComboLock = "ComboLock",
  ImageTomatoCan = "ImageTomatoCan",
  TomatoCan = "TomatoCan",
  RightMap = "RightMap",
  DPadFoxMaze = "DPadFoxMaze",
  FoxMaze = "FoxMaze",
  DPadLocationRemnantChest = "DPadLocationRemnantChest",
  LocationRemnantChest = "LocationRemnantChest",
  RemnantChest = "RemnantChest",
  ChestCard = "ChestCard",
  HardDisk = "HardDisk",
  DPadCatstermind = "DPadCatstermind",
  Catstermind = "Catstermind",
  LocationCDDrive = "LocationCDDrive",
  CDCard = "CDCard",
  DPadLocationMonitorBox = "DPadLocationMonitorBox",
  LocationSafe = "LocationSafe",
  Page8 = "Page8",
  LittleFakeHouse = "LittleFakeHouse",
  GoldenPuzzle = "GoldenPuzzle",
  DPadLocationShelfChest = "DPadLocationShelfChest",
  LocationShelfChest = "LocationShelfChest",
  Page9 = "Page9",
  DPadTerminal = "DPadTerminal",
  Terminal = "Terminal",
  DPadFaceMural = "DPadFaceMural",
  FaceMural = "FaceMural",
  DPadHanoi = "DPadHanoi",
  Hanoi = "Hanoi",
  FrogJump = "FrogJump",
  Safe = "Safe",
  Page3 = "Page3",
  Ornament = "Ornament",
  ShelfKey = "ShelfKey",
  ShelfChest = "ShelfChest",
  StereoscopicGlasses = "StereoscopicGlasses",
  UVLight = "UVLight",
  Page7 = "Page7",
  FiveDucksInitiative = "FiveDucksInitiative",
  Duck1 = "Duck1",
  Duck2 = "Duck2",
  Duck3 = "Duck3",
  Duck4 = "Duck4",
  Duck5 = "Duck5",
  DuckCard = "DuckCard",
  Sun = "Sun",
  LSunO = "LSunO",
  End = "End",
}

const nodes: { [id in validNodes]: MapNode } = {
  [validNodes.Start]: {
    label: "Start",
    nodeType: "text",
    text: "start",
    color: "#ffc",
    position: {
      x: 0,
      y: 10,
    },
  },
  [validNodes.Page1]: {
    label: "Page 1",
    nodeType: "image",
    position: {
      x: 1,
      y: 10,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.Sticky1]: {
    label: "Sticky 1",
    nodeType: "image",
    position: {
      x: 2,
      y: 10,
    },
    autoIconUrl: "sticky.png",
  },
  [validNodes.Sticky2]: {
    label: "Sticky 2",
    nodeType: "image",
    position: {
      x: 3,
      y: 10,
    },
    autoIconUrl: "sticky.png",
  },
  [validNodes.Sticky3]: {
    label: "Sticky 3",
    nodeType: "image",
    position: {
      x: 4,
      y: 10,
    },
    autoIconUrl: "sticky.png",
  },
  [validNodes.Sticky4]: {
    label: "Sticky 4",
    nodeType: "image",
    position: {
      x: 5,
      y: 10,
    },
    autoIconUrl: "sticky.png",
  },
  [validNodes.Sticky5]: {
    label: "Sticky 5",
    nodeType: "image",
    position: {
      x: 6,
      y: 10,
    },
    autoIconUrl: "sticky.png",
  },
  [validNodes.FakeBulb]: {
    label: "Fake Bulb",
    nodeType: "image",
    position: {
      x: 7,
      y: 10,
    },
    autoIconUrl: "bulb.png",
  },
  [validNodes.FridgeKey]: {
    label: "Fridge Key",
    nodeType: "image",
    position: {
      x: 8,
      y: 10,
    },
    autoIconUrl: "key.png",
  },
  [validNodes.FridgeChest]: {
    label: "Fridge Chest",
    nodeType: "image",
    position: {
      x: 8,
      y: 11,
    },
    autoIconUrl: "chest.png",
  },
  [validNodes.Page6]: {
    label: "Page 6",
    nodeType: "image",
    position: {
      x: 9,
      y: 11,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.DPadWitness]: {
    label: "DPad - Witness",
    nodeType: "image",
    position: {
      x: 10,
      y: 11,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.TheWitness]: {
    label: "The Witness",
    nodeType: "image",
    position: {
      x: 11,
      y: 11,
    },
    autoIconUrl: "witness.png",
  },
  [validNodes.LocationFakeRock]: {
    label: "Location - Fake Rock",
    nodeType: "image",
    position: {
      x: 11,
      y: 10,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.FakeRock]: {
    label: "Fake Rock",
    nodeType: "image",
    position: {
      x: 11,
      y: 9,
    },
    autoIconUrl: "rock.png",
  },
  [validNodes.BrokenUSB]: {
    label: "Broken USB",
    nodeType: "image",
    position: {
      x: 10,
      y: 9,
    },
    autoIconUrl: "usb_broken.png",
  },
  [validNodes.MazeUSB]: {
    label: "Maze USB",
    nodeType: "image",
    position: {
      x: 10,
      y: 8,
    },
    autoIconUrl: "usb.png",
  },
  [validNodes.TowelKey]: {
    label: "Towel Key",
    nodeType: "image",
    position: {
      x: 11,
      y: 8,
    },
    autoIconUrl: "key.png",
  },
  [validNodes.TowelChest]: {
    label: "Towel Chest",
    nodeType: "image",
    position: {
      x: 11,
      y: 7,
    },
    autoIconUrl: "chest.png",
  },
  [validNodes.SDCard]: {
    label: "SD Card",
    nodeType: "image",
    position: {
      x: 7,
      y: 6,
    },
    autoIconUrl: "sd.png",
  },
  [validNodes.BuriedBox]: {
    label: "Buried Box",
    nodeType: "image",
    position: {
      x: 7,
      y: 5,
    },
    autoIconUrl: "box.png",
  },
  [validNodes.Page4]: {
    label: "Page 4",
    nodeType: "image",
    position: {
      x: 7,
      y: 4,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.Ciphers1]: {
    label: "Ciphers 1",
    nodeType: "image",
    position: {
      x: 6,
      y: 4,
    },
    autoIconUrl: "cipher.png",
  },
  [validNodes.Ciphers2]: {
    label: "Ciphers 2",
    nodeType: "image",
    position: {
      x: 5,
      y: 4,
    },
    autoIconUrl: "cipher.png",
  },
  [validNodes.Ciphers3]: {
    label: "Ciphers 3",
    nodeType: "image",
    position: {
      x: 4,
      y: 4,
    },
    autoIconUrl: "cipher.png",
  },
  [validNodes.Ciphers4]: {
    label: "Ciphers 4",
    nodeType: "image",
    position: {
      x: 3,
      y: 4,
    },
    autoIconUrl: "cipher.png",
  },
  [validNodes.Ciphers5]: {
    label: "Ciphers 5",
    nodeType: "image",
    position: {
      x: 2,
      y: 4,
    },
    autoIconUrl: "cipher.png",
  },
  [validNodes.Page10]: {
    label: "Page 10",
    nodeType: "image",
    position: {
      x: 2,
      y: 3,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.LeftMap]: {
    label: "Left Map",
    nodeType: "image",
    position: {
      x: 1,
      y: 4,
    },
    autoIconUrl: "map.png",
  },
  [validNodes.Page2]: {
    label: "Page 2",
    nodeType: "image",
    position: {
      x: 7,
      y: 3,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.Page5]: {
    label: "Page 5",
    nodeType: "image",
    position: {
      x: 7,
      y: 2,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.TrainStamp]: {
    label: "Train Stamp",
    nodeType: "image",
    position: {
      x: 7,
      y: 1,
    },
    autoIconUrl: "stamp.png",
  },
  [validNodes.IPAddress]: {
    label: "IP Address",
    nodeType: "image",
    position: {
      x: 6,
      y: 1,
    },
    autoIconUrl: "ip.png",
  },
  [validNodes.Maze3D]: {
    label: "3D Maze",
    nodeType: "image",
    position: {
      x: 5,
      y: 1,
    },
    autoIconUrl: "3d_maze.png",
  },
  [validNodes.PixelPark]: {
    label: "Pixel Park",
    nodeType: "image",
    position: {
      x: 5,
      y: 0,
    },
    autoIconUrl: "pixelchest.png",
  },
  [validNodes.Scrabble]: {
    label: "Scrabble",
    nodeType: "image",
    position: {
      x: 8,
      y: 2,
    },
    autoIconUrl: "scrabble.png",
  },
  [validNodes.DPadComboLock]: {
    label: "DPad - Combo Lock",
    nodeType: "image",
    position: {
      x: 9,
      y: 2,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.ComboLock]: {
    label: "Combo Lock",
    nodeType: "image",
    position: {
      x: 10,
      y: 2,
    },
    autoIconUrl: "combo.png",
  },
  [validNodes.ImageTomatoCan]: {
    label: "Image - Tomato Can",
    nodeType: "image",
    position: {
      x: 11,
      y: 2,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.TomatoCan]: {
    label: "Tomato Can",
    nodeType: "image",
    position: {
      x: 12,
      y: 2,
    },
    autoIconUrl: "tomato.png",
  },
  [validNodes.RightMap]: {
    label: "Right Map",
    nodeType: "image",
    position: {
      x: 13,
      y: 2,
    },
    autoIconUrl: "map.png",
  },
  [validNodes.DPadFoxMaze]: {
    label: "DPad - Fox Maze",
    nodeType: "image",
    position: {
      x: 11,
      y: 1,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.FoxMaze]: {
    label: "Fox Maze",
    nodeType: "image",
    position: {
      x: 12,
      y: 1,
    },
    autoIconUrl: "maze.png",
  },
  [validNodes.DPadLocationRemnantChest]: {
    label: "DPad - Location Image for Remnant Chest",
    nodeType: "image",
    position: {
      x: 13,
      y: 1,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.LocationRemnantChest]: {
    label: "Location - Remnant Chest",
    nodeType: "image",
    position: {
      x: 14,
      y: 1,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.RemnantChest]: {
    label: "Remnant Chest",
    nodeType: "image",
    position: {
      x: 15,
      y: 1,
    },
    autoIconUrl: "chest.png",
  },
  [validNodes.ChestCard]: {
    label: "Power Card - Chest",
    nodeType: "image",
    position: {
      x: 16,
      y: 1,
    },
    autoIconUrl: "power_card.png",
  },
  [validNodes.HardDisk]: {
    label: "Hard Disk",
    nodeType: "image",
    position: {
      x: 8,
      y: 4,
    },
    autoIconUrl: "hdd.png",
  },
  [validNodes.DPadCatstermind]: {
    label: "DPad - Catstermind",
    nodeType: "image",
    position: {
      x: 9,
      y: 4,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.Catstermind]: {
    label: "Catstermind",
    nodeType: "image",
    position: {
      x: 10,
      y: 4,
    },
    autoIconUrl: "catstermind.png",
  },
  [validNodes.LocationCDDrive]: {
    label: "Location - CD Drive",
    nodeType: "image",
    position: {
      x: 11,
      y: 4,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.CDCard]: {
    label: "Power Card - CD",
    nodeType: "image",
    position: {
      x: 11,
      y: 3,
    },
    autoIconUrl: "power_card.png",
  },
  [validNodes.DPadLocationMonitorBox]: {
    label: "DPad - Location Image for Monitor Box",
    nodeType: "image",
    position: {
      x: 12,
      y: 4,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.LocationSafe]: {
    label: "Location Image for Safe",
    nodeType: "image",
    position: {
      x: 13,
      y: 4,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.Page8]: {
    label: "Page 8",
    nodeType: "image",
    position: {
      x: 11,
      y: 6,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.LittleFakeHouse]: {
    label: "Little Fake House",
    nodeType: "image",
    position: {
      x: 17,
      y: 6,
    },
    autoIconUrl: "house.png",
  },
  [validNodes.GoldenPuzzle]: {
    label: "Golden Puzzle",
    nodeType: "image",
    position: {
      x: 18,
      y: 6,
    },
    autoIconUrl: "puzzle.png",
  },
  [validNodes.DPadLocationShelfChest]: {
    label: "DPad - Location Image for Shelf Chest",
    nodeType: "image",
    position: {
      x: 19,
      y: 6,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.LocationShelfChest]: {
    label: "Location Image for Shelf Chest",
    nodeType: "image",
    position: {
      x: 20,
      y: 6,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.Page9]: {
    label: "Page 9",
    nodeType: "image",
    position: {
      x: 11,
      y: 5,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.DPadTerminal]: {
    label: "DPad - Terminal",
    nodeType: "image",
    position: {
      x: 10,
      y: 5,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.Terminal]: {
    label: "Terminal",
    nodeType: "image",
    position: {
      x: 9,
      y: 5,
    },
    autoIconUrl: "terminal.png",
  },
  [validNodes.DPadFaceMural]: {
    label: "DPad - Face Mural",
    nodeType: "image",
    position: {
      x: 12,
      y: 5,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.FaceMural]: {
    label: "Face Mural",
    nodeType: "image",
    position: {
      x: 13,
      y: 5,
    },
    autoIconUrl: "mural.png",
  },
  [validNodes.DPadHanoi]: {
    label: "DPad - Hanoi",
    nodeType: "image",
    position: {
      x: 14,
      y: 5,
    },
    autoIconUrl: "dpad.png",
  },
  [validNodes.Hanoi]: {
    label: "Hanoi",
    nodeType: "image",
    position: {
      x: 15,
      y: 5,
    },
    autoIconUrl: "hanoi.png",
  },
  [validNodes.FrogJump]: {
    label: "Frog Jump",
    nodeType: "image",
    position: {
      x: 16,
      y: 5,
    },
    autoIconUrl: "frog.png",
  },
  [validNodes.Safe]: {
    label: "Safe",
    nodeType: "image",
    position: {
      x: 16,
      y: 4,
    },
    autoIconUrl: "safe.png",
  },
  [validNodes.Page3]: {
    label: "Page 3",
    nodeType: "image",
    position: {
      x: 17,
      y: 4,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.Ornament]: {
    label: "Ornament",
    nodeType: "image",
    position: {
      x: 18,
      y: 4,
    },
    autoIconUrl: "ornament.png",
  },
  [validNodes.ShelfKey]: {
    label: "Shelf Key",
    nodeType: "image",
    position: {
      x: 19,
      y: 4,
    },
    autoIconUrl: "key.png",
  },
  [validNodes.ShelfChest]: {
    label: "Shelf Chest",
    nodeType: "image",
    position: {
      x: 20,
      y: 4,
    },
    autoIconUrl: "chest.png",
  },
  [validNodes.StereoscopicGlasses]: {
    label: "Stereoscopic Glasses",
    nodeType: "image",
    position: {
      x: 21,
      y: 4,
    },
    autoIconUrl: "glasses.png",
  },
  [validNodes.UVLight]: {
    label: "UV Light",
    nodeType: "image",
    position: {
      x: 20,
      y: 3,
    },
    autoIconUrl: "uv_light.png",
  },
  [validNodes.Page7]: {
    label: "Page 7",
    nodeType: "image",
    position: {
      x: 22,
      y: 3,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.FiveDucksInitiative]: {
    label: "5 Ducks Initiative",
    nodeType: "image",
    position: {
      x: 22,
      y: 2,
    },
    autoIconUrl: "5ducks.png",
  },
  [validNodes.Duck1]: {
    label: "Duck 1",
    nodeType: "image",
    position: {
      x: 22,
      y: 1,
    },
    autoIconUrl: "duck.png",
  },
  [validNodes.Duck2]: {
    label: "Duck 2",
    nodeType: "image",
    position: {
      x: 22,
      y: 0,
    },
    autoIconUrl: "duck.png",
  },
  [validNodes.Duck3]: {
    label: "Duck 3",
    nodeType: "image",
    position: {
      x: 21,
      y: 0,
    },
    autoIconUrl: "duck.png",
  },
  [validNodes.Duck4]: {
    label: "Duck 4",
    nodeType: "image",
    position: {
      x: 21,
      y: 1,
    },
    autoIconUrl: "duck.png",
  },
  [validNodes.Duck5]: {
    label: "Duck 5",
    nodeType: "image",
    position: {
      x: 20,
      y: 1,
    },
    autoIconUrl: "duck.png",
  },
  [validNodes.DuckCard]: {
    label: "Power Card - Duck",
    nodeType: "image",
    position: {
      x: 20,
      y: 0,
    },
    autoIconUrl: "power_card.png",
  },

  [validNodes.Sun]: {
    label: "Sun",
    nodeType: "image",
    parent: "MilkyWay",
    color: "#ffc",
    position: {
      x: 1,
      y: 12,
    },
    iconUrl: "../../../assets/rock.png",
  },
  [validNodes.LSunO]: {
    label: "Low Sun Orbit",
    nodeType: "image",
    parent: "Sun",
    altitude: "10000",
    position: {
      x: 2,
      y: 13,
    },
  },
  [validNodes.End]: {
    label: "End",
    nodeType: "text",
    text: "end",
    color: "#ffc",
    position: {
      x: 0,
      y: 11,
    },
  },
};

export interface MapEdge {
  sourceNode: validNodes;
  targetNode: validNodes;
  forceNonOrthogonal?: boolean; // Optional property to force non-orthogonal edges
  verticalBeforeHorizontal?: boolean; // Optional property to force vertical before horizontal edges
}

const edges: MapEdge[] = [
  {
    sourceNode: validNodes.Start,
    targetNode: validNodes.Page1,
  },
  {
    sourceNode: validNodes.Page1,
    targetNode: validNodes.Sticky1,
  },
  {
    sourceNode: validNodes.Page1,
    targetNode: validNodes.FridgeChest,
    verticalBeforeHorizontal: true,
  },
  {
    sourceNode: validNodes.Sticky1,
    targetNode: validNodes.Sticky2,
  },
  {
    sourceNode: validNodes.Sticky2,
    targetNode: validNodes.Sticky3,
  },
  {
    sourceNode: validNodes.Sticky3,
    targetNode: validNodes.Sticky4,
  },
  {
    sourceNode: validNodes.Sticky4,
    targetNode: validNodes.Sticky5,
  },
  {
    sourceNode: validNodes.Sticky5,
    targetNode: validNodes.FakeBulb,
  },
  {
    sourceNode: validNodes.FakeBulb,
    targetNode: validNodes.FridgeKey,
  },
  {
    sourceNode: validNodes.FridgeKey,
    targetNode: validNodes.FridgeChest,
  },
  {
    sourceNode: validNodes.FridgeChest,
    targetNode: validNodes.Page6,
  },
  {
    sourceNode: validNodes.Page6,
    targetNode: validNodes.DPadWitness,
  },
  {
    sourceNode: validNodes.DPadWitness,
    targetNode: validNodes.TheWitness,
  },
  {
    sourceNode: validNodes.TheWitness,
    targetNode: validNodes.LocationFakeRock,
  },
  {
    sourceNode: validNodes.LocationFakeRock,
    targetNode: validNodes.FakeRock,
  },
  {
    sourceNode: validNodes.FakeRock,
    targetNode: validNodes.BrokenUSB,
  },
  {
    sourceNode: validNodes.FakeRock,
    targetNode: validNodes.TowelKey,
  },
  {
    sourceNode: validNodes.BrokenUSB,
    targetNode: validNodes.MazeUSB,
  },
  {
    sourceNode: validNodes.MazeUSB,
    targetNode: validNodes.SDCard,
  },
  {
    sourceNode: validNodes.MazeUSB,
    targetNode: validNodes.TowelChest,
    verticalBeforeHorizontal: true,
  },
  {
    sourceNode: validNodes.TowelKey,
    targetNode: validNodes.TowelChest,
  },
  {
    sourceNode: validNodes.TowelChest,
    targetNode: validNodes.Page8,
  },
  {
    sourceNode: validNodes.SDCard,
    targetNode: validNodes.BuriedBox,
  },
  {
    sourceNode: validNodes.BuriedBox,
    targetNode: validNodes.Page4,
  },
  {
    sourceNode: validNodes.Page4,
    targetNode: validNodes.Ciphers1,
  },
  {
    sourceNode: validNodes.Page4,
    targetNode: validNodes.Page2,
  },
  {
    sourceNode: validNodes.Page4,
    targetNode: validNodes.HardDisk,
  },
  {
    sourceNode: validNodes.Ciphers1,
    targetNode: validNodes.Ciphers2,
  },
  {
    sourceNode: validNodes.Ciphers2,
    targetNode: validNodes.Ciphers3,
  },
  {
    sourceNode: validNodes.Ciphers3,
    targetNode: validNodes.Ciphers4,
  },
  {
    sourceNode: validNodes.Ciphers4,
    targetNode: validNodes.Ciphers5,
  },
  {
    sourceNode: validNodes.Ciphers5,
    targetNode: validNodes.Page10,
  },
  {
    sourceNode: validNodes.Ciphers5,
    targetNode: validNodes.LeftMap,
  },
  {
    sourceNode: validNodes.Page2,
    targetNode: validNodes.Page5,
  },
  {
    sourceNode: validNodes.Page5,
    targetNode: validNodes.TrainStamp,
  },
  {
    sourceNode: validNodes.Page5,
    targetNode: validNodes.Scrabble,
  },
  {
    sourceNode: validNodes.TrainStamp,
    targetNode: validNodes.IPAddress,
  },
  {
    sourceNode: validNodes.IPAddress,
    targetNode: validNodes.Maze3D,
  },
  {
    sourceNode: validNodes.Maze3D,
    targetNode: validNodes.PixelPark,
  },
  {
    sourceNode: validNodes.PixelPark,
    targetNode: validNodes.RemnantChest,
  },
  {
    sourceNode: validNodes.Scrabble,
    targetNode: validNodes.DPadComboLock,
  },
  {
    sourceNode: validNodes.DPadComboLock,
    targetNode: validNodes.ComboLock,
  },
  {
    sourceNode: validNodes.ComboLock,
    targetNode: validNodes.ImageTomatoCan,
  },
  {
    sourceNode: validNodes.ImageTomatoCan,
    targetNode: validNodes.TomatoCan,
  },
  {
    sourceNode: validNodes.ImageTomatoCan,
    targetNode: validNodes.DPadFoxMaze,
  },
  {
    sourceNode: validNodes.TomatoCan,
    targetNode: validNodes.RightMap,
  },
  {
    sourceNode: validNodes.DPadFoxMaze,
    targetNode: validNodes.FoxMaze,
  },
  {
    sourceNode: validNodes.FoxMaze,
    targetNode: validNodes.DPadLocationRemnantChest,
  },
  {
    sourceNode: validNodes.DPadLocationRemnantChest,
    targetNode: validNodes.LocationRemnantChest,
  },
  {
    sourceNode: validNodes.LocationRemnantChest,
    targetNode: validNodes.RemnantChest,
  },
  {
    sourceNode: validNodes.RemnantChest,
    targetNode: validNodes.ChestCard,
  },
  {
    sourceNode: validNodes.HardDisk,
    targetNode: validNodes.DPadCatstermind,
  },
  {
    sourceNode: validNodes.DPadCatstermind,
    targetNode: validNodes.Catstermind,
  },
  {
    sourceNode: validNodes.Catstermind,
    targetNode: validNodes.LocationCDDrive,
  },
  {
    sourceNode: validNodes.LocationCDDrive,
    targetNode: validNodes.CDCard,
  },
  {
    sourceNode: validNodes.LocationCDDrive,
    targetNode: validNodes.DPadLocationMonitorBox,
  },
  {
    sourceNode: validNodes.DPadLocationMonitorBox,
    targetNode: validNodes.LocationSafe,
  },
  {
    sourceNode: validNodes.LocationSafe,
    targetNode: validNodes.Safe,
  },
  {
    sourceNode: validNodes.Page8,
    targetNode: validNodes.LittleFakeHouse,
  },
  {
    sourceNode: validNodes.Page8,
    targetNode: validNodes.Page9,
  },
  {
    sourceNode: validNodes.LittleFakeHouse,
    targetNode: validNodes.GoldenPuzzle,
  },
  {
    sourceNode: validNodes.GoldenPuzzle,
    targetNode: validNodes.DPadLocationShelfChest,
  },
  {
    sourceNode: validNodes.DPadLocationShelfChest,
    targetNode: validNodes.LocationShelfChest,
  },
  {
    sourceNode: validNodes.LocationShelfChest,
    targetNode: validNodes.ShelfChest,
  },
  {
    sourceNode: validNodes.LocationShelfChest,
    targetNode: validNodes.Page7,
  },
  {
    sourceNode: validNodes.Page9,
    targetNode: validNodes.DPadTerminal,
  },
  {
    sourceNode: validNodes.Page9,
    targetNode: validNodes.DPadFaceMural,
  },
  {
    sourceNode: validNodes.DPadTerminal,
    targetNode: validNodes.Terminal,
  },
  {
    sourceNode: validNodes.DPadFaceMural,
    targetNode: validNodes.FaceMural,
  },
  {
    sourceNode: validNodes.FaceMural,
    targetNode: validNodes.DPadHanoi,
  },
  {
    sourceNode: validNodes.DPadHanoi,
    targetNode: validNodes.Hanoi,
  },
  {
    sourceNode: validNodes.Hanoi,
    targetNode: validNodes.FrogJump,
  },
  {
    sourceNode: validNodes.FrogJump,
    targetNode: validNodes.Safe,
  },
  {
    sourceNode: validNodes.Safe,
    targetNode: validNodes.Page3,
  },
  {
    sourceNode: validNodes.Page3,
    targetNode: validNodes.Ornament,
  },
  {
    sourceNode: validNodes.Ornament,
    targetNode: validNodes.ShelfKey,
  },
  {
    sourceNode: validNodes.ShelfKey,
    targetNode: validNodes.ShelfChest,
  },
  {
    sourceNode: validNodes.ShelfChest,
    targetNode: validNodes.StereoscopicGlasses,
  },
  {
    sourceNode: validNodes.ShelfChest,
    targetNode: validNodes.UVLight,
  },
  {
    sourceNode: validNodes.Page7,
    targetNode: validNodes.UVLight,
  },
  {
    sourceNode: validNodes.Page7,
    targetNode: validNodes.FiveDucksInitiative,
  },
  {
    sourceNode: validNodes.FiveDucksInitiative,
    targetNode: validNodes.Duck1,
  },
  {
    sourceNode: validNodes.Duck1,
    targetNode: validNodes.Duck2,
  },
  {
    sourceNode: validNodes.Duck2,
    targetNode: validNodes.Duck3,
  },
  {
    sourceNode: validNodes.Duck3,
    targetNode: validNodes.Duck4,
  },
  {
    sourceNode: validNodes.Duck4,
    targetNode: validNodes.Duck5,
  },
  {
    sourceNode: validNodes.Duck5,
    targetNode: validNodes.DuckCard,
  },

  {
    sourceNode: validNodes.Start,
    targetNode: validNodes.Sun,
    forceNonOrthogonal: true,
  },
  {
    sourceNode: validNodes.Sun,
    targetNode: validNodes.LSunO,
    forceNonOrthogonal: true,
  },
];

export interface SolarSystem {
  getLocations: () => { [id: string]: MapNodeWithId };
  getDeltas: () => MapEdge[];
  systemName: string;
  star: string;
}

const solarSystem: SolarSystem = {
  getLocations: function () {
    const nodeMap: { [id: string]: MapNodeWithId } = {};

    for (const [id, node] of Object.entries(nodes)) {
      nodeMap[id] = { ...node, id };
    }

    return nodeMap;
  },
  getDeltas: function () {
    return edges;
  },
  systemName: "Solar",
  star: "Page8",
};

// Modal content for each node
export const modalContent: Record<validNodes, ModalContent> = {
  [validNodes.Start]: {
    title: "The Hunt Begins!",
    description:
      "This is where the hunt begins. The first clue was hidden here.",
    sections: [
      {
        title: "Location",
        body: "Hidden in the living room under the coffee table.",
      },
      {
        title: "Notes",
        body: "This was the starting point of our scavenger hunt. We placed the first clue here to get everyone started.",
      },
    ],
    imageTooltips: {
      "Start_1.jpg": [
        {
          x: 300,
          y: 330,
          width: 100,
          height: 100,
          text: "This part of the note contained a hidden message",
        },
        {
          x: 500,
          y: 200,
          width: 120,
          height: 60,
          text: "This symbol was a key to decoding the message",
        },
      ],
    },
  },
  [validNodes.Page1]: {
    title: "Booklet Sheet #1",
    description: "The first page of the hunt contained initial instructions.",
    sections: [
      {
        title: "Location",
        body: "Found under the coffee table in the living room.",
      },
      {
        title: "Cover",
        body: "The cover of the booklet is a direct reference to the manual from the game Tunic, which this hunt is styled after",
      },
      {
        title: "Page 1",
        body: "The first page is also a reference to the game Tunic, with more personal touches added to the page. The text in the right box acts as the first hint and kicks off the hunt.",
      },
    ],
    imageTooltips: {
      "Page1_2_1.png": [
        {
          x: 300,
          y: 330,
          width: 100,
          height: 100,
          text: "This part of the note contained a hidden message",
        },
      ],
    },
  },
  [validNodes.Sticky1]: {
    title: "Sticky Note 1",
    description: "A yellow sticky note with a cryptic message.",
    sections: [
      {
        title: "Location",
        body: "Found on the refrigerator door.",
      },
      {
        title: "Notes",
        body: "This sticky note contained a riddle that led to the next clue.",
      },
    ],
    imageTooltips: {
      "modal_mockup.png": [
        {
          x: 300,
          y: 330,
          width: 100,
          height: 100,
          text: "This part of the note contained a hidden message",
        },
        {
          x: 500,
          y: 200,
          width: 120,
          height: 60,
          text: "This symbol was a key to decoding the message",
        },
      ],
    },
  },
  [validNodes.Sticky2]: {
    title: "Sticky Note 2",
    description: "A blue sticky note with a partial code.",
    sections: [
      {
        title: "Location",
        body: "Found under the kitchen sink.",
      },
      {
        title: "Notes",
        body: "This sticky note had part of a code needed later.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky3]: {
    title: "Sticky Note 3",
    description: "A green sticky note with a riddle.",
    sections: [
      {
        title: "Location",
        body: "Found inside a book on the bookshelf.",
      },
      {
        title: "Notes",
        body: "This sticky note contained a riddle about water.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky4]: {
    title: "Sticky Note 4",
    description: "A pink sticky note with coordinates.",
    sections: [
      {
        title: "Location",
        body: "Found taped under the dining table.",
      },
      {
        title: "Notes",
        body: "This sticky note had coordinates that pointed to the backyard.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky5]: {
    title: "Sticky Note 5",
    description: "An orange sticky note with the final hint.",
    sections: [
      {
        title: "Location",
        body: "Found inside the mailbox.",
      },
      {
        title: "Notes",
        body: "This sticky note contained the final hint needed to find the fake bulb.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FakeBulb]: {
    title: "Fake Light Bulb",
    description: "A light bulb that contained a hidden message when unscrewed.",
    sections: [
      {
        title: "Location",
        body: "Found in the lamp in the guest bedroom.",
      },
      {
        title: "Notes",
        body: "This fake light bulb unscrewed to reveal a small compartment with the fridge key.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FridgeKey]: {
    title: "Fridge Key",
    description: "A key found inside the fake bulb that opened the fridge.",
    sections: [
      {
        title: "Location",
        body: "Found inside the fake light bulb.",
      },
      {
        title: "Notes",
        body: "This key was needed to unlock a small lockbox in the refrigerator.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FridgeChest]: {
    title: "Chest in the Fridge",
    description: "A small chest hidden in the back of the fridge.",
    sections: [
      {
        title: "Location",
        body: "Found in the back of the refrigerator behind the milk.",
      },
      {
        title: "Notes",
        body: "This chest was locked and required the key from the fake bulb to open.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Page6]: {
    title: "Page 6",
    description: "The sixth page of instructions found in the chest.",
    sections: [
      {
        title: "Location",
        body: "Found inside the chest in the refrigerator.",
      },
      {
        title: "Notes",
        body: "This page contained instructions for the final phase of the hunt.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.DPadWitness]: {
    title: "D-Pad Witness Puzzle",
    description:
      "A puzzle inspired by The Witness game with directional controls.",
    sections: [
      {
        title: "Location",
        body: "Found in the game room on the console.",
      },
      {
        title: "Notes",
        body: "This puzzle required using the D-pad on a controller to solve a maze.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.TheWitness]: {
    title: "The Witness Reference",
    description:
      "A direct reference to The Witness game with a similar puzzle mechanic.",
    sections: [
      {
        title: "Location",
        body: "Found on the TV screen in the living room.",
      },
      {
        title: "Notes",
        body: "This puzzle was directly inspired by The Witness game and required tracing a path.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FakeRock]: {
    title: "Fake Rock",
    description: "A fake rock in the garden that contained the final clue.",
    sections: [
      {
        title: "Location",
        body: "Found in the garden near the rose bushes.",
      },
      {
        title: "Notes",
        body: "This fake rock contained the final clue that led to the treasure.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.LocationFakeRock]: {
    title: "Fake Rock",
    description: "A fake rock in the garden that contained the final clue.",
    sections: [
      {
        title: "Location",
        body: "Found in the garden near the rose bushes.",
      },
      {
        title: "Notes",
        body: "This fake rock contained the final clue that led to the treasure.",
      },
    ],
    imageTooltips: {
      "park.png": [
        {
          x: 0,
          y: 0,
          width: 1333,
          height: 165,
          text: "This section was hidden outside the bounds of the normal viewing area. It reads: ",
        },
        {
          x: 0,
          y: 1167,
          width: 1333,
          height: 165,
          text: "This section was hidden outside the bounds of the normal viewing area. It reads: ",
        },
        {
          x: 5,
          y: 30,
          width: 1323,
          height: 105,
          text: "77777",
        },
      ],
    },
  },
  [validNodes.Sun]: {
    title: "The Sun",
    description: "Center of our solar system.",
    sections: [
      {
        title: "Information",
        body: "The Sun is the star at the center of our Solar System.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.LSunO]: {
    title: "Low Sun Orbit",
    description: "An orbit close to the sun.",
    sections: [
      {
        title: "Information",
        body: "A low solar orbit is an orbit very close to the Sun.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.End]: {
    title: "End Point",
    description:
      "The final destination of the hunt where the treasure was found.",
    sections: [
      {
        title: "Location",
        body: "The treasure was hidden in a box under the deck.",
      },
      {
        title: "Notes",
        body: "This was the final destination of the scavenger hunt where everyone found the treasure.",
      },
    ],
    imageTooltips: {},
  },
};

export default solarSystem;
