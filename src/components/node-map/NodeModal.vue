<template>
  <v-dialog
    v-model="dialog"
    :width="dialogWidth"
    :fullscreen="$vuetify.display.smAndDown"
    content-class="node-modal"
    @click:outside="closeModal"
  >
    <v-card class="node-modal__card">
      <!-- Header with title and close button -->
      <v-card-title class="node-modal__title">
        {{ modalData.title }}
        <v-spacer></v-spacer>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="node-modal__content">
        <v-row>
          <!-- Left pane: Image carousel -->
          <v-col cols="12" md="6" class="node-modal__image-pane">
            <div class="node-modal__image-container">
              <!-- Show image if available -->
              <div v-if="currentImage" class="node-modal__image-wrapper">
                <img
                  ref="modalImage"
                  :src="currentImage"
                  class="node-modal__image"
                  alt="Node image"
                  @load="onImageLoad"
                />

                <!-- Tooltips based on imageTooltips data -->
                <template v-if="hasTooltips && currentImageName && imageLoaded">
                  <div
                    v-for="(tooltip, index) in currentImageTooltips"
                    :key="index"
                    class="node-modal__tooltip-hotspot"
                    :style="getTooltipStyle(tooltip)"
                    @mouseover="activeTooltipIndex = index"
                    @mouseleave="activeTooltipIndex = null"
                  >
                    <div
                      v-if="activeTooltipIndex === index"
                      class="node-modal__tooltip"
                    >
                      {{ tooltip.text }}
                    </div>
                  </div>
                </template>
              </div>

              <!-- Placeholder if no image -->
              <div v-else class="node-modal__image-placeholder">
                <v-icon size="64" color="grey lighten-1">mdi-image</v-icon>
                <p class="text-caption text-center mt-2">
                  No images found for this node
                </p>
              </div>
            </div>

            <!-- Image navigation controls -->
            <div class="node-modal__image-controls">
              <v-btn icon disabled>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <span class="text-caption">Image 1 of 1</span>
              <v-btn icon disabled>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>

          <!-- Right pane: Text content -->
          <v-col cols="12" md="6" class="node-modal__text-pane">
            <div class="node-modal__text-container">
              <p v-if="modalData.description" class="text-body-1 mb-4">
                {{ modalData.description }}
              </p>

              <!-- Text sections -->
              <div
                v-if="modalData.sections && modalData.sections.length > 0"
                class="node-modal__sections"
              >
                <div
                  v-for="(section, index) in modalData.sections"
                  :key="index"
                  class="node-modal__section"
                >
                  <h3 class="node-modal__section-title">
                    {{ section.title }}
                  </h3>
                  <p class="node-modal__section-body">
                    {{ section.body }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { modalContent, validNodes } from "@/data/christmas-2024";

export default {
  name: "NodeModal",
  props: {
    nodeId: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showTooltip: false,
      images: [] as string[],
      currentImageIndex: 0,
      activeTooltipIndex: null as number | null,
      imageLoaded: false,
      imageWidth: 0,
      imageHeight: 0,
      displayedImageWidth: 0,
      displayedImageHeight: 0,
      imageOffsetLeft: 0,
      imageOffsetTop: 0,
      resizeObserver: null as ResizeObserver | null,
    };
  },
  computed: {
    dialog: {
      get() {
        return this.modelValue;
      },
      set(value: boolean) {
        this.$emit("update:modelValue", value);
      },
    },
    modalData() {
      // Check if nodeId is a valid key in modalContent
      if (
        Object.values(validNodes).includes(this.nodeId as validNodes) &&
        modalContent.hasOwnProperty(this.nodeId as validNodes)
      ) {
        return modalContent[this.nodeId as validNodes];
      }

      // Fallback for unknown nodeId
      return {
        title: this.nodeId,
        description: "No additional information available for this node.",
        sections: [],
        imageTooltips: {},
      };
    },
    dialogWidth() {
      return this.$vuetify.display.mdAndUp ? "60%" : "90%";
    },
    hasTooltips() {
      return (
        this.modalData.imageTooltips &&
        Object.keys(this.modalData.imageTooltips).length > 0
      );
    },
    currentImage() {
      // For now, we'll just return the mockup image for Sticky1
      if (this.nodeId === "Sticky1") {
        return "/src/assets/map/2024/images/Sticky1/modal_mockup.png";
      }
      return null;
    },
    currentImageName() {
      // For demo purposes, we'll use a hardcoded image name for Sticky1
      if (this.nodeId === "Sticky1") {
        return "sticky1.jpg";
      }
      return null;
    },
    currentImageTooltips() {
      if (!this.currentImageName || !this.modalData.imageTooltips) {
        return [];
      }

      // Return tooltips for the current image or an empty array if none exist
      return this.modalData.imageTooltips[this.currentImageName] || [];
    },
  },
  methods: {
    closeModal() {
      this.dialog = false;
      this.$emit("modal-closed");
    },
    onImageLoad(event: Event) {
      const img = event.target as HTMLImageElement;

      // Store the natural dimensions of the image
      this.imageWidth = img.naturalWidth;
      this.imageHeight = img.naturalHeight;

      // Add a slight delay to ensure layout is complete
      setTimeout(() => {
        // Update image dimensions and position
        this.updateImageMeasurements();

        // Set up resize observer to track container size changes
        this.setupResizeObserver();

        // Mark image as loaded
        this.imageLoaded = true;

        // Force a re-measurement after a short delay to ensure accuracy
        setTimeout(() => {
          this.updateImageMeasurements();
        }, 100);
      }, 50);
    },
    updateImageMeasurements() {
      // Get the image element
      const img = this.$refs.modalImage as HTMLImageElement;
      if (!img) return;

      // Get the image wrapper element
      const wrapper = img.parentElement as HTMLElement;
      if (!wrapper) return;

      // Get the displayed dimensions
      this.displayedImageWidth = img.getBoundingClientRect().width;
      this.displayedImageHeight = img.getBoundingClientRect().height;

      // Calculate the offset of the image from the left and top of the wrapper
      // This accounts for when the image is centered with padding
      const wrapperRect = wrapper.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();

      this.imageOffsetLeft = imgRect.left - wrapperRect.left;
      this.imageOffsetTop = imgRect.top - wrapperRect.top;
    },
    setupResizeObserver() {
      // Clean up existing observer if any
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }

      // Create a new ResizeObserver
      this.resizeObserver = new ResizeObserver(() => {
        // Update measurements when container size changes
        this.updateImageMeasurements();
      });

      // Observe the image wrapper
      const img = this.$refs.modalImage as HTMLImageElement;
      if (img && img.parentElement) {
        this.resizeObserver.observe(img.parentElement);
      }
    },
    getTooltipStyle(tooltip: {
      x: number;
      y: number;
      width: number;
      height: number;
      text: string;
    }) {
      if (!this.imageLoaded || !this.imageWidth || !this.imageHeight) {
        return {};
      }

      // Calculate the scaling factor between the original image and the displayed image
      const scaleX = this.displayedImageWidth / this.imageWidth;
      const scaleY = this.displayedImageHeight / this.imageHeight;

      // Calculate the position and size based on the scaling factor
      // Include the offset to account for image centering
      const left = tooltip.x * scaleX + this.imageOffsetLeft;
      const top = tooltip.y * scaleY + this.imageOffsetTop;
      const width = tooltip.width * scaleX;
      const height = tooltip.height * scaleY;

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
      };
    },
  },
  mounted() {
    // Add window resize listener
    window.addEventListener("resize", this.updateImageMeasurements);
  },
  beforeUnmount() {
    // Clean up resize observer
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    // Remove window resize listener
    window.removeEventListener("resize", this.updateImageMeasurements);
  },
};
</script>

<style lang="sass">
.node-modal
  &__card
    border-radius: 8px
    overflow: hidden

  &__title
    font-size: 1.5rem
    font-weight: bold
    padding: 16px 24px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    align-items: center
    justify-content: space-between

  &__content
    padding: 16px 24px
    font-size: 1.1rem

  &__image-pane
    @media (min-width: 960px)
      padding-right: 12px

  &__image-container
    position: relative
    width: 100%
    height: 300px
    background-color: #f5f5f5
    border-radius: 4px
    border: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 16px
    overflow: hidden

  &__image-wrapper
    position: relative
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center

  &__image
    max-width: 100%
    max-height: 100%
    object-fit: contain

  &__image-placeholder
    text-align: center

  &__image-controls
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 16px

  &__tooltip-hotspot
    position: absolute
    background-color: rgba(255, 255, 0, 0.3)
    border: 1px dashed #999
    cursor: pointer
    z-index: 5

  &__tooltip
    position: absolute
    top: -40px
    left: 0
    background-color: rgba(0, 0, 0, 0.8)
    color: white
    padding: 8px 12px
    border-radius: 4px
    font-size: 14px
    z-index: 10
    white-space: nowrap
    pointer-events: none

    &:after
      content: ''
      position: absolute
      bottom: -8px
      left: 20px
      border-left: 8px solid transparent
      border-right: 8px solid transparent
      border-top: 8px solid rgba(0, 0, 0, 0.8)

  &__text-pane
    @media (min-width: 960px)
      padding-left: 12px

  &__text-container
    height: 100%
    padding: 16px
    border-radius: 4px
    border: 1px solid rgba(0, 0, 0, 0.1)

  &__sections
    display: flex
    flex-direction: column
    gap: 24px

  &__section
    &:not(:last-child)
      margin-bottom: 16px
      padding-bottom: 16px
      border-bottom: 1px solid rgba(0, 0, 0, 0.1)

  &__section-title
    font-size: 1.25rem
    font-weight: bold
    margin-bottom: 8px
    color: #333

  &__section-body
    font-size: 1rem
    line-height: 1.5
    color: #555

  .placeholder-text
    font-style: italic
    opacity: 0.7

// Scale animation
.v-dialog-transition
  &-enter-active, &-leave-active
    transition: all 0.3s ease

  &-enter-from, &-leave-to
    opacity: 0
    transform: scale(0.9)

  &-enter-to, &-leave-from
    opacity: 1
    transform: scale(1)
</style>
