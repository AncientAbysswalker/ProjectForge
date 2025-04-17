<template>
  <g class="location__icon location__icon--svg fadable">
    <icon-border :xPos="xPos" :yPos="yPos" :radius="radius"></icon-border>
    <g v-if="$parent.userSettings.showIcons.value">
      <circle :cx="xPos" :cy="yPos + 25" :r="12" fill="none" class=""></circle>
      <circle :cx="xPos" :cy="yPos - 4" :r="2" fill="none" class=""></circle>
      <circle :cx="xPos" :cy="yPos - 24" :r="8" fill="none" class=""></circle>
    </g>
  </g>
</template>
<script lang="ts">
import IconBorder from "./IconBorder.vue";

export default {
  components: {
    IconBorder,
  },
  props: {
    fillColor: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
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
};
</script>
