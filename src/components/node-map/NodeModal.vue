<template>
  <v-dialog
    v-model="dialog"
    :width="dialogWidth"
    height="90%"
    :fullscreen="$vuetify.display.smAndDown"
    content-class="node-modal"
    @click:outside="closeModal"
    @transitionend="onDialogTransitionEnd"
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
                    :class="[
                      'node-modal__tooltip-hotspot',
                      { visible: highlightsVisible },
                    ]"
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
              <v-btn
                icon
                @click="previousImage"
                :disabled="images.length === 0"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <span class="text-caption">
                Image {{ currentImageIndex + 1 }} of {{ images.length }}
              </span>
              <v-btn icon @click="nextImage" :disabled="images.length === 0">
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
      images: [] as string[], // Array to hold all images in the folder
      currentImageIndex: 0, // Index of the currently displayed image
      activeTooltipIndex: null as number | null,
      imageLoaded: false,
      imageWidth: 0,
      imageHeight: 0,
      displayedImageWidth: 0,
      displayedImageHeight: 0,
      imageOffsetLeft: 0,
      imageOffsetTop: 0,
      resizeObserver: null as ResizeObserver | null,
      highlightsVisible: false, // Controls visibility of highlight areas
      timeoutIds: [] as number[], // List to track all active timeouts
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
      return this.$vuetify.display.mdAndUp ? "90%" : "90%";
    },
    hasTooltips() {
      return (
        this.modalData.imageTooltips &&
        Object.keys(this.modalData.imageTooltips).length > 0
      );
    },
    currentImage() {
      // Return the currently selected image based on the index
      return this.images.length > 0
        ? this.images[this.currentImageIndex]
        : null;
    },
    currentImageName() {
      // Extract the filename from the currentImage URL
      if (this.currentImage) {
        const parts = this.currentImage.split("/");
        return parts[parts.length - 1]; // Return the last part of the URL (the filename)
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
    async loadImages() {
      try {
        const images = import.meta.glob(
          "/src/assets/map/2024/images/*/*.{png,jpg,jpeg}",
          {
            eager: true,
            import: "default",
          }
        );
        console.log(images); // Log to check the image paths

        this.images = Object.entries(images)
          .filter(([path]) => path.includes(`/${this.nodeId}/`))
          .map(([, mod]) => mod as string);
      } catch (error) {
        console.error(
          `Failed to load images for nodeId: ${this.nodeId}`,
          error
        );
        this.images = [];
      }
    },
    nextImage() {
      // Navigate to the next image in the array
      if (this.images.length > 0) {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length; //
      }
    },
    previousImage() {
      // Navigate to the previous image in the array
      if (this.images.length > 0) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.images.length) %
          this.images.length;
      }
    },
    onImageLoad(event: Event) {
      const img = event.target as HTMLImageElement;

      // Store the natural dimensions of the image
      this.imageWidth = img.naturalWidth;
      this.imageHeight = img.naturalHeight;

      // Add a slight delay to ensure layout is complete
      this.setTrackedTimeout(() => {
        // Update image dimensions and position
        this.updateImageMeasurements();

        // Set up resize observer to track container size changes
        this.setupResizeObserver();

        // Mark image as loaded
        this.imageLoaded = true;

        // Force a re-measurement after a short delay to ensure accuracy
        this.setTrackedTimeout(() => {
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
    setTrackedTimeout(callback: () => void, delay: number) {
      const timeoutId = window.setTimeout(() => {
        callback();
        // Remove the timeout ID from the list after execution
        this.timeoutIds = this.timeoutIds.filter((id) => id !== timeoutId);
      }, delay);
      this.timeoutIds.push(timeoutId);
    },
    clearAllTimeouts() {
      this.timeoutIds.forEach((id) => clearTimeout(id));
      this.timeoutIds = [];
    },
    updateMeasurementsAndShowHighlights() {
      // Clear all existing timeouts to avoid conflicts
      this.clearAllTimeouts();

      // Delay measurements to ensure layout stabilization
      this.setTrackedTimeout(() => {
        this.updateImageMeasurements();

        // Show highlights after measurements are updated
        this.setTrackedTimeout(() => {
          this.highlightsVisible = true;
        }, 50); // Adjust delay as needed for animation timing
      }, 200); // Delay to ensure layout stabilization
    },
    onDialogTransitionEnd() {
      if (this.dialog) {
        // Ensure measurements are updated and highlights are shown
        this.updateMeasurementsAndShowHighlights();
      } else {
        // Immediately hide highlights when the dialog is closed
        this.highlightsVisible = false;

        // Clear all pending timeouts
        this.clearAllTimeouts();
      }
    },
  },
  mounted() {
    // Add window resize listener
    window.addEventListener("resize", this.updateImageMeasurements);

    // Load images and update measurements
    this.loadImages();
    this.$nextTick(() => {
      this.updateImageMeasurements();
    });
  },
  watch: {
    dialog(newValue) {
      if (newValue) {
        // Load images and update measurements when the dialog is opened
        this.loadImages();
        this.updateMeasurementsAndShowHighlights();
      } else {
        // Hide highlights when the dialog is closed
        this.highlightsVisible = false;
        this.clearAllTimeouts();
      }
    },
    // Also watch for nodeId changes in case the modal is reopened with a different node
    nodeId() {
      if (this.dialog) {
        this.loadImages();
        // Reset image state when nodeId changes
        this.currentImageIndex = 0;
        this.imageLoaded = false;
      }
    },
  },
  beforeUnmount() {
    // Clear all timeouts on unmount
    this.clearAllTimeouts();

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
    height: 80%
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
    opacity: 0
    transition: opacity 0.3s ease
    &.visible
      opacity: 1
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
