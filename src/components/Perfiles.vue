<template>
  <v-container fluid class="perfiles">
    <h2>Perfiles</h2>
    <v-layout wrap>
      <v-text-field v-model="cantidad" :rules="nameRules" label="cantidad" required></v-text-field>
      <!-- <v-combobox
          v-model="chips"
          :items="items"
          label="Your favorite hobbies"
          chips
          clearable
          prepend-icon="filter_list"
          solo
      >-->
      <v-checkbox v-model="checkbox1" :label="`asfasfasf`"></v-checkbox>
      <!-- <v-flex>
        <template>
          <v-combobox
            v-model="chips"
            :items="items"
            label="Your favorite hobbies"
            chips
            clearable
            prepend-icon="filter_list"
            solo
            deletable-chips
            multiple
          >
            <template v-slot:selection="data">
              <v-chip :selected="data.selected" close @input="remove(data.item)">
                <strong>{{ data.item }}</strong>&nbsp;
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-combobox>
        </template>
      </v-flex> -->
      <v-flex xs12>
        <v-combobox 
        v-model="select" :items="items" label="Tecnologias" multiple chips deletable-chips>
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              :selected="data.selected"
              :disabled="data.disabled"
              class="v-chip--select-multi"
              @input="data.parent.selectItem(data.item)"
            >
              <v-avatar class="accent white--text" v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
    </v-layout>
  </v-container>
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
  private items = ["Streaming", "Eating"];
  private select = ['Vuetify', 'Programming'];
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
      checkbox1: true,
      valid: false,
      cantidad: "",
    };
  }
}
</script>
