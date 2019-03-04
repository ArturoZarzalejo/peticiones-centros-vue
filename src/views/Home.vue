<template>
  <v-container column class="home">
    <v-card>
      <v-flex>
        <h2>Oportunidad</h2>
        <Oportunidad></Oportunidad>
      </v-flex>
      <!-- <v-flex>
        <h2>Perfiles</h2>
        <v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
        <Perfiles v-for="(perfil, indice) in totalPerfiles" :key="indice">
          <v-btn raised v-on:click="del()">Delete</v-btn>
        </Perfiles>
      </v-flex>-->
      <v-flex xs12 lg12 mb-12>
        <h2>Perfiles</h2>
        <v-btn raised v-on:click="add(perfilesGeneral)">Añadir Perfil</v-btn>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(item,i) in perfilesGeneral" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <Perfiles>
                <template v-slot:del>
                  <v-btn v-on:click="del(perfilesGeneral)" color="primary" small dark right bottom>
                    <!-- <v-icon>close</v-icon> -->
                    close
                  </v-btn>
                </template>
              </Perfiles>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg12 mb-12>
		<h2>CAC</h2>
        <v-btn raised v-on:click="add(perfilesCAC)">Añadir Perfil</v-btn>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(item,i) in perfilesCAC" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <CAC>
                <template v-slot:del>
                  <v-btn v-on:click="del(perfilesCAC)" color="primary" small dark right bottom>
                    <!-- <v-icon>close</v-icon> -->
                    close
                  </v-btn>
                </template>
              </CAC>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-card>

    <!-- <v-flex>
      <h2>CAC</h2>
      <CAC v-for="(perfil, indice) in totalPerfiles" :key="indice">
        <template v-slot:add>
          <v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
        </template>
        <template v-slot:del>
          <v-btn raised v-on:click="del()">Delete</v-btn>
        </template>
      </CAC>
    </v-flex>-->
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
  }
})
export default class Home extends Vue {
  private appVersion: any;
  private perfilesCAC: Array<any> = [];
  private perfilesGeneral: Array<any> = [];

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
  }

  private add(method:Array<any>) {
    method.push({ unomas: "" });
  }

  private del(method:Array<any>) {
    method.shift();
  }
}
</script>

<style>
.home > .v-card {
  padding: 1em;
}
</style>

