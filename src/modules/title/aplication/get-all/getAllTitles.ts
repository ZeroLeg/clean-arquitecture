import { type Title } from '../../domain/Title'
import { type TitleRepository } from '../../domain/TitleRepository'

export async function getAllTitles(titleRepository: TitleRepository): Promise<Title[] | null> {
  return titleRepository.getAll() || null
}
