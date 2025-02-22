<script setup lang="ts">
import { ref } from 'vue'
import GiftModal from './GiftModal.vue'
import type { EnrichedGift } from '@/composables/useSpreadsheet'

const CARD: EnrichedGift = {
  name: 'Viaggio di nozze in Nuova Zelanda',
  image: 'viaggio.jpeg',
  availableAmount: 100000,
  donatedPercentage: 0
}

const showModal = ref(false)
</script>

<template>
  <v-row justify="center">
    <v-col class="d-flex py-md-6 flex-column justify-space-evenly" style="gap: 20px">
      <p class="card">
        <strong>Il regalo più bello sarà avervi con noi in questo giorno speciale!</strong> ❤️
        <br />
        Se però desiderate aiutarci a rendere ancora più indimenticabile la nostra avventura
        insieme, saremo felici di accogliere un vostro pensiero per il nostro viaggio di nozze in
        <strong>Nuova Zelanda</strong>. Nessun obbligo, solo un gesto spontaneo che porteremo con
        noi ovunque andremo! ✈️✨
      </p>

      <div class="d-flex justify-center">
        <v-btn
          rounded="lg"
          flat
          color="primary-lighten-1"
          style="width: fit-content"
          @click="showModal = true"
        >
          Offri il tuo contributo
        </v-btn>
      </div>
    </v-col>

    <v-col cols="auto">
      <v-img :src="CARD.image" aspect-ratio="1.7" cover width="396" class="rounded-lg" />
    </v-col>

    <v-col cols="12" md="6" class="text-center">
      <p>
        Alternativamente puoi passare presso il negozio <strong>Fantechi Home</strong> di
        Pontassieve dove troverai la nostra lista nozze
      </p>
    </v-col>

    <GiftModal :show="showModal" :gift="CARD" @close-modal="showModal = false" />
  </v-row>
</template>
