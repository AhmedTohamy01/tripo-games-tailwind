export function isEmailValid(email: string): boolean {
  return /^[^\s@]+@(?=.{3,100}$)(?!.*[.]{2})[a-zA-Z0-9][a-zA-Z0-9-.]*\.[a-zA-Z]{2,}$/.test(
    email
  )
}
