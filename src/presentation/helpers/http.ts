import { HttpResponse } from '../contracts/http'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error,
})

export const badRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  data,
})
