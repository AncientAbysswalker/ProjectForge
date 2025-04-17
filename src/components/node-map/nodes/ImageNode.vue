<template>
  <g class="location__icon">
    <rect
      :x="xPos - size / 2"
      :y="yPos - size / 2"
      :width="size"
      :height="size"
      :rx="cornerRadius"
      :ry="cornerRadius"
      fill="none"
    />
    <image
      class="location__icon"
      :x="xPos - size / 2"
      :y="yPos - size / 2"
      :width="size"
      :height="size"
      :rx="cornerRadius"
      :ry="cornerRadius"
      :href="computedIconUrl"
    />
  </g>
</template>
<script lang="ts">
const defaultIconPath = "../../../assets/map/icons/";
const unknownIconURL = "../../../assets/map/icons/unknown.png";

export default {
  props: ["xPos", "yPos", "size", "cornerRadius", "iconUrl", "autoIconUrl"],
  computed: {
    computedIconUrl() {
      // Check if autoIconUrl is provided
      if (this.autoIconUrl) {
        return new URL(defaultIconPath + this.autoIconUrl, import.meta.url)
          .href;
      }

      // If autoIconUrl is not provided, use the iconUrl prop
      if (this.iconUrl) {
        return new URL(`${this.iconUrl}`, import.meta.url).href;
      }

      // If neither is provided, return a default icon URL
      return new URL(unknownIconURL, import.meta.url).href;
    },
  },
  created() {
    console.log(this.iconUrl); //all for logging;
    console.log(this.computedIconUrl); //undefined;
  },
};
</script>
