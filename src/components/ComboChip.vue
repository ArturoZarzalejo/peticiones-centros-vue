<template>
    <v-combobox
        v-model="select"
        :items="items"
        label="Tecnologias"
        multiple
        chips
        deletable-chips
    >
        <template v-slot:selection="data">
        <v-chip
            :key="JSON.stringify(data.item)"
            :selected="data.selected"
            :disabled="data.disabled"
            close
            class="v-chip--select-multi"
            @input="data.parent.selectItem(data.item)"
        >
            <v-avatar class="accent white--text" v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
            {{ data.item }}
        </v-chip>
        </template>
    </v-combobox>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ComboChip extends Vue {
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