<template>
  <v-container column class="home">
    <v-card>
      <v-flex>
        <h2>Oportunidad</h2>
        <Oportunidad v-model="petition"></Oportunidad>
      </v-flex>
      <v-flex xs12 lg12 mb-12>
        <v-layout justify-space-between>
          <h2>Perfiles</h2>
          <v-btn flat icon color="orange" @click="add(perfilesGeneral)">
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(item,i) in perfilesGeneral" :key="i">
            <template v-slot:header>
              <div>Click para abrir</div>
            </template>
            <v-card>
              <Perfiles>
                <template v-slot:del>
                  <v-flex xs12 sm12 md12>
                    <v-layout justify-end>
                      <v-btn @click="del(perfilesGeneral)" color="primary" flat>Eliminar</v-btn>
                    </v-layout>
                  </v-flex>
                </template>
              </Perfiles>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg12 mb-12>
        <v-layout justify-space-between>
          <h2>CAC</h2>
          <v-btn flat icon color="orange" @click="add(perfilesCAC)">
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(item,i) in perfilesCAC" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <CAC>
                <template v-slot:del>
                  <v-flex xs12 sm12 md12>
                    <v-layout justify-end>
                      <v-btn @click="del(perfilesCAC)" color="primary" flat>Eliminar</v-btn>
                    </v-layout>
                  </v-flex>
                </template>
              </CAC>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex>
        <v-layout>
          <v-layout justify-end>
            <v-btn @click="showForm" color="primary" flat>Enviar petición</v-btn>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Oportunidad from "@/components/Oportunidad.vue";
import Perfiles from "@/components/Perfiles.vue";
import CAC from "@/components/CAC.vue";
import { Component, Vue } from "vue-property-decorator";

import { mapActions, mapState } from "vuex";

@Component({
  components: {
    Oportunidad,
    Perfiles,
    CAC
  },
  methods: {
    ...mapActions(["setPetition"])
  },
  computed: {
    ...mapState(["petition"])
  }
})
export default class Home extends Vue {
  private appVersion: any;
  private perfilesCAC: Array<any> = [];
  private perfilesGeneral: Array<any> = [];
  private setPetition!: () => void;
  private petition!: any;

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
    this.setPetition();
  }

  private add(method: Array<any>) {
    method.push({ unomas: "" });
  }

  private del(method: Array<any>) {
    method.shift();
  }

  private showForm() {
    console.log("Oportunidad: ", this.petition);
  }
}
</script>

<style>
.home > .v-card {
  padding: 1.5em;
}
</style>

