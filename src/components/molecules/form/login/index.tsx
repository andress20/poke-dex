import { FormEvent, useContext } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormControl, FormGroup, Button } from '@mui/material'
import styles from './form.module.css'
import { createUser } from '@services/services'
import { useRouter } from 'next/router'
import UserContext from '@context'

const LoginForm: React.FC = (): JSX.Element => {
  const router = useRouter()

  const currentUser = useContext(UserContext)

  function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    return currentUser.setUser({ ...currentUser, [name]: value })
  }

  async function submitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // not using at all
    const createdUser = await createUser(currentUser)
    if (createdUser) {
      localStorage.setItem(`pokemonUser_${currentUser.name}`, JSON.stringify(createdUser))
      router.push('/dashboard')
    }
    return window.alert('password required')
  }

  return (
    <Box className={styles.loginForm}>
      <form onSubmit={e => submitUser(e)}>
        <FormControl>
          <FormGroup>
            <InputTextField id="name" name="name" label="User" value={currentUser.name} onChange={hadleChange} />
            <InputTextField
              id="password"
              name="password"
              label="Password"
              value={currentUser.password}
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
