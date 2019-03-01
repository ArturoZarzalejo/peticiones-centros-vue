<template>
  <div class="perfiles">
    <h2>Perfiles</h2>
    <v-layout column>
      <v-text-field v-model="cantidad" :rules="nameRules" label="cantidad" required></v-text-field>
      <v-combobox
        v-model="chips"
        :items="items"
        label="Your favorite hobbies"
        chips
        clearable
        prepend-icon="filter_list"
        solo
        multiple
      >
        <template v-slot:selection="data">
          <v-chip :selected="data.selected" close @input="remove(data.item)">
            <strong>{{ data.item }}</strong>&nbsp;
            <span>(interest)</span>
          </v-chip>
        </template>
      </v-combobox>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Perfiles extends Vue {
  private appVersion: any;
  private chips = [
    "Programming",
    "Playing video games",
    "Watching movies",
    "Sleeping"
  ];
  private nameRules = [];

  private created() {
    this.appVersion = process.env.VUE_APP_VERSION;
  }

  private remove(item: any) {
    this.chips.splice(this.chips.indexOf(item), 1);
    this.chips = [...this.chips];
  }

  private data() {
    return {
      valid: false,
      cantidad: "",
      items: ["Streaming", "Eating"]
    };
  }
}
</script>
