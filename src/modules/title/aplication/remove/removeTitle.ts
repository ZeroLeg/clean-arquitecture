import { type TitleRepository } from '../../domain/TitleRepository'

export async function removeTitle(titleRepository: TitleRepository, id: string) {
  await titleRepository.remove(id)
}
