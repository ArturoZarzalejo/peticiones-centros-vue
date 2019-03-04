<template>
  <div class="Oportunidad">
    <v-layout row wrap xs12 class="prueba2">
      <v-flex xs12 sm6 md6>
        <v-text-field v-model="cliente" :rules="nameRules" label="Cliente" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field md4 v-model="titulo" :rules="nameRules" label="titulo" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field md4 v-model="responsable" :rules="nameRules" label="responsable" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field
          md4
          v-model="tiempoGarantia"
          :rules="nameRules"
          label="tiempoGarantia"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field md4 v-model="tipo" :rules="nameRules" label="tipo" required></v-text-field>
      </v-flex>
      <v-flex>
        <v-checkbox v-model="checkCGIS" :label="`CGIS`"></v-checkbox>
      </v-flex>
      <v-flex>
        <v-checkbox v-model="checkBBC" :label="`BBC`"></v-checkbox>
      </v-flex>
      <v-flex>
        <v-checkbox v-model="checkSistemas" :label="`Sistemas`"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-text-field
          md4
          v-model="fechaInicioAprox"
          :rules="nameRules"
          label="fechaInicioAprox"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <DatePickerGes></DatePickerGes>
      </v-flex>
      <v-flex>
        <v-btn color="primary" ripple v-on:click="clienteClick(cliente)">Clickame</v-btn>
      </v-flex>
      <v-flex>
        <v-textarea
          name="input"
          label="Comentarios"
          v-model="comentario"
          auto-grow
          rows="1"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DatePickerGes from "@/components/DatePickerGes.vue";

@Component({
  components : {
    DatePickerGes
  }
})
export default class Oportunidad extends Vue {
  private appVersion: any;
  private date : any;
  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
    this.date = new Date().toISOString().substr(0, 10);
  }
  private checkCGIS = false;
  private checkBBC = false;
  private checkSistemas = false;
  private comentario = '¿Algún comentario?';

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
      responsable: "",
      tiempoGarantia: "",
      tipo: "",
      fechaInicioAprox: "",
      nameRules: [
        // v => !!v || 'Name is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
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
