<template>
  <g class="location__icon">
    <icon-border
      :xPos="xPos"
      :yPos="yPos"
      :fillColor="fillColor"
      :radius="radius"
    ></icon-border>
    <text class="node__text" :x="xPos" :y="yPos" :font-size="fontSize">{{
      text
    }}</text>
  </g>
</template>
<script lang="ts">
export default {
  props: {
    xPos: { type: Number, required: true },
    yPos: { type: Number, required: true },
    radius: { type: Number, required: true },
    fillColor: { type: String, required: true },
    text: { type: String, required: true },
  },
  computed: {
    fontSize() {
      return String((2 * 3) / this.text.length) + "em"; // 2em works well for 3 chars
    },
  },
};
</script>
