<template>
  <v-container class="mt-2">
    <SectionHeading id="informazioni" title="Informazioni" />

    <v-row>
      <v-col cols="auto" v-if="$vuetify.display.mdAndUp">
        <v-img src="chiesa.jpeg" aspect-ratio="1.7" cover width="396" class="rounded-lg" />
      </v-col>
      <v-col class="d-flex py-md-6 flex-column justify-space-between">
        <div>
          <div>
            <span class="mr-2">Vi aspettiamo il</span>
            <span class="text-primary font-weight-bold">2 settembre 2023, 11:00</span>
          </div>

          <div>
            <span class="text-primary mr-2">Indirizzo:</span>
            <a
              href="https://www.google.com/maps/place/Parrocchia+di+San+Francesco/@43.777858,11.4365713,16z/data=!4m7!3m6!1s0x132ba97aa40cc7fb:0x6ab726ac6e33fbd9!8m2!3d43.777858!4d11.444811!15sCh5jaGllc2EgZGkgc2FuIGZyYW5jZXNjbyBwZWxhZ2-SAQ9jYXRob2xpY19jaHVyY2jgAQA!16s%2Fg%2F11pqvvgx24?shorturl=1"
              target="_blank"
              class="font-weight-bold"
              >Piazza Giuseppe Verdi 1, San Francesco, Pelago</a
            >
          </div>
        </div>

        <v-img
          v-if="$vuetify.display.smAndDown"
          src="chieas-san-francesco.jpeg"
          aspect-ratio="1.7"
          cover
          max-width="396"
          class="rounded-lg mt-6"
        />

        <div class="mt-6 mt-md-0">
          <div class="text-primary font-weight-bold">I nostri recapiti</div>
          <div>
            <span class="text-primary font-weight-bold">Teresa: </span> +39 338 9648057 - Via della
            Fornace 72, Compiobbi, Fiesole (FI)
          </div>
          <div>
            <span class="text-primary font-weight-bold">Tommaso: </span> +39 347 5375249 - Piazza
            Stazione 1A, Pontassieve (FI)
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'

defineComponent({ name: 'InfoSection' })
</script>
