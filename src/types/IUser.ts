export interface User {
  name: string
  likes: string[]
}
export interface UserLogin extends User {
  password: string
}
