<template>
  <div
    class="u-page-container node-v-map-page"
    :class="{ 'page-loaded': pageLoaded }"
  >
    <node-modal
      v-model="showModal"
      :node-id="selectedNodeId"
      @modal-closed="handleModalClosed"
    ></node-modal>
    <site-title class="fade-in">Christmas 2024: Secret Hunt Map</site-title>
    <node-map
      :loaded-map-data="loadedMapData"
      :map="map"
      :path="path"
      :selectedNodeId="selectedNodeId"
      v-on:node-selected="nodeSelected($event)"
      :calculate-x-pos="calculateXPos"
      :calculate-y-pos="calculateYPos"
      :getLocationById="getLocationObject"
      :user-settings="userSettings"
    />
    <settings-drawer
      :user-settings="userSettings"
      :nav-drawer-open="navDrawerOpen"
      :handle-settings-button-click="handleSettingsButtonClick"
    />
  </div>
</template>
<script lang="ts">
import panzoom from "panzoom";
import type { PanZoom } from "panzoom";

import Utils from "../utils/utils";
import SolarSystem from "../data/christmas-2024";

// import Controls from "../components/Controls";
import NodeMap from "../components/node-map/NodeMap.vue";
import SiteTitle from "../components/SiteTitle.vue";
import NodeModal from "../components/node-map/NodeModal.vue";

// These types are used in the component's implementation
import type { SolarSystem } from "@/data/christmas-2024";
import UserSettings from "@/components/node-map/UserSettings";
import SettingsDrawer from "@/components/node-map/SettingsDrawer";

interface DVPComponentData {
  pageLoaded: boolean;
  navDrawerOpen: boolean;
  bannerTitle: string;
  mapSVG: SVGElement | null;
  panzoom: PanZoom;
  userSettings: {
    showIcons: { value: boolean; label: string };
    showBodyShadows: { value: boolean; label: string };
    fading: { value: boolean; label: string };
    showAtmosphere: { value: boolean; label: string };
  };
  mapBuilders: Record<string, SolarSystem>;
  currentMapName: string;
  loadedMapData: {
    name: string;
    startingNodeId: string;
    locationsObject: Record<string, any>;
    edgeArray: any[];
    edgeGraph: Record<string, any>;
  };
  map: {
    globalXOffset: number;
    globalYOffset: number;
    maxX: number;
    minX: number;
    currentY: number;
    yDelta: number;
    xDelta: number;
  };
  selectedNodeId: string | null;
  showModal: boolean;
}

export default {
  components: {
    NodeMap,
    SiteTitle,
    NodeModal,
    UserSettings,
    SettingsDrawer,
  },
  data(): DVPComponentData {
    const mapBuilders = this.getMapBuilders();

    // the default map name is Solar ...
    let currentMapName = "Solar";

    // .. try to get the map name from the URL ...
    if (this.mapNameIsSupplied()) {
      if (this.parameterMapNameIsValid()) {
        currentMapName = this.$route.query.map;
      } else {
        this.$router.push("/map-not-found/" + this.$route.query.map);
        return {};
      }
    } else {
      // ... or get the map name from local storage
      const localStorageMapName = localStorage.getItem("map-name");
      if (localStorageMapName) {
        currentMapName = localStorageMapName;
      }
    }

    // make map name lowercase
    currentMapName = currentMapName.toLowerCase();

    const dataObject = {
      pageLoaded: false,
      navDrawerOpen: false,
      bannerTitle: "banner-intro-hide",
      mapSVG: null,
      panzoom: null,
      userSettings: {
        showIcons: {
          value: localStorage.getItem("user-settings.show-icons") !== "false",
          label: "icons",
        },
        showBodyShadows: {
          value:
            localStorage.getItem("user-settings.show-body-shadows") !== "false",
          label: "shadows",
        },
        fading: {
          value: localStorage.getItem("user-settings.fading") !== "false",
          label: "fading",
        },
        showAtmosphere: {
          value:
            localStorage.getItem("user-settings.show-atmosphere") !== "false",
          label: "atmosphere",
        },
      },
      // map data
      mapBuilders,
      currentMapName,
      loadedMapData: this.resetMapDataStructures(mapBuilders[currentMapName]),
      // map position
      map: {
        globalXOffset: 3000,
        globalYOffset: 300,
        maxX: 0,
        minX: 0,
        currentY: 0,
        yDelta: 250,
        xDelta: 250,
      },
      // selected path
      path: {
        isSelected: false,
        aerobrakingAvailable: false,
        origin: false,
        destination: false,
        deltaV: null,
        edgesGraph: {},
        edgesList: [],
        nodes: {},
      },
      selectedNodeId: null,
      showModal: false,
    };
    return dataObject;
  },
  methods: {
    handleSettingsButtonClick: function () {
      this.navDrawerOpen = !this.navDrawerOpen;
    },
    getMapBuilders: function () {
      return {
        solar: SolarSystem,
      };
    },
    getLocationObject: function (id) {
      return this.loadedMapData.locationsObject[id];
    },
    setLocationObject: function (locationId, locationData) {
      this.loadedMapData.locationsObject[locationId] = locationData;
    },
    mapNameIsValid: function (mapName) {
      const mapBuilders = this.getMapBuilders();
      return Utils.isDefined(mapBuilders[mapName]);
    },
    mapNameIsSupplied: function () {
      return (
        Object.keys(this.$route.query).length > 0 &&
        Utils.isDefined(this.$route.query.map)
      );
    },
    parameterMapNameIsValid: function () {
      if (Utils.isDefined(this.$route.query.map)) {
        const currentMapName = this.$route.query.map.toLowerCase();
        const mapNameIsValid = this.mapNameIsValid(currentMapName);
        return mapNameIsValid;
      }
      return false;
    },
    resetMapDataStructures: function (mapBuilder) {
      const mapData = {
        name: mapBuilder.systemName, // Use systemName since mapName doesn't exist yet
        startingNodeId: mapBuilder.star, // Renamed from 'star' to better reflect its purpose
        locationsObject: {},
        edgeArray: [],
        edgeGraph: {},
      };
      this.loadedMapData = mapData;
      localStorage.setItem("map-name", mapData.name.toLowerCase());
      return mapData;
    },
    // Removed unused atmosphere-related methods
    // Removed unused methods
    createData: function (mapName) {
      //<< TODO SIMPLIFY
      const mapBuilder = this.mapBuilders[mapName.toLowerCase()];
      this.resetMapDataStructures(mapBuilder); // Wipe existing data

      // load manual locations data
      this.loadedMapData.locationsObject = mapBuilder.getLocations(this);

      // add edges
      this.loadedMapData.edgeArray = mapBuilder.getDeltas();
    },
    nodeSelected: function (node) {
      console.log(node.id);
      this.selectedNodeId = node.id;
      this.showModal = true;
    },
    handleModalClosed: function () {
      this.selectedNodeId = null;
    },
    moveTo: function (nodeX, nodeY) {
      const mapContainer = document.querySelector(".map-container");
      const mapWidth = mapContainer.offsetWidth;
      const mapHeight = mapContainer.offsetHeight;
      const zoomLevel = this.panzoom.getTransform().scale;
      // scale position to current zoom level
      let x = nodeX * zoomLevel;
      let y = nodeY * zoomLevel;
      // translate position from top left of screen
      x -= mapWidth / 2;
      y -= mapHeight / 2;
      this.panzoom.moveTo(-x, -y);
    },
    moveToNode: function (node) {
      const x = this.calculateXPos(node.position.x);
      const y = this.calculateYPos(node.position.y);
      this.moveTo(x, y);
    },
    moveToStartingPosition: function () {
      // set the default location
      let locationId = this.loadedMapData.startingNodeId;

      // decide what the focus should be
      if (this.mapNameIsSupplied() && this.parameterMapNameIsValid()) {
        // load origin
        if (Utils.isDefined(this.$route.query.origin)) {
          const originId = this.$route.query.origin;
          if (Utils.isDefined(this.getLocationObject(originId))) {
            const origin = this.getLocationObject(originId);
            this.path.origin = origin;
            locationId = originId;
          }
        }

        // load destination
        if (Utils.isDefined(this.$route.query.destination)) {
          const destinationId = this.$route.query.destination;
          if (Utils.isDefined(this.getLocationObject(destinationId))) {
            const destination = this.getLocationObject(destinationId);
            // this.path.destination = destination
            this.nodeSelected(destination);
          }
        }
      }
      this.panzoom.zoomAbs(0, 0, 0.3);
      console.log(locationId);
      console.log(this.getLocationObject(locationId));
      this.moveToNode(this.getLocationObject(locationId));
      setTimeout(() => {
        this.pageLoaded = true;
      }, 1000);
    },
    calculateXPos: function (n) {
      const x = n * this.map.xDelta + this.map.globalXOffset;
      if (x > this.map.maxX) {
        this.map.maxX = x;
      }

      if (x < this.map.minX) {
        this.map.minX = x;
      }

      return x;
    },
    calculateYPos: function (n) {
      const y = n * this.map.yDelta + this.map.globalYOffset;
      if (y > this.map.maxY) {
        this.map.maxY = y;
      }

      if (y < this.map.minY) {
        this.map.minY = y;
      }

      return y;
    },
  },
  mounted() {
    const self = this;
    self.createData(this.loadedMapData.name);
    self.mapSVG = document.getElementById("map");
    const mapContainer = document.querySelector(".map-container");
    const mapWidth = mapContainer.offsetWidth;
    const mapHeight = mapContainer.offsetHeight;
    const zoomLevel = 0.3;
    const startX = (100 + mapWidth + mapWidth * zoomLevel) / 2; // center
    const startY = (mapHeight + mapHeight * zoomLevel - 100) / 2; // center + offset

    self.panzoom = panzoom(self.mapSVG, {
      maxZoom: 4,
      minZoom: 0.05,
      onTouch: function (e) {
        return !e.target.classList.contains("click-target");
      },
    });
    self.panzoom.zoomAbs(startX, startY, zoomLevel);

    self.moveToStartingPosition();
    console.log("process.env", process.env);

    setTimeout(() => {
      this.pageLoaded = true;
    }, 1000);
  },
};
</script>
<style lang="sass">
@use "sass:map";
@use 'vuetify/settings' as v;
@import '../sass/variables'
@import '../sass/utils/shadow-box'
@import '../sass/utils/page'

*
  box-sizing: border-box
  // transition: background-color .25s, border-color .25s, color .25s, opacity .25s, stroke .25s, fill .25s
  // transition: stroke .25s
  // transition: all .25s
  // transition-timing-function: ease

.u-page-container
  display: grid
  background-color: $color-map-background
  background-image: linear-gradient(175deg, $color-map-background, $color-map-background-darker)

  a
    color: $color-light

  &.page-loaded:before
    opacity: 1

  &:before
    @extend .u-shadow
    bottom: 0
    content: ''
    left: 0
    position: absolute
    right: 0
    top: 0
    width: $controls-width
    z-index: 2
    opacity: 0

  @media #{map.get(v.$display-breakpoints, 'sm-and-down')}
    grid-auto-rows: 50px minmax(0, 1fr) auto
    &:before
      display: none

  @media #{map.get(v.$display-breakpoints, 'md-and-up')}
    grid-auto-rows: auto minmax(0, 1fr)
    grid-template-columns: $controls-width auto

.intro
  max-width: 500px
  p
    text-align: left

.fade-in
  opacity: 0

.page-loaded
  .fade-in
    opacity: 1

.v-app-bar
  .v-toolbar__content
    padding: 0
</style>
