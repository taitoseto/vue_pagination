<template>
  <v-container class="pagination">
    <v-row justify="center">
      <v-col cols="6">
        <v-select
          v-model="pageAmount"
          :items="pageAmountItems"
          outlined
          label="ページに表示するコンテンツの量"
          @change="onChangePageAmount"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="contentsAmount"
          :items="contentsAmountItems"
          outlined
          label="生成するコンテンツの量"
          @change="onChangeContentAmount"
        ></v-select>
      </v-col>
      <v-col v-for="content in displayContents" :key="content.id" cols="12">
        <item :data="content"></item>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="page" :length="paginationLength"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../components/Header.vue";
import Item from "../components/Item.vue";
import _ from "lodash";

interface ContentData {
  id: number;
  title: string;
  text: string;
}

@Component({
  components: {
    Header,
    Item,
  },
})
export default class Pagination extends Vue {
  private page = 1;

  //1ページに表示するコンテンツ量
  private pageAmount = 3;

  //コンテンツを生成する量
  private contentsAmount = 10;

  private get pageAmountItems(): Array<number> {
    return [3, 5, 10, 20]
  }

  private get contentsAmountItems(): Array<number> {
    return _.map(_.range(10), (i: number) => i === 0 ? 1 : i * 10);
  }

  private get contents(){
    return _.range(this.contentsAmount)
      .fill({
        id: 0,
        title: "title",
        text:"This is a sample text."
      })
      .map((item: ContentData, i: number) => {
        return { id: i + 1, title: "Title" + (i + 1), text: item.text};
      });
  }

  private get displayContents() {
    return this.contents.slice(
      this.pageAmount * (this.page - 1),
      this.pageAmount * this.page
    );
  }

  private get paginationLength(){
    return _.ceil(this.contents.length / this.pageAmount, 0);
  }
  onChangePageAmount() {
    //1コンテンツ表示量が変わるときは1ページ目に戻す
    this.page = 1;
  }
  onChangeContentAmount() {
    //コンテンツの量が変わるときは1ページ目に戻す
    this.page = 1;
  }
}
</script>