<template>
  <v-container>
    <SectionHeading id="lista-nozze" title="Lista Regali" />

    <v-row>
      <v-col v-for="gift in enrichGifts" cols="12" md="6" lg="4" :key="gift.name">
        <GiftCard :gift="gift" @card-click="focusedGift = $event" />
      </v-col>
    </v-row>

    <GiftModal :show="!!focusedGift" :gift="focusedGift" @close-modal="focusedGift = undefined" />
  </v-container>
</template>

<script setup lang="ts">
import GiftCard from './GiftCard.vue'
import { ref } from 'vue'
import GiftModal from './GiftModal.vue'
import SectionHeading from './SectionHeading.vue'
import { useSpreadsheet, type EnrichedGift } from '@/composables/useSpreadsheet'

const { enrichGifts, get } = useSpreadsheet()

get()

const focusedGift = ref<EnrichedGift>()
</script>
