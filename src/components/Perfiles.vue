<template>
  <div class="perfiles">
    <v-layout row wrap xs12 sm12 md12 class="layout-perfiles">
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="cantidad" :rules="nameRules" label="Cantidad" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="categoria" :rules="nameRules" label="Categoria" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <ComboChip title="Tecnologias"></ComboChip>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <DatePickerGes title="Fecha de inicio aproximada"></DatePickerGes>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <DatePickerGes title="Fecha de fin aproximada"></DatePickerGes>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-select v-model="lugar" :items="itemsLugar" label="Lugar" required></v-select>
      </v-flex>
      <v-flex xs12 sm6 md6 v-if="lugar == 'Cliente'">
        <v-text-field v-model="direccionCliente" :rules="nameRules" label="Dirección"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6>
        <v-select :items="porcentajeAsignacion" label="Asignación"></v-select>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-textarea v-model="comentario" name="input" label="Comentarios" auto-grow rows="1"></v-textarea>
      </v-flex>
      <slot name="del"></slot>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComboChip from "@/components/ComboChip.vue";
import DatePickerGes from "@/components/DatePickerGes.vue";

@Component({
  components: {
    ComboChip,
    DatePickerGes
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
  private itemsLugar = ["Oficina", "Cliente"];
  private lugar = "";
  private direccionCliente = "";
  private nameRules = [];
  private cantidad = "";
  private categoria = "";
  private porcentajeAsignacion = [...Array(10)].map((element, indice) => {
    return indice * 10 + 10 + "%";
  });
  private comentario = "";

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
  }

  private getChips(chips: any[]) {
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

<style>
.perfiles {
  padding: 0 2em;
}
.layout-perfiles > .flex {
  padding: 0.5em 1em;
  box-sizing: border-box;
}
</style>