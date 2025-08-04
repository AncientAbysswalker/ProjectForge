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
  WaldSucher = "WaldSucher",
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
  Bokalas = "Bokalas",
  Thoovaalakal = "Thoovaalakal",
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
    label: "Sheet 1",
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
    label: "Sheet 6",
    nodeType: "image",
    position: {
      x: 9,
      y: 11,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.DPadWitness]: {
    label: "Golden Path",
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
    label: "Prize Window",
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
  [validNodes.Bokalas]: {
    label: "Bokalas",
    nodeType: "image",
    position: {
      x: 7,
      y: 8,
    },
    autoIconUrl: "image.png",
  },
  [validNodes.Thoovaalakal]: {
    label: "Thoovaalakal",
    nodeType: "image",
    position: {
      x: 10,
      y: 7,
    },
    autoIconUrl: "image.png",
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
      y: 7,
    },
    autoIconUrl: "sd.png",
  },
  [validNodes.WaldSucher]: {
    label: "Waldsucher",
    nodeType: "image",
    position: {
      x: 7,
      y: 6,
    },
    autoIconUrl: "video.png",
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
    label: "Sheet 4",
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
    label: "Sheet 10",
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
    label: "Sheet 2",
    nodeType: "image",
    position: {
      x: 7,
      y: 3,
    },
    autoIconUrl: "page.png",
  },
  [validNodes.Page5]: {
    label: "Sheet 5",
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
    label: "Sheet 8",
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
    label: "Sheet 9",
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
    label: "Sheet 3",
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
    label: "Sheet 7",
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


const edges: MapEdge<validNodes>[] = [
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
    targetNode: validNodes.Bokalas,
  },
  {
    sourceNode: validNodes.Bokalas,
    targetNode: validNodes.SDCard,
  },
  {
    sourceNode: validNodes.MazeUSB,
    targetNode: validNodes.Thoovaalakal,
  },
  {
    sourceNode: validNodes.Thoovaalakal,
    targetNode: validNodes.TowelChest,
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
    targetNode: validNodes.WaldSucher,
  },
  {
    sourceNode: validNodes.WaldSucher,
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
  projectId: "christmas-2024",
  centerNodeId: "Page8",
  title: "Christmas 2024 Hunt Map",
};

// Modal content for each node
export const modalContent: Record<validNodes, ModalContent> = {
  [validNodes.Start]: {
    title: "The Hunt Begins!",
    description:
      "The hunt begins with the intro page from the hunt's manual. This page was hidden in the insert materials of the Tunic Vinyl, provided to brother as a gift.",
    sections: [
      {
        title: "Notes",
        body: "The vinyl was originally supposed to arrive years ago, but only recently showed up due to production delays. This late arrival inspired the decision to hide the first clue in the vinyl's materials, fitting the theme and providing a memorable kickoff.",
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
    title: "Manual - Sheet #1",
    description: "The first sheet of the hunt manual. Contains the initial instructions and first hint leading further into the hunt, as well as the manual's cover. The first hint points to checking the fridge door for a clue. This refers both to the first sticky note on the outside of the door, as well as inside the door for a chest.",
    sections: [
      {
        title: "Location",
        body: "Found inside the Tunic Vinyl gifted to my brother this year.",
      },
      {
        title: "Secret Message",
        body: "The first page contains a hidden message that can be revealed with a UV light. The message is a reference to the game Tunic, which has a similar hidden message on the same page of its manual. The message reads \"furnace\" and had a picture of a mystery box. This leads to the end goal of the hunt, a suitcase hidden by the furnace.",
      },
      {
        title: "Hidden Intimation",
        body: "The Traditional Chinese writing on the intro page says something close to \"inside the porcelain cabinet\", referring to the china cabinet.",
      },
      {
        title: "Notes",
        body: "The cover and intro page are direct references to Tunic's manual and its style. The logos on the first page mostly fun aesthetic choices and don't have any bearing on the hunt itself.",
      },
    ],
    imageTooltips: {
      "Page1_2_1.png": [
        {
          x: 600,
          y: 1705,
          width: 228,
          height: 228,
          text: "Translates to \"inside the porcelain cabinet\"",
        },
      ],
      "Page1_2_2.jpg": [
        {
          x: 2342,
          y: 1555,
          width: 1330,
          height: 730,
          text: "Only visible with UV light, this message reads \"furnace\"",
        },
      ],
    },
  },
  [validNodes.Sticky1]: {
    title: "Sticky Note #1",
    description: "The first of many sticky notes - what I call the 'simple stickies' part of the hunt. This first note points towards the next sticky note hidden near mother's document pile on the wall.",
    sections: [
      {
        title: "Location",
        body: "Found on the refrigerator door.",
      },
      {
        title: "Notes",
        body: "Mother has a rather large document pile on her desk that she eventually works through. This hint is funny because it somewhat points to looking through this pile, which is totally unnecessary!.",
      },
    ],
  },
  [validNodes.Sticky2]: {
    title: "Sticky Note #2",
    description: "The second simple sticky note. This note points towards the next sticky note hidden on the back of mother's bedside table.",
    sections: [
      {
        title: "Location",
        body: "Found on the wall/bookshelf beside mother's computer desk and document pile.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky3]: {
    title: "Sticky Note #3",
    description: "The third simple sticky note. This note points towards the next sticky note hidden on the inside of the closet door in my sister's room.",
    sections: [
      {
        title: "Location",
        body: "Found on the back of mother's bedside table.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky4]: {
    title: "Sticky Note #4",
    description: "The fourth simple sticky note. This note points towards the next sticky note hidden with the large family room clock that gets packed away for Christmas.",
    sections: [
      {
        title: "Location",
        body: "Found on the inside of the closet door in my sister's room.",
      },
      {
        title: "Notes",
        body: "There is also another sticky note hidden on the inside of the wardrobe door in my sister's room. This note says \"NOPE! NOT HERE!\" since this is the more obvious place to look for the next sticky note.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Sticky5]: {
    title: "Sticky Note #5",
    description: "The fifth and final simple sticky note. This note is more cryptic and shows a cat having a moment of inspiration. The Trunic translates to \"I stole it!\". This, along with the image of the light fixture missing a bulb, points towards the next clue hidden in the fake light bulb - the one that the cat has stolen for inspiration.",
    sections: [
      {
        title: "Location",
        body: "Found with the large family room clock that gets packed away for Christmas.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FakeBulb]: {
    title: "Fake Light Bulb",
    description: "In one of the light fixtures in the living room, I replaced one of the lightbulbs with a fake bulb. This bulb could be removed and opened to reveal a hidden message and a small key. The note points out that there might be more to the first hint than originally discovered, along with Trunic for \"box\".",
    sections: [
      {
        title: "Location",
        body: "Living room light fixture.",
      },
      {
        title: "Notes",
        body: "Funny enough, people were commenting on the dead light bulb for a day or so before realizing it was fake.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FridgeKey]: {
    title: "Key",
    description: "A key found inside the fake bulb that opened the fridge.",
    sections: [
      {
        title: "Location",
        body: "Found inside the door of the fridge.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FridgeChest]: {
    title: "Chest in the Fridge",
    description: "A small locked chest hidden in the door of the fridge. The chest contains one of the pages of the manual.",
    sections: [
      {
        title: "Location",
        body: "Found inside the door of the fridge.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Page6]: {
    title:  "Manual - Sheet #6",
    description: "The sixth sheet of the hunt manual, containing pages 10 and 11. Page 10 depicts a train engine driving along the tracks. Page 11 depicts my brother's computer desk with the cat sleeping on it. The left computer screen has a golden path on it. This is a hint to enter this golden path on this computer by pressing the arrow keys in that order, similar to Tunic or Animal Well.",
    sections: [
      {
        title: "Location",
        body: "Found inside a small locked chest hidden in the door of the fridge",
      },
      {
        title: "Hidden Intimation - Page 10",
        body: "The markings on the train engine are the language of Koppai from Pikmin. This translates to \"Bass Drum\", pointing to checking inside the Bass Drum.",
      },
      {
        title: "Hidden Intimation - Page 11",
        body: "There is writing on the notes on the wall in the language of the Devoted from the game Chants of Sennaar. This translates to \"Go to garden, seek pot\", referring to a flower pot in the garden.",
      },
    ],
    imageTooltips: {
      "Page6_1.png": [
        {
          x: 868,
          y: 740,
          width: 780,
          height: 90,
          text: "Bass Drum",
        },
      ],
      "Page6_2.png": [
        {
          x: 135,
          y: 105,
          width: 90,
          height: 90,
          text: "Go",
        },
        {
          x: 315,
          y: 40,
          width: 90,
          height: 90,
          text: "Garden",
        },
        {
          x: 475,
          y: 375,
          width: 90,
          height: 90,
          text: "Seek",
        },
        {
          x: 580,
          y: 325,
          width: 90,
          height: 90,
          text: "Pot",
        },
        {
          x: 50,
          y: 880,
          width: 300,
          height: 400,
          text: "This golden path can be entered on the computer by pressing the arrow keys.",
        },
      ],
    },
  },
  [validNodes.DPadWitness]: {
    title: "Golden Path",
    description:
      "🡳 🡲 🡱 🡰 🡱 🡲\nOR\n🡳 🡰 🡱 🡲 🡱 🡰",
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
    title: "The Witness",
    description:
      "A sequence of witness puzzle that run after entering the golden path. Upon entering the golden path, a loading bar appears saying please wait, after which windows with witness puzzles start popping up on the computer.",
    sections: [
      {
        title: "Location",
        body: "Run after entering golden path.",
      },
      {
        title: "Glitch Bunny",
        body: "This bunny is found by cancelling the loading window before the witness fully starts up. The Trunic text states \"Please wait not and disregard the above\" as a clue to this. This puzzle was inspired by our playthrough of the DLC of Outer Wilds, there you need to intentionally exit the play area during the loading screens.",
      },
      {
        title: "Notes",
        body: "This puzzle is the oldest part of the overall hunt. Originally I had just implemented the ability to enter the golden path and the witness as they were fun references to games that my family enjoyed. The loading window was added later as a bit of a joke as well as to facilitate the addition of the bunny.",
      },
      {
        title: "Credit",
        body: "Source code based off <a href=https://github.com/jbzdarkid/jbzdarkid.github.io>https://github.com/jbzdarkid/jbzdarkid.github.io</a>",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.FakeRock]: {
    title: "Fake Rock",
    description: "A fake rock hidden in the local park. The prize window from the witness pointed to this location. The rock contained a key as well as a broken USB drive with golden letters for \"Mom\".",
    sections: [
      {
        title: "Location",
        body: "Hidden in the low brush behind a fence in the local park.",
      },
      {
        title: "Notes",
        body: "This fake rock contained the final clue that led to the treasure.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.LocationFakeRock]: {
    title: "Witness Prize Window",
    description: "A picture of the local park. Upon closer inspection, the word \"Rock\" is written very faintly in Trunic.",
    sections: [
      {
        title: "Location",
        body: "Shown after completing all the Witness puzzles.",
      },
      {
        title: "Out Of Bounds",
        body: "TODO - TODO",
      },
    ],
    imageTooltips: {
      "park.png": [
        {
          x: 850,
          y: 930,
          width: 110,
          height: 100,
          text: "Rock",
        },
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
  [validNodes.BrokenUSB]: {
    title: "Broken USB",
    description: "A broken USB drive with golden letters for \"Mom\".",
    sections: [
      {
        title: "Location",
        body: "Hidden inside a fake rock in the local park.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.MazeUSB]: {
    title: "Maze USB",
    description: "A simple USB drive. Upon opening the USB drive, you are presented with a maze of directories. There is only one folder, nested deep within, that contains the next hint(s).",
    sections: [
      {
        title: "Location",
        body: "Hidden with all of mom's other SD cards and USBs.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Bokalas]: {
    title: "Bokalas",
    description: "One of the two images found in the USB drive maze when fully navigated. The picture is a zoomed in view of my sister's cat mug.",
    sections: [
      {
        title: "Location",
        body: "Found in the USB drive maze when fully navigated.",
      },
      {
        title: "Notes",
        body: "\"Bokalas\" means \"glass\" or \"mug\" in Lithuanian.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.Thoovaalakal]: {
    title: "Thoovaalakal",
    description: "One of the two images found in the USB drive when fully navigated. The picture is a zoomed in view of towels in the laundry room.",
    sections: [
      {
        title: "Location",
        body: "Found in the USB drive maze when fully navigated.",
      },
      {
        title: "Notes",
        body: "\"Thoovaalakal\" means \"towels\" in Malayalam.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.SDCard]: {
    title: "SD Card",
    description: "SD Card hidden on the bottom of a cat mug. The SD card contains a single video file that shows the location of the next clue.",
    sections: [
      {
        title: "Location",
        body: "Hidden on the bottom of a cat mug.",
      },
    ],
    imageTooltips: {},
  },
  [validNodes.TowelChest]: {
    title: "Chest",
    description: "A small locked chest hidden under towels in the laundry room. The chest contains one of the pages of the manual.",
    sections: [
      {
        title: "Location",
        body: "Hidden in the laundry room, buried in the towels.",
      },
    ],
    imageTooltips: {},
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
  [validNodes.Terminal]: {
    title: "Lost Terminal",
    description: "A fake old LCD terminal screen. With this screen you can visually see the golden paths you are inputting. <br> <a href=/terminal>Try out the Terminal</a>",
    sections: [
      {
        title: "Location",
        body: "Shown when you input a hidden set of Golden Cross inputs from the manual's first Hidden Intimations page.",
      },
    ],
    imageTooltips: {},
  },
};

export default projectMapConfig;
