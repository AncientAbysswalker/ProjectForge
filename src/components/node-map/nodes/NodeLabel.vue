<template>
  <foreignObject
    :x="xPos - 75"
    :y="yPos + 65"
    width="150"
    height="100"
    overflow="visible"
  >
    <div
      class="underlay-html-container"
      :class="{ 'label-visible': isVisible }"
    >
      <p class="node__label fadable">
        <slot></slot>
      </p>
      <div class="click-target" @click="isVisible ? clickHandler() : null" />
    </div>
  </foreignObject>
</template>
<script lang="ts">
export default {
  props: {
    xPos: Number,
    yPos: Number,
    clickHandler: Function,
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="sass">
@import '../../../sass/variables'
$border-radius: 4px

// Animation keyframes
@keyframes scaleIn
  0%
    transform: scale(0)
    opacity: 0
  80%
    transform: scale(1.1)
    opacity: 1
  100%
    transform: scale(1)

@keyframes scaleOut
  0%
    transform: scale(1)
    opacity: 1
  100%
    transform: scale(0)
    opacity: 0

.node__label
  border-radius: $border-radius
  padding: .5em 1em
  text-align: center
  transition: background-color $transition-standard, color $transition-standard

  .path-selected .node-on-path:not(.selected-node) &
    transition: background-color $transition-standard, color $transition-standard

.underlay-html-container
  // Base styles for the container
  background-color: inherit
  position: relative
  &:before
    background-color: $color-map-background
    border-radius: $border-radius
    bottom: 0
    content: ' '
    left: 0
    position: absolute
    right: 0
    top: 0
    z-index: -1
  & > *
    z-index: 1

  // Apply animations to the container div instead of foreignObject
  &.label-visible
    opacity: 1
    animation: scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)
    pointer-events: auto
    cursor: pointer
  &:not(.label-visible)
    opacity: 0
    animation: scaleOut 0.3s ease-out
    pointer-events: none
    cursor: default

  .click-target
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    opacity: 0 !important
</style>
