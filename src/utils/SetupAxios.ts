import axios, { AxiosError } from "axios";
import qs from 'qs';
import { useLoad } from '@/stores/loading'
import { createPinia } from 'pinia'

const pinia = createPinia()

const loadingStore = useLoad(pinia)

export function setupAxios(): void {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
  axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
  setupInterceptors()
}

export function setupInterceptors(): void {
  axios.interceptors.request.use((config) => {
    loadingStore.start()
    return config
  })

  axios.interceptors.response.use((response) => {
    loadingStore.stop()
    return response
  }, handleError)
}

async function handleError(error: any): Promise<any> {
  loadingStore.stop()

  /*if (isAxiosError(error) && error.response) {
    const errors = Array.isArray(data.errors) ? data.errors : []

    const message = errors.join('\n') || i18n.global.t('general.error')
    loadingStore.setMessage(message)
  }*/

  throw error
}

function isAxiosError(error: any): error is AxiosError {
  return error?.isAxiosError
}