export function isTitleName(name: string): boolean {
  const regexExp = /^(?!\s*$).+/

  return regexExp.test(name)
}

export function TitleNameNotValidError(name: string): Error {
  return new Error(`Name ${name} is not valid`)
}
