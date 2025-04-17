<template>
  <g>
    <template v-if="drawAsSingleLineSegment">
      <line
        :x1="x1Mod"
        :y1="y1Mod"
        :x2="x2Mod"
        :y2="y2Mod"
        class="edge__line fadable"
        marker-end="url(#head)"
      />
    </template>
    <template v-else>
      <template v-if="this.verticalBeforeHorizontal">
        <path
          :d="`M ${x1Mod},${y1Mod} 
              L ${x1Mod},${y2Mod - ydiffSign * 5} 
              Q ${x1Mod},${y2Mod} ${x1Mod + xdiffSign * 5},${y2Mod} 
              L ${x2Mod},${y2Mod}`"
          class="edge__line fadable"
          marker-end="url(#head)"
          fill="none"
        />
      </template>
      <template v-else>
        <path
          :d="`M ${x1Mod},${y1Mod} 
              L ${x2Mod - xdiffSign * 5},${y1Mod} 
              Q ${x2Mod},${y1Mod} ${x2Mod},${y1Mod + ydiffSign * 5} 
              L ${x2Mod},${y2Mod}`"
          class="edge__line fadable"
          marker-end="url(#head)"
          fill="none"
        />
      </template>
    </template>
    <!-- <foreignObject
      :x="midPointX - 25"
      :y="midPointY - 12"
      width="50"
      height="26"
    >
      <div class="underlay-html-container">
        <p class="edge__label fadable" xmlns="http://www.w3.org/1999/xhtml">
          {{ edgeData.label }}
        </p>
      </div>
    </foreignObject> -->
  </g>
</template>
<script lang="ts">
const arrowheadSize = 12;
const halfStrokeWidth = 0;

export default {
  props: {
    edgeData: Object,
    source: Object,
    target: Object,
    x1: Number,
    x2: Number,
    y1: Number,
    y2: Number,
    forceNonOrthogonal: {
      type: Boolean,
      default: false, // Fallback to false
    },
    verticalBeforeHorizontal: {
      type: Boolean,
      default: false, // Fallback to false
    },
  },
  computed: {
    drawAsSingleLineSegment: function () {
      return this.xdiff === 0 || this.ydiff === 0 || this.forceNonOrthogonal;
    },
    xFirst: function () {
      return true;
    },
    nodeRadius: function () {
      return this.$parent.nodeRadius;
    },
    midPointX: function () {
      return this.getXMidPointOfEdge();
    },
    midPointY: function () {
      return this.getYMidPointOfEdge();
    },
    hyp: function () {
      return Math.sqrt(Math.pow(this.xdiff, 2) + Math.pow(this.ydiff, 2));
    },
    scale: function () {
      return (this.nodeRadius + halfStrokeWidth) / this.hyp;
    },
    arrowheadScale: function () {
      return arrowheadSize / this.hyp;
    },
    x1Mod: function () {
      if (this.drawAsSingleLineSegment) {
        return this.x1 + this.scale * this.xdiff;
      } else {
        return this.snapTailTo90DegreePoints().x;
      }
    },
    y1Mod: function () {
      if (this.drawAsSingleLineSegment) {
        return this.y1 + this.scale * this.ydiff;
      } else {
        return this.snapTailTo90DegreePoints().y;
      }
    },
    x2Mod: function () {
      if (this.drawAsSingleLineSegment) {
        return (
          this.x2 - this.scale * this.xdiff - this.arrowheadScale * this.xdiff
        );
      } else {
        return this.snapHeadTo90DegreePoints().x;
      }
    },
    y2Mod: function () {
      if (this.drawAsSingleLineSegment) {
        return (
          this.y2 - this.scale * this.ydiff - this.arrowheadScale * this.ydiff
        );
      } else {
        return this.snapHeadTo90DegreePoints().y;
      }
    },
    xdiff: function () {
      return this.x2 - this.x1;
    },
    ydiff: function () {
      return this.y2 - this.y1;
    },
    xdiffSign: function () {
      return Math.sign(this.xdiff);
    },
    ydiffSign: function () {
      return Math.sign(this.ydiff);
    },
    angleFromHorizontal: function () {
      return Math.atan(this.ydiff / this.xdiff);
    },
  },
  methods: {
    getXMidPointOfEdge: function () {
      const sourceX = this.x1;
      const targetX = this.x2;
      let xLow, xHigh;
      if (sourceX < targetX) {
        xLow = sourceX;
        xHigh = targetX;
      } else {
        xLow = targetX;
        xHigh = sourceX;
      }
      return xLow + (xHigh - xLow) / 2;
    },
    getYMidPointOfEdge: function () {
      const sourceY = this.y1;
      const targetY = this.y2;
      let yLow, yHigh;
      if (sourceY < targetY) {
        yLow = sourceY;
        yHigh = targetY;
      } else {
        yLow = targetY;
        yHigh = sourceY;
      }
      return yLow + (yHigh - yLow) / 2;
    },
    snapHeadTo90DegreePoints: function () {
      const xdiffSign = Math.sign(this.xdiff);
      const ydiffSign = Math.sign(this.ydiff);

      // Determine the snapping direction
      if (this.verticalBeforeHorizontal) {
        // Snap to left or right edge
        return {
          x:
            this.x2 -
            xdiffSign * (this.nodeRadius + halfStrokeWidth + arrowheadSize),
          y: this.y2,
        };
      } else {
        // Snap to top or bottom edge
        return {
          x: this.x2,
          y:
            this.y2 -
            ydiffSign * (this.nodeRadius + halfStrokeWidth + arrowheadSize),
        };
      }
    },
    snapTailTo90DegreePoints: function () {
      const xdiffSign = Math.sign(this.xdiff);
      const ydiffSign = Math.sign(this.ydiff);

      // Determine the snapping direction
      if (this.verticalBeforeHorizontal) {
        // Snap to top or bottom edge
        return {
          x: this.x1,
          y: this.y1 + ydiffSign * (this.nodeRadius + halfStrokeWidth),
        };
      } else {
        // Snap to left or right edge
        return {
          x: this.x1 + xdiffSign * (this.nodeRadius + halfStrokeWidth),
          y: this.y1,
        };
      }
    },
  },
};
</script>
<style lang="sass">
@import '../../sass/variables'
.map
  .edge
    &__line
      stroke: whitesmoke
      stroke-width: 4
      transition: stroke $transition-standard

    &__label
      background-color: $color-map-light
      border-radius: 4px
      color: $color-map-dark
      font-size: 12px
      margin-bottom: 0
      padding: .25em
      text-align: center
      transition: opacity $transition-standard, color $transition-standard, background-color $transition-standard

  &.path-selected
    .edge-on-path
      .edge
        &__line
          stroke: $color-map-dark
          transition: stroke $transition-standard

        &__label
          color: $color-map-light
          background-color: $color-map-dark
          transition: opacity $transition-standard, color $transition-standard, background-color $transition-standard

    &.fading-is-on
      .edge-on-path
        .edge
          &__line
            opacity: 1

          &__label
            opacity: 1
</style>
