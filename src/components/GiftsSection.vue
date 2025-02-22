<script setup lang="ts">
import HoneyMoonSection from './HoneyMoonSection.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <v-container>
    <SectionHeading id="gifts-section" title="Regali" />

    <v-row justify="center">
      <v-col cols="12" md="10" class="px-6 py-0">
        <HoneyMoonSection />
      </v-col>
    </v-row>
  </v-container>
</template>
