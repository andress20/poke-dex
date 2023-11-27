export enum userActionTypes {
  login = 'LOGIN',
  logout = 'LOGOUT',
  addLikes = 'ADD_LIKES',
  substractLikes = 'SUBSTRACT_LIKES',
}
export type UserActionsTypes = 'name' | 'likes'

export interface UserPayload {
  userName?: string
  password?: string
  pokemonSingleName?: string
  pokemonArrayNames?: string[]
}

export interface UserActions {
  type: userActionTypes
  payload: UserPayload
}
