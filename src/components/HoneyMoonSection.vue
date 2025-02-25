<script setup lang="ts">
import { computed, ref } from 'vue'
import GiftModal from './GiftModal.vue'
import type { EnrichedGift } from '@/composables/useSpreadsheet'

const CARD: EnrichedGift = {
  name: 'Viaggio di nozze in Nuova Zelanda',
  image: 'viaggio.jpeg',
  availableAmount: 100000,
  donatedPercentage: 0
}

const giftModalView = ref<'payment' | 'message'>()
const showModal = computed(() => !!giftModalView.value)
</script>

<template>
  <v-row justify="center">
    <v-col class="d-flex py-md-6 flex-column justify-space-evenly" style="gap: 20px">
      <p class="card">
        <strong>Il regalo più bello sarà avervi accanto a noi in questo giorno!</strong>
        <br />
        Se desiderate, potete aiutarci a realizzare il viaggio dei nostri sogni in Nuova Zelanda,
        oppure presso il negozio Fantechi Home di Pontassieve, troverete la nostra lista nozze - Via
        Praga 13, Pontassieve, Tel. 055 8315634
      </p>

      <div class="d-flex flex-column flex-md-row justify-space-around align-center">
        <v-btn
          rounded="lg"
          flat
          variant="outlined"
          color="primary-lighten-1"
          style="width: fit-content"
          class="mb-4 mb-md-0"
          @click="giftModalView = 'message'"
        >
          <span class="font-weight-bold"> Lascia un messaggio di auguri </span>
        </v-btn>

        <v-btn
          rounded="lg"
          flat
          color="primary-lighten-1"
          style="width: fit-content"
          @click="giftModalView = 'payment'"
        >
          <span class="font-weight-bold"> Per contribuire al viaggio </span>
        </v-btn>
      </div>
    </v-col>

    <v-col cols="auto">
      <v-img :src="CARD.image" aspect-ratio="1.7" cover width="396" class="rounded-lg" />
    </v-col>

    <GiftModal
      :show="showModal"
      :view="giftModalView"
      :gift="CARD"
      @close-modal="giftModalView = undefined"
    />
  </v-row>
</template>
