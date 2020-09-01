import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'

import {
  Paging,
  ErrorMessage,
  DEFAULT_LIMIT
} from './paginationTypes'

import store from "./index"

@Module({ dynamic: true, store, name: "imglib" })
class Pagination extends VuexModule {
  loading = false
  images: Array<ImageData> = []
  paging: Paging = {
    page: 0, limit: DEFAULT_LIMIT, total: 0
  }
  isDisplayDeleteConfirm = false
  errorMessages: Array<ErrorMessage> = []
  successMessage = ""
  displayDetailName = ""

  @Mutation
  public updateLoading(loading: boolean) {
    this.loading = loading
  }

  @Mutation
  public updateTotal(total: number) {
    this.paging.total = total
  }

  @Mutation
  public updatePage(page: number) {
    this.paging.page = page
  }

  @Mutation
  public updateErrorMessages(errors: Array<ErrorMessage>) {
    this.errorMessages = errors
  }

  @Mutation
  public updateSuccessMessage(message: string) {
    this.successMessage = message
  }

  @Action({})
  async fetchImages(isConcat = true) {
    const { limit, page } = this.paging
    const offset = page === 0 ? 0 : limit * page
    const option = { limit, offset }
  }
}

export const PaginationStore = getModule(Pagination)
