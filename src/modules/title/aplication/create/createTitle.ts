import { type Title, ensureTitleIsValid } from '../../domain/Title'
import { type TitleRepository } from '../../domain/TitleRepository'

export async function createTitle(titleRepository: TitleRepository, title: Title): Promise<void> {
  ensureTitleIsValid(title)

  await titleRepository.save(title)
}
