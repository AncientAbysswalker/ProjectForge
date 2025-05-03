<template>
  <g
    :id="nodeData.id"
    class="location"
    :class="[isSelectedNode ? 'selected-node' : '']"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <image-node
      v-if="nodeData.nodeType === 'image'"
      :x-pos="xPos"
      :y-pos="yPos"
      :size="2 * radius"
      :corner-radius="5"
      :icon-url="nodeData.iconUrl"
      :auto-icon-url="nodeData.autoIconUrl"
      :fill-color="fillColor"
    />
    <text-node
      v-if="nodeData.nodeType === 'text'"
      :x-pos="xPos"
      :y-pos="yPos"
      :fill-color="fillColor"
      :radius="radius"
      :text="nodeData.text"
    />
    <svg-node
      v-if="nodeData.nodeType === 'orbit-l1'"
      :x-pos="xPos"
      :y-pos="yPos"
      :fill-color="fillColor"
      :radius="radius"
    />
    <circle
      v-if="isCircle"
      :cx="xPos"
      :cy="yPos"
      :r="formattedRadius"
      class="click-target"
      @click="clickHandler"
    />
    <rect
      v-if="isSquare"
      :x="xPos - radius"
      :y="yPos - radius"
      :width="2 * radius"
      :height="2 * radius"
      class="click-target"
      @click="clickHandler"
    />
    <node-label
      :click-handler="clickHandler"
      :x-pos="xPos"
      :y-pos="yPos"
      :is-visible="userSettings?.alwaysShowLabels.value || isHovered"
      @mouseover.stop
      @mouseleave.stop
    >
      {{ nodeData.label }}
    </node-label>
  </g>
</template>
<script lang="ts">
import NodeLabel from "./nodes/NodeLabel.vue";
import ImageNode from "./nodes/ImageNode.vue";
import TextNode from "./nodes/TextNode.vue";
import SvgNode from "./nodes/SvgNode.vue";

export default {
  components: {
    NodeLabel,
    ImageNode,
    TextNode,
    SvgNode,
  },
  props: {
    nodeData: {
      type: Object as () => {
        id: string;
        nodeType: string;
        iconUrl?: string;
        autoIconUrl?: string;
        text?: string;
        label?: string;
        color?: string;
      },
      required: true,
    },
    isSelectedNode: {
      type: Boolean,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
    },
    userSettings: {
      type: Object,
      required: false,
    },
    xPos: {
      type: Number,
      required: true,
    },
    yPos: {
      type: Number,
      required: true,
    },
  },
  emits: ["node-selected"],
  data() {
    return {
      isHovered: false, // Tracks whether the node is being hovered
    };
  },
  computed: {
    isSquare: function () {
      return ["image"].includes(this.nodeData.nodeType);
    },
    isCircle: function () {
      return ["text", "orbit-l1"].includes(this.nodeData.nodeType);
    },
    formattedRadius: function () {
      return this.radius + "px";
    },
    formattedSize: function () {
      return this.radius * 2 + 4 + "px";
    },
    labelTransformValue: function () {
      return "translate(" + (this.xPos - 75) + "," + (this.yPos + 65) + ")";
    },
    fillColor: function () {
      switch (this.nodeData.nodeType) {
        case "body":
          return this.nodeData.color;
        default:
          return "rgba(0,0,0,0)"; // TODO add to sass
      }
    },
  },
  watch: {
    userSettings: {
      handler: function (newValue) {
        if (newValue) {
          console.log("User settings changed:", newValue);
        }
      },
      deep: true,
    },
  },
  methods: {
    clickHandler: function () {
      this.$emit("node-selected", this.nodeData);
    },
    conditionalClickHandler: function () {
      if (this.isHovered) {
        this.clickHandler();
      }
    },
  },
};
</script>
<style lang="sass">
@import '../../sass/variables'

*
  transition: none

.click-target
  opacity: 0 !important
  &:hover
    cursor: pointer

.node

  &__text
    dominant-baseline: middle
    text-anchor: middle

    stroke: none
    fill: $color-white
    opacity: 1
    font-variant: small-caps
    font-weight: bold

.location
  $radius: 40
  background-color: darken($color-map-background, 7%)
  border-color: $color-white
  color: $color-white
  stroke: $color-map-light
  transition: opacity $transition-standard, stroke $transition-standard, border-color $transition-standard

  &__icon
    stroke-width: 4
    z-index: 2

  &.selected-node
    background-color: $color-origin
    color: $color-white
    fill: $color-origin
    opacity: 1
    stroke: $color-origin
    .body
      border-color: $color-origin
    .location__label
      color: $color-map-dark
      background-color: $color-origin

.location__label
  transition: transform 0.4s, opacity 0.4s
</style>
