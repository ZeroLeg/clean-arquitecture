// src/stores/useListStore.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type Title } from './../domain/Title'

import { getAllTitles } from './../aplication/get-all/getAllTitles'
import { createTitle } from './../aplication/create/createTitle'
import { removeTitle } from './../aplication/remove/removeTitle'

import { createApiTitleRepository } from '../infrastructure/ApiTitleRepository'

export const useTitleStore = defineStore('title', () => {
  const titles = ref<Title[]>([])

  const getAll = getAllTitles(createApiTitleRepository())
  const addTitle = (title: Title) => createTitle(createApiTitleRepository(), title)
  const deleteTitle = (id: string) => removeTitle(createApiTitleRepository(), id)

  const titlesCount = computed(() => titles.value.length)

  return {
    titles,
    titlesCount,
    addTitle,
    getAll,
    deleteTitle
  }
})
