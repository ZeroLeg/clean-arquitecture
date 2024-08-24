import type { Title } from './Title'

export interface TitleRepository {
  save: (title: Title) => Promise<void>
  remove: (id: string) => Promise<void>
  get: (id: string) => Promise<Title | null>
  update: (id: string, title: Title) => Promise<Title | null>
  getAll: () => Promise<Title[] | null>
}
