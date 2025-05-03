<template>
  <v-navigation-drawer
    :modelValue="navDrawerOpen"
    location="right"
    temporary
    absolute
    :width="325"
  >
    <user-settings :user-settings="userSettings"></user-settings>
    <v-btn
      style="position: absolute; top: 1rem; right: 1rem"
      size="small"
      icon
      plain
      @click.stop="handleSettingsButtonClick"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>
<script lang="ts">
import UserSettings from "@/components/node-map/UserSettings";

export default {
  components: {
    UserSettings,
  },
  props: {
    navDrawerOpen: {
      type: Boolean,
      required: true,
    },
    userSettings: {
      type: Object,
      required: true,
    },
    handleSettingsButtonClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
