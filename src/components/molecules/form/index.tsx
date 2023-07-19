import { useReducer } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormControl, FormGroup, Button } from '@mui/material'
import { FormEvent } from 'react'
import styles from './form.module.css'

interface User {
  userName?: string
  password?: string
}

const LoginForm: React.FC = (): JSX.Element => {
  // action never used but required
  const reducer = (state: User, action: User) => ({ ...state, ...action })

  const [user, dispatchLogin] = useReducer(reducer, {
    userName: '',
    password: '',
  })

  function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    return dispatchLogin({ [name]: value }) // not passing action, only state
  }

  function createUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('user:', user)
  }

  return (
    <Box className={styles.loginForm}>
      <form onSubmit={e => createUser(e)}>
        <FormControl>
          <FormGroup>
            <InputTextField
              id="user"
              name="userName"
              label="User"
              value={user.userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => hadleChange(e)}
            />
            <InputTextField
              id="password"
              name="password"
              label="Password"
              value={user.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => hadleChange(e)}
            />
            <Button variant="text" type="submit" sx={{ width: 'max-content', margin: 'auto' }}>
              Create
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Box>
  )
}
export default LoginForm
