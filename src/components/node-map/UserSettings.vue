<template>
  <v-sheet class="pa-4" dense>
    <v-list>
      <v-list-item v-for="(setting, index) in userSettings" :key="index">
        <v-switch
          v-model="setting.value"
          class="px-2"
          :label="setting.label"
          density="comfortable"
          scale="0.2"
          hide-details
          inset
        />
      </v-list-item>
    </v-list>
  </v-sheet>
</template>
<script>
export default {
  props: ["userSettings"],
};
</script>
