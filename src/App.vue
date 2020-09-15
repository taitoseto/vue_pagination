<template>
  <v-app>
    <header-template></header-template>
    <v-main>
      <pagination/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTemplate from "./components/Header.vue";
import Pagination from "./views/Pagination.vue";
@Component({
  components: {
    HeaderTemplate,
    Pagination,
  },
})
export default class App extends Vue {

}
</script>