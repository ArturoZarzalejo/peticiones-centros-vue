<template>
  <v-container column class="home">
    <!-- <v-flex>
      <h2>Oportunidad</h2>
      <Oportunidad></Oportunidad>
    </v-flex>
    <v-flex>
      <h2>Perfiles</h2>
      <v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
      <Perfiles v-for="(perfil, indice) in totalPerfiles" :key="indice">
        <v-btn raised v-on:click="del()">Delete</v-btn>
      </Perfiles>
    </v-flex> -->
	<v-flex xs12 lg5 mb-3>
		<v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
		<v-btn raised v-on:click="del()">Borrar Perfil</v-btn>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in totalPerfiles"
            :key="i"
          >
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <CAC></CAC>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
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
    </v-flex> -->
  </v-container>
</template>

<script lang="ts">
import Oportunidad from "@/components/Oportunidad.vue";
import Perfiles from "@/components/Perfiles.vue";
import CAC from "@/components/CAC.vue";
import { Component, Vue } from "vue-property-decorator";

import { mapActions, mapState } from 'vuex';


@Component({
  components: {
    Oportunidad,
    Perfiles,
    CAC
  }
})
export default class Home extends Vue {
  private appVersion: any;
  private totalPerfiles: Array<any> = [];

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
  }

  private add() {
    this.totalPerfiles.push({ unomas: "" });
  }

  private del() {
    this.totalPerfiles.shift();
  }
}
</script>

<style>
.home {
  padding: 1em;
}
</style>

