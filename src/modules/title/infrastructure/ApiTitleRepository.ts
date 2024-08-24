import { type Title } from '../domain/Title'
import { type TitleRepository } from '../domain/TitleRepository'
import httpClient from '@/services/http'

const ENTITY = 'tile'

export function createApiTitleRepository(): TitleRepository {
  return {
    save,
    get,
    getAll,
    remove,
    update
  }
}

async function save(title: Title) {
  await httpClient.post<Title>(`${ENTITY}`, title)
}

async function get(id: string): Promise<Title | null> {
  const { data } = await httpClient.get<Title>(`${ENTITY}/${id}`)
  return data.data || null
}

async function remove(id: string) {
  await httpClient.delete<Title>(`${ENTITY}/${id}`)
}

async function update(id: string, title: Title): Promise<Title | null> {
  const { data } = await httpClient.put<Title>(`${ENTITY}/${id}`, title)
  return data.data || null
}

async function getAll(): Promise<Title[]> {
  const { data } = await httpClient.get<Title[]>(`${ENTITY}`)
  return data.data || null
}
