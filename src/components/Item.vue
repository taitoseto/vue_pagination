<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-text>{{ data.text }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Item extends Vue {
  @Prop()
  data!: {
    id: number;
    title: string;
    text: string;
  };
}
</script>