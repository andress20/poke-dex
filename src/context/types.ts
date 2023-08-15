export enum userActionTypes {
  updateName = 'UPDATE_NAME',
  addLikes = 'ADD_LIKES',
  substractLikes = 'SUBSTRACT_LIKES',
  login = 'LOGIN',
  logout = 'LOGOUT',
}
export type UserActionsTypes = 'name' | 'likes'

export interface UserPayload {
  userName?: string
  pokemonSingleName?: string
  pokemonArrayNames?: string[]
}

export interface UserActions {
  type: userActionTypes
  payload: UserPayload
}
