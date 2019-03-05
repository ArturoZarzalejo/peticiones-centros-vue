<template>
  <div class="CAC">
    <v-layout wrap xs12 class="layout-cac">
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
      <v-flex xs12 sm12 md12>
        <ComboChip title="Tipo de pruebas"></ComboChip>
      </v-flex>
      <v-flex xs12 sm6 md6>
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
export default class CAC extends Vue {
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
    return indice * 10 + 10 + "%";
  });
  private comentario = "¿Algún comentario?";

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


<style>
.CAC {
  padding: 2em;
}

.layout-cac > .flex {
  padding: 0.5em 1em;
  box-sizing: border-box;
}
</style>
