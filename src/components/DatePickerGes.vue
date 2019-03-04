<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class DatePickerGes extends Vue {
  private appVersion: any;
  private date : any;
  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
    this.date = new Date().toISOString().substr(0, 10);
  }

  private data() {
    return {
        menu2: false,
    };
  }
}
</script>