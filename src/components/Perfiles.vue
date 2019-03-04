<template>
  <v-container fluid class="perfiles">
    <h2>Perfiles</h2>
    <v-layout wrap xs12>
      <v-flex>
        <v-text-field v-model="cantidad" :rules="nameRules" label="Cantidad" required></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field v-model="categoria" :rules="nameRules" label="Categoria" required></v-text-field>
      </v-flex>
      <v-flex>
        <v-checkbox v-model="checkbox1" :label="`Prueba`"></v-checkbox>
      </v-flex>
      <v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-select :items="porcentajeAsignacion" label="Asignación"></v-select>
        </v-flex>
      </v-flex>
      <v-flex xs12>
        <ComboChip title="Tecnologias"></ComboChip>
        <v-btn color="primary" raised v-on:click="getChips(items)">Get chips</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComboChip from "@/components/ComboChip.vue";

@Component({
  components: {
    ComboChip
  }
})
export default class Perfiles extends Vue {
  private appVersion: any;
  private chips = [
    "Programming",
    "Playing video games",
    "Watching movies",
    "Sleeping"
  ];
  private items = ["Streaming", "Eating"];
  private select = ["Vuetify", "Programming"];
  private nameRules = [];
  private categoria = "";
  private porcentajeAsignacion = [...Array(10)].map((element, indice) => {
      return (indice * 10 + 10) + '%';
  });

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
  }

  private getChips(chips: Array<any>) {
    console.log("lalala", chips);
  }

  private remove(item: any) {
    this.chips.splice(this.chips.indexOf(item), 1);
    this.chips = [...this.chips];
  }

  private data() {
    return {
      checkbox1: true,
      valid: false,
      cantidad: ""
    };
  }
}
</script>
