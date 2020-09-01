export type Paging = {
  page: number;
  limit: number;
  //offset: number
  total: number;
}

export const DEFAULT_LIMIT = 100

export type ErrorMessage = {
  org_name: string;
  message: string;
}
export interface PaginationState {
  paging: Paging;
  errorMessages: Array<ErrorMessage>;
  successMessage: string;
}

