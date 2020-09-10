<template>
  <v-app>
    <header />
    <v-main>
      <v-row>
        <v-col v-for="content in displayContents" :key="content.id" cols="12">
          <p justify="center">{{ content.title }}</p>
        </v-col>
      </v-row>

      <v-pagination v-model="page" :length="5" @input="pagination"></v-pagination>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import item from "./components/Item.vue";
import _ from "lodash";

interface Content {
  id: number;
  title: string;
}

@Component({
  components: {
    Header,
    item,
  },
})
export default class App extends Vue {
  private contents: Array<Content> = [{ id: 0, title: "" }];
  private displayContents: Array<Content> = [];
  private pageSize = 10;
  private page = 1;

  mounted() {
    this.contents = _.range(50)
      .fill({ id: 0, title: "title" })
      .map((item: Content, i: number) => {
        return { id: i, title: "Title" + i };
      });
    this.displayContents = this.contents.slice(0, this.pageSize);
  }

  private pagination(page: number) {
    this.displayContents = this.contents.slice(
      this.pageSize * (page - 1),
      this.pageSize * page
    );
  }
}
</script>

<style scoped>
#item {
}
</style>