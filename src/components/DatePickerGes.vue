<template>
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
      <v-text-field v-model="dateForDatepicker" :label="title" prepend-icon="event" readonly v-on="data.on"></v-text-field>
    </template>
    <v-date-picker v-model="dateForDatepicker" color="orange" @input="menu2 = false"></v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from "vue-property-decorator";

@Component({})
export default class DatePickerGes extends Vue {
  @Prop() public title!: string;
  @Model('change') date!: any;
  @Watch('dateForDatepicker')
  onDatePicked(newDate: any, oldDate: any) {
    this.date = this.dateForDatepicker;
  }
  
  public dateForDatepicker!: any;

  private created() {
    this.dateForDatepicker = this.date ? this.date : this.dateForDatepicker = new Date().toISOString().substr(0, 10);
  }

  private data() {
    return {
      menu2: false
    };
  }
}
</script>