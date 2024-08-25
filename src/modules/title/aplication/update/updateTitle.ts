import { type Title } from '../../domain/Title'
import { type TitleRepository } from '../../domain/TitleRepository'

export async function getTitle(
  id: string,
  title: Title,
  titleRepository: TitleRepository
): Promise<Title | null> {
  return await titleRepository.update(id, title)
}
