<template>
  <h1 class="pretty-font text-primary text-center mt-8 mb-3 mb-md-0" style="font-size: 6rem">
    Teresa e Tommaso
  </h1>

  <h2 class="italic-font text-primary text-center mb-8 mt-3 mt-md-0">31 Maggio 2025</h2>

  <v-row justify="center" class="mb-8">
    <v-col cols="10" md="9" class="rounded-lg bg-neutral-lighten-1 elevation-2 pa-0">
      <v-img cover src="heading-image.jpeg" aspect-ratio="1.7" class="rounded-lg" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>
