<template>
  <div class="Oportunidad">
    <v-layout row wrap xs12 class="prueba2">
      <v-flex xs12 sm6 md4>
        <v-text-field v-model="cliente" :rules="nameRules" label="Cliente" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-text-field
          md4
          v-model="nombreOportunidad"
          :rules="nameRules"
          label="Nombre de la oportunidad"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-text-field
          md4
          v-model="responsable"
          :rules="nameRules"
          label="Responsable"
          readonly
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-text-field
          md4
          v-model="tiempoGarantia"
          :rules="nameRules"
          label="Tiempo de Garantía"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-select :items="itemsTipo" label="Tipo" required></v-select>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <DatePickerGes title="Fecha de inicio aproximada"></DatePickerGes>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <DatePickerGes title="Fecha de fin aproximada"></DatePickerGes>
      </v-flex>
      <v-flex xs12 sm6 md12>
        <ComboChip title="Tecnologias"></ComboChip>
      </v-flex>
      <!-- <v-flex xs12 sm6 md4>
        <v-text-field
          md4
          v-model="tiempoGarantia"
          :rules="nameRules"
          label="tiempoGarantia"
          required
        ></v-text-field>
      </v-flex>-->
      <v-flex xs12 sm6 md2>

          <v-flex>
            <v-subheader>Afecta a:</v-subheader>
          </v-flex>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-checkbox v-model="checkCGIS" :label="`CGIS`"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-checkbox v-model="checkBBC" :label="`BBC`"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-checkbox v-model="checkSistemas" :label="`Sistemas`"></v-checkbox>
      </v-flex>
      <v-flex v-if="checkCGIS" xs12 sm12 md12>
        <ComboChip title="CGIS"></ComboChip>
      </v-flex>
      <!-- <v-flex xs12 sm6 md6>
        <DatePickerGes></DatePickerGes>
      </v-flex> -->
      <!-- <v-flex>
        <v-btn color="primary" ripple v-on:click="clienteClick(cliente)">Clickame</v-btn>
      </v-flex> -->
      <v-flex xs12 sm12 md12>
        <v-textarea name="input" label="Comentarios" v-model="comentario" auto-grow rows="1"></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DatePickerGes from "@/components/DatePickerGes.vue";
import ComboChip from "@/components/ComboChip.vue";

@Component({
  components: {
    DatePickerGes,
    ComboChip
  }
})
export default class Oportunidad extends Vue {
  private appVersion: any;
  private date: any;
  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
    this.date = new Date().toISOString().substr(0, 10);
  }
  private checkCGIS = false;
  private checkBBC = false;
  private checkSistemas = false;
  private comentario = "¿Algún comentario?";
  private responsable = "Arturo Zarzalejo";
  private nombreOportunidad = "";
  private itemsTipo = [
    "Asistencia Técnica",
    "Consultoría",
    "Desarrollo",
    "Diseño",
    "Mantenimiento/Servicio",
    "Otros",
    "Piloto"
  ];

  private clienteClick(cliente: string) {
    console.log("click", this.date);
  }

  private data() {
    return {
      // date: new Date().toISOString().substr(0, 10),
      modal: false,
      menu2: false,
      valid: false,
      cliente: "",
      titulo: "",
      responsable: "Arturo Zarzalejo",
      tiempoGarantia: "",
      tipo: "",
      fechaInicioAprox: "",
      nameRules: [(v: any) => !!v || "Cliente es un campo obligatorio"],
      email: "",
      emailRules: [
        // v => !!v || 'E-mail is required',
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    };
  }
}
</script>

<style>
.prueba2 > .flex {
  padding: 1em;
  box-sizing: border-box;
}
</style>
