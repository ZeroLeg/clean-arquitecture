// src/stores/useListStore.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type Title } from './../domain/Title'

export const useListStore = defineStore('title', () => {
  const items = ref<Title[]>([])

  const itemCount = computed(() => items.value.length)

  const addItem = (item: Title) => {
    items.value.push(item)
  }

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items')
      const data: Title[] = await response.json()
      items.value = data
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const removeItem = (id: string) => {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return {
    items,
    itemCount,
    addItem,
    fetchItems,
    removeItem
  }
})
