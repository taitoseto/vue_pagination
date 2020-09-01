import Vue from 'vue'
import Vuex from 'vuex'
import { PaginationState } from './paginationTypes'

Vue.use(Vuex)

export interface RootState {
  pagenation: PaginationState;
}

const store = new Vuex.Store<RootState>({})
export default store