import { useReducer, FormEvent } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormControl, FormGroup, Button } from '@mui/material'
import styles from './form.module.css'
import { User } from '@def/IUser'
import { createUser } from '@services/services'
import { useRouter } from 'next/router'

const LoginForm: React.FC = (): JSX.Element => {
  // action never used but required
  const reducer = (state: User, action: User) => ({ ...state, ...action })

  const router = useRouter()

  const [user, dispatchLogin] = useReducer(reducer, {
    name: '',
    password: '',
    likes: [''],
  })

  function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    return dispatchLogin({ [name]: value }) // not passing action, state only
  }

  async function submitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // not using at all
    const createdUser = await createUser(user)
    if (createdUser) {
      localStorage.setItem(`pokemonUser_${user.name}`, JSON.stringify(createdUser))
      router.push('/dashboard')
    }
    return window.alert('password required')
  }

  return (
    <Box className={styles.loginForm}>
      <form onSubmit={e => submitUser(e)}>
        <FormControl>
          <FormGroup>
            <InputTextField id="name" name="name" label="User" value={user.name} onChange={hadleChange} />
            <InputTextField
              id="password"
              name="password"
              label="Password"
              value={user.password}
              onChange={hadleChange}
            />
            <Box sx={{ width: 'max-content', margin: 'auto' }}>
              <Button variant="text" type="submit" sx={{ width: 'max-content', margin: 'auto' }}>
                Create
              </Button>
              <Button variant="text" type="button" sx={{ width: 'max-content', margin: 'auto' }}>
                Login
              </Button>
            </Box>
          </FormGroup>
        </FormControl>
      </form>
    </Box>
  )
}
export default LoginForm
