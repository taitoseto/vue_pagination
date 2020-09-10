<template>
  <p>{{ title }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Content extends Vue {
  @Prop()
  title!: string;
}
</script>