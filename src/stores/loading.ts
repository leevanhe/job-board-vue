import { defineStore } from 'pinia'

export const useLoad = defineStore('load', {
  state: () => ({
    isLoading: false,
    message: ''
  }),

  actions: {
    start() {
      this.isLoading = true
    },

    stop() {
      this.isLoading = false
    },

    setMessage(message) {
      this.message = message
    }
  }
})