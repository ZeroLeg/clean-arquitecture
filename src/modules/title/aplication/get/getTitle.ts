import { type Title } from '../../domain/Title'
import { type TitleRepository } from '../../domain/TitleRepository'

export async function getTitle(
  id: string,
  titleRepository: TitleRepository
): Promise<Title | null> {
  return await titleRepository.get(id)
}
