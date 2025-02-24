<template>
  <v-dialog
    :model-value="show && !!gift"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    @update:model-value="closeModal"
  >
    <v-card v-if="!!gift" class="bg-primary-light">
      <v-card-text class="d-flex align-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10" class="px-0">
              <v-btn
                color="accent"
                flat
                rounded="lg"
                prepend-icon="mdi-arrow-left"
                @click="closeModal"
                >Torna alla lista</v-btn
              >
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10" class="bg-neutral-lighten-1 pa-4 pa-md-10 rounded-lg">
              <GiftModalFormContent
                v-if="view === 'message'"
                :gift="gift"
                @submit-completed="closeModal"
              />
              <GiftModalPaymentContent v-else />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { EnrichedGift } from '@/composables/useSpreadsheet'
import { toRefs } from 'vue'
import GiftModalFormContent from './GiftModalFormContent.vue'
import { defineComponent } from 'vue'
import { ref } from 'vue'
import GiftModalPaymentContent from './GiftModalPaymentContent.vue'

type Props = {
  gift?: EnrichedGift
  show: boolean
  view?: 'payment' | 'message'
}

defineComponent({ name: 'GiftModal' })

type Emits = {
  (e: 'close-modal'): void
}

const props = withDefaults(defineProps<Props>(), {
  view: 'message'
})

const emit = defineEmits<Emits>()

const { gift, show } = toRefs(props)

const closeModal = () => {
  emit('close-modal')
}
</script>
