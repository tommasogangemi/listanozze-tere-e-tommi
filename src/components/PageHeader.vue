<template>
  <h2 class="italic-font text-primary text-center mt-3">31 Maggio 2025</h2>

  <h1
    class="pretty-font text-primary text-center mt-8 mb-16"
    style="font-size: 4.5rem; line-height: 6rem"
  >
    Tommaso e Teresa
  </h1>

  <v-row justify="center" class="mb-4">
    <v-col cols="10" md="9" class="rounded-xl bg-neutral-lighten-1 elevation-2 pa-0">
      <v-img cover src="heading-image.jpeg" aspect-ratio="1.7" class="rounded-xl" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>
