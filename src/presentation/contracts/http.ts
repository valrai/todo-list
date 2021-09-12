export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpRequest = {
  body?: any
  params?: any
  query?: any
  files?: any
}
