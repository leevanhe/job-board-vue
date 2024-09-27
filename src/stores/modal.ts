import { type Component, markRaw } from 'vue'
import { defineStore } from 'pinia'

export interface Modal {
  isOpen: boolean
  component: Component | null
}

export const useModal = defineStore('modal', {
  state: (): Modal => ({
    isOpen: false,
    component: null
  }),

  actions: {
    open(component: Component) {
      this.isOpen = true
      this.component = markRaw(component)
    },
    close() {
      this.isOpen = false
      this.component = null
    }
  }
})