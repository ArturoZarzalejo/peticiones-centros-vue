<template>
  <v-combobox v-model="select" :items="items" :label="title" multiple chips deletable-chips clearable>
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
import { Component, Vue, Prop, Model, Watch, Emit } from "vue-property-decorator";

@Component({})
export default class ComboChip extends Vue {
  @Prop() public title!: string;
  @Prop() public items!: string[];
  @Model('update:combochip') itemsModel!: any;
  public itemsSelected: string[] = [];

  @Watch('itemsSelected')
  onItemsSelected(itemsSelected: any) {
    this.updateItemsModel(itemsSelected);
  }

  @Emit('update:combochip')
  updateItemsModel(items: string[]) {
    return items;
  }

  @Watch('itemsModel')
  onItemsModelChanged(itemsModel: any) {
    this.itemsSelected = this.itemsModel;
  }

  created () {
    this.itemsSelected = this.itemsModel;
  }

}
</script>