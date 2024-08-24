import { isTitleName, TitleNameNotValidError } from './TitleName'
import { isTitleIdValid, TitleIdNotValidError } from './TitleId'

export interface Title {
  id: string
  name: string
}

export function ensureTitleIsValid({ id, name }: Title): void {
  if (!isTitleIdValid(id)) {
    throw TitleIdNotValidError(id)
  }

  if (!isTitleName(name)) {
    throw TitleNameNotValidError(name)
  }
}
