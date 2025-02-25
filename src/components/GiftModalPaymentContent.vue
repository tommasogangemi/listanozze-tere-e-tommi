<template>
  <div>
    <!-- <div class="my-3">Puoi effettuare il pagamento puoi scegliere una delle seguenti opzioni</div> -->

    <div class="font-weight-bold">Bonifico bancario a:</div>
    <div class="mb-1">Tommaso Tagliaferri</div>
    <div>
      IBAN:
      <v-btn
        append-icon="mdi-content-copy"
        color="primary-lighten-1"
        rounded="lg"
        variant="outlined"
        @click="onIbanClick"
      >
        <span class="font-weight-bold"> IT28C0873638010000000074065 </span>
      </v-btn>
    </div>

    <div class="font-weight-bold mt-3 mb-1">Paypal</div>
    <div
      class="rounded-lg pa-1 paypal"
      @click="openWindow('https://www.paypal.me/ttagliaferri671')"
    >
      <v-img width="96" cover src="paypal.png" />
    </div>

    <div class="font-weight-bold mt-3 mb-1">Satispay</div>
    <div
      class="rounded-lg pa-1 satispay"
      @click="
        openWindow(
          'https://web.satispay.com/download/qrcode/S6Y-CON--3CAEC28A-3949-4B96-AD7B-A2DF45EB8D5B'
        )
      "
    >
      <v-img width="96" src="satispay.png" />
    </div>

    <v-divider class="my-5" />
    <div class="italic-font text-center text-accent" style="font-size: 2rem">Grazie!</div>
  </div>

  <v-snackbar v-model="snackBar" rounded="lg"> Iban copiato! </v-snackbar>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({ name: 'GiftModalPaymentContent' })

const snackBar = ref(false)

const openWindow = (url: string) => {
  window.open(url, '_blank')
}

const onIbanClick = () => {
  navigator.clipboard.writeText('IT28C0873638010000000074065')
  snackBar.value = true

  setTimeout(() => {
    snackBar.value = false
  }, 2000)
}
</script>

<style scoped>
.paypal {
  border: 2px solid rgb(0, 69, 124);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.paypal:hover {
  background: rgba(0, 69, 124, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.satispay {
  border: 2px solid rgb(255, 0, 0);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.satispay:hover {
  background: rgba(255, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}
</style>
