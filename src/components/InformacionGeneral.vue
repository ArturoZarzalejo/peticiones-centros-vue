<template>
  <v-container fluid class="informacion-general">
    <h2>Información General</h2>
    <v-layout row wrap xs12>
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
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template #activator="data">
            <v-text-field
              v-model="date"
              label="Fecha de inicio aproximada"
              prepend-icon="event"
              readonly
              v-on="data.on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" color="orange" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex>
        <v-btn color="primary" ripple v-on:click="clienteClick(cliente)">Clickame</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class InformacionGeneral extends Vue {
  private appVersion: any;
  private date : any;
  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
    this.date = new Date().toISOString().substr(0, 10);
  }

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
