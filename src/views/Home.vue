<template>
  <v-container column class="home">
    <v-flex>
      <h2>Oportunidad</h2>
      <Oportunidad></Oportunidad>
    </v-flex>
    <v-flex>
      <h2>Perfiles</h2>
	  <v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
      <Perfiles v-for="(perfil, indice) in totalPerfiles" :key="indice">
        <v-btn raised v-on:click="del()">Delete</v-btn>
      </Perfiles>
    </v-flex>
	<v-flex>
      <h2>CAC</h2>
	  <v-btn raised v-on:click="add()">Añadir Perfil</v-btn>
      <Perfiles v-for="(perfil, indice) in totalPerfiles" :key="indice">
        <v-btn raised v-on:click="del()">Delete</v-btn>
      </Perfiles>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import Oportunidad from "@/components/Oportunidad.vue";
import Perfiles from "@/components/Perfiles.vue";
import CAC from "@/components/CAC.vue";
import { Component, Vue } from "vue-property-decorator";

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

