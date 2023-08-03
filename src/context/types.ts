export enum userActionTypes {
  updateName = 'UPDATE_NAME',
  updateLikes = 'UPDATE_LIKES',
}
export type UserActionsTypes = 'name' | 'likes'

export interface UserActions {
  type: userActionTypes
  payload: string
}
