import { type TitleRepository } from '../../domain/TitleRepository'

export async function removeTitle(titleRepository: TitleRepository, id: string) {
  return await titleRepository.remove(id)
}
