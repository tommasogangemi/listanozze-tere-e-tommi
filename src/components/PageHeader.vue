<template>
  <h2 class="italic-font text-primary text-center mt-3">31 Maggio 2025</h2>

  <h1 class="pretty-font text-primary text-center mb-10" style="font-size: 6rem">
    Teresa e Tommaso
  </h1>

  <v-row justify="center" class="mb-8">
    <v-col cols="10" md="9" class="rounded-xl bg-neutral-lighten-1 elevation-2 pa-0">
      <v-img cover src="heading-image.jpeg" aspect-ratio="1.7" class="rounded-xl" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>
