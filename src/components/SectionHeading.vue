<template>
  <v-row align="center" class="mb-4">
    <v-col>
      <v-divider />
    </v-col>
    <v-col cols="auto">
      <h2 :id="id" class="italic-font text-accent" style="font-size: 2.5rem">
        {{ title }}
      </h2>
    </v-col>
    <v-col>
      <v-divider />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

type Props = {
  title: string
  id: string
}

defineProps<Props>()
</script>
