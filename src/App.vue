<template>
  <v-app>
    <header/>
    <v-main>
      <v-row>
        <v-col v-for="content in contents" :key="content" cols="12">
          <item
            id="item"
          ></item>
        </v-col>
      </v-row>

      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import item from './components/Item.vue'
import { PaginationStore } from './store/pagination'
import { PaginationState } from './store/paginationTypes'

@Component({
  components:{
    Header,
    item
  }
})
export default class App extends Vue{
  private contents = [1,2,3,4];
  private page = 1;
}
</script>

<style scoped>
  #item{
    
  }
</style>