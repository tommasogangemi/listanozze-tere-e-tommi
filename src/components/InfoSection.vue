<template>
  <v-container class="mt-2">
    <SectionHeading id="informazioni" title="Ci sposiamo!" />

    <v-row justify="center">
      <v-col cols="12" md="10" class="px-6 py-0">
        <v-row>
          <v-col cols="auto" v-if="$vuetify.display.mdAndUp">
            <v-img src="chiesa.jpeg" aspect-ratio="1.7" cover width="396" class="rounded-lg" />
          </v-col>

          <v-col class="d-flex py-md-6 flex-column justify-space-between">
            <div>
              <div>
                Vi aspettiamo il
                <strong class="text-primary">31 Maggio 2025, ore 15:30</strong>
                alla
                <a
                  href="https://www.google.it/maps/place/Pieve+San+Pietro+di+Romena/@43.7743988,11.7137861,17z/data=!3m2!4b1!5s0x132b9f8dbbee1ef7:0x5267ff0f08a47beb!4m6!3m5!1s0x132b9f8dbaaf76f5:0xfda8037f5a31cd17!8m2!3d43.774395!4d11.716361!16s%2Fg%2F15dqjwwm?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  class="font-weight-bold"
                >
                  Pieve di San Pietro a Romena (Pratovecchio Stia, AR)
                  <v-icon size="small">mdi-open-in-new</v-icon>
                </a>
              </div>
            </div>

            <v-img
              v-if="$vuetify.display.smAndDown"
              src="chiesa.jpeg"
              aspect-ratio="1.7"
              cover
              max-width="396"
              class="rounded-lg mt-6"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'

defineComponent({ name: 'InfoSection' })
</script>
