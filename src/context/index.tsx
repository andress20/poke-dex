import { createContext, useState } from 'react'
import { User } from '@def/IUser'

interface ComponentProps {
  children: React.ReactNode
}

// Initial state of the context
const CurrentUserContext = createContext({
  name: '',
  password: '',
  likes: [''],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setUser: (user: User) => {},
})

CurrentUserContext.displayName = 'My user context' // "Myusercontext.Provider" name in devtools

/**
 * @param ReactNode (children)
 * @returns
 * This component is in charge of save and manteing the user context (state and functions)
 */
export const UserContext: React.FC<ComponentProps> = ({ children }): JSX.Element => {
  // state to manage the current user
  const [user, setUser] = useState<User>({
    name: '',
    password: '',
    likes: [''],
  })

  /**
   * "value" prop of UserContextInitialState.Provider needs the same type of UserContextInitialState
   * that's why we need to build that type with the state and functions int "context" variable
   **/
  const context = { ...user, setUser }

  return <CurrentUserContext.Provider value={context}>{children}</CurrentUserContext.Provider>
}

export default CurrentUserContext
