import { createContext, useReducer } from 'react'
import { User } from '@def/IUser'
import { UserActions, userActionTypes } from './types'
import { Page } from '../stories/Page'

interface ComponentProps {
  children: React.ReactNode
}

const initialState = {
  name: '',
  likes: [],
}

// Initial state of the context
const CurrentUserContext = createContext({
  name: '',
  likes: [''],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  userDispatch: ({ type, payload }: UserActions): void => {},
})

CurrentUserContext.displayName = 'My user context' // "Myusercontext.Provider" name in devtools

/**
 * @param ReactNode (children)
 * @returns
 * This component is in charge of save and maintain the user context (state and functions)
 * This is used as a wrapper into _app
 */
export const UserContext: React.FC<ComponentProps> = ({ children }): JSX.Element => {
  const reducer = (state: User, action: UserActions): User => {
    switch (action.type) {
      case userActionTypes.login:
        return { ...state, likes: [...(action.payload.pokemonArrayNames || '')] }
        break
      case userActionTypes.updateName:
        return { ...state, name: action?.payload.userName || '' }
        break
      case userActionTypes.addLikes:
        return { ...state, likes: [...state.likes, ...(action.payload.pokemonArrayNames || '')] }
        break
      case userActionTypes.substractLikes:
        return { ...state, likes: [...state.likes.filter(pokemon => pokemon !== action.payload.pokemonSingleName)] }
      case userActionTypes.logout:
        return { ...initialState }
      default:
        return state
        break
    }
  }

  const [user, dispatchUser] = useReducer(reducer, {
    name: '',
    likes: [],
  })

  /**
   * Was necessary wrapp dispatchUser into userDispatch because types conflict
   * the type of dispatchUser is kind of weird to stablish the solution was wrapping into a new function
   * in order to force the type () =void instead of React.Dispatch<SetStateAction<Sring>> or something similar
   */
  const userDispatch = ({ type, payload }: UserActions) => dispatchUser({ type, payload })

  const context = { ...user, userDispatch }

  /**
   * prop "value" of CurrentUserContext.Provider needs the same type of createContext props
   * that's why we need to build that type with the state and functions int "context" variable
   **/
  return <CurrentUserContext.Provider value={context}>{children}</CurrentUserContext.Provider>
}

export default CurrentUserContext
