<template>
  <div class="map-container">
    <svg
      id="map"
      class="map"
      :class="{
        'path-selected': path.isSelected,
        'fading-is-on': userSettings.fading.value,
        'map--is-visible': showMap,
      }"
      :width="mapWidth"
      height="9000px"
    >
      <defs>
        <linearGradient
          id="gradient-shadow-left"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stop-color="rgba(255,255,255,0.5)" />
          <stop offset="75%" stop-color="rgba(0,0,0,1)" />
        </linearGradient>
        <linearGradient
          id="gradient-shadow-right"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stop-color="rgba(255,255,255,0.5)" />
          <stop offset="75%" stop-color="rgba(0,0,0,1)" />
        </linearGradient>
        <radialGradient
          id="gradient-atmosphere"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            offset="0%"
            style="stop-color: rgb(255, 255, 255); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(255, 255, 255); stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="gradient-star"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style="stop-color: white; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #bba; stop-opacity: 1" />
        </radialGradient>
        <radialGradient
          id="gradient-star-corona"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style="stop-color: white; stop-opacity: 1" />
          <stop offset="5%" style="stop-color: white; stop-opacity: 0.3" />
          <stop offset="100%" style="stop-color: white; stop-opacity: 0" />
        </radialGradient>
        <marker
          id="head"
          orient="auto"
          markerWidth="3"
          markerHeight="4"
          refX="0.1"
          refY="2"
        >
          <path
            d="M0,0 V4 L3,2 Z"
            fill="whitesmoke"
            stroke-width="5"
            stroke-linejoin="round"
          />
        </marker>
        <marker
          id="tail"
          orient="auto"
          markerWidth="3"
          markerHeight="4"
          refX="0.1"
          refY="2"
        >
          <path d="M0,0 V4 L2,2 Z" fill="whitesmoke" />
        </marker>
      </defs>
      <g
        v-for="(edge, edgeIndex) in loadedMapData.edgeArray"
        :key="'edge-' + edgeIndex"
        :id="edge.sourceNode + '-' + edge.targetNode"
        :class="['edge']"
      >
        <edge
          :edgeData="edge"
          :source="getLocationById(edge.sourceNode)"
          :target="getLocationById(edge.targetNode)"
          :x1="calculateXPos(getLocationById(edge.sourceNode).position.x)"
          :y1="calculateYPos(getLocationById(edge.sourceNode).position.y)"
          :x2="calculateXPos(getLocationById(edge.targetNode).position.x)"
          :y2="calculateYPos(getLocationById(edge.targetNode).position.y)"
          :force-non-orthogonal="edge.forceNonOrthogonal"
          :vertical-before-horizontal="edge.verticalBeforeHorizontal"
        />
      </g>
      <node
        v-for="(
          location, locationId, locationIndex
        ) in loadedMapData.locationsObject"
        :key="locationIndex"
        :node-data="location"
        :radius="nodeRadius"
        :is-selected-node="location.id === selectedNodeId"
        :x-pos="calculateXPos(location.position.x)"
        :y-pos="calculateYPos(location.position.y)"
        :user-settings="userSettings"
        @node-selected="$emit('node-selected', location)"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import Utils from "../../utils/utils";
import Edge from "./Edge.vue";
import Node from "./Node.vue";

export default {
  components: {
    Edge,
    Node,
  },
  props: [
    "map",
    "loadedMapData",
    "path",
    "selectedNodeId",
    "calculateXPos",
    "calculateYPos",
    "getLocationById",
    "userSettings",
  ],
  emits: ["node-selected"],
  data() {
    return {
      showMap: false,
      nodeRadius: 40,
    };
  },
  computed: {
    mapWidth: function () {
      return this.map.maxX + 2 * this.map.yDelta + "px";
    },
  },
  methods: {
    triggerShowMap: function () {
      const self = this;
      Utils.debounce(
        () => {
          self.showMap = true;
        },
        1000,
        "mapLoaded"
      );
    },
  },
  mounted() {
    this.triggerShowMap();
  },
  watch: {
    "loadedMapData.name": function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.showMap = false;
        this.triggerShowMap();
      }
    },
  },
};
</script>
<style lang="sass">
@use "sass:map";
@use 'vuetify/settings' as v;
@import '../../sass/variables'
@import '../../sass/utils/shadow-box'

.map-container
  cursor: crosshair
  grid-row-start: 1
  grid-row-end: 3
  grid-column-start: 2
  grid-column-end: 2
  overflow: hidden
  position: relative
  z-index: 1

  @media #{map.get(v.$display-breakpoints, 'sm-and-down')}
    grid-column-start: 1
    grid-column-end: 1
    grid-row-start: 2
    grid-row-end: 2
  &:hover
    cursor: hand

  &__prompt
    @extend .u-shadow
    background-color: $color-dark
    border-radius: .5rem
    border-left-width: 5px
    border-left-style: solid
    color: $color-light
    left: 2rem
    padding: .5rem 1rem
    position: absolute
    top: 2rem
    z-index: 3

    &--origin
      border-left-color: $color-origin

    &--destination
      border-left-color: $color-destination

    @media #{map.get(v.$display-breakpoints, 'sm-and-down')}
    @media #{map.get(v.$display-breakpoints, 'md-and-up')}
      display: none

  @media #{map.get(v.$display-breakpoints, 'sm-and-down')}
    grid-row-start: 2

  @media #{map.get(v.$display-breakpoints, 'md-and-up')}
    grid-row-end: span 2

.map
  min-height: 100%
  width: 100%
  opacity: 0
  overflow: visible
  text-align: initial

  &--is-visible
    opacity: 1
    transition: opacity .25s

.path-selected.fading-is-on
  .fadable
    opacity: $opacity
    transition: opacity $transition-standard
</style>
