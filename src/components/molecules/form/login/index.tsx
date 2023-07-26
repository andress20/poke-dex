import { FormEvent, useContext, useState } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormControl, FormGroup, Button, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import styles from './form.module.css'
import { createUser } from '@services/services'
import { useRouter } from 'next/router'
import UserContext from '@context'
import { User } from '@def/IUser'

const LoginForm: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<User>({ name: '', password: '', likes: [''] })
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const currentUser = useContext(UserContext)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('click down ')
    setShowPassword(true)
  }
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('click up ')
    setShowPassword(false)
  }

  function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setUser(user => ({ ...user, [name]: value }))
  }

  const IconPassword = () => (
    <IconButton
      aria-label="toggle password visibility"
      onMouseDown={handleMouseDownPassword}
      onMouseUp={handleMouseUpPassword}
      onMouseLeave={showPassword ? handleMouseUpPassword : undefined}
      edge="end"
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  )

  const inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconPassword />
      </InputAdornment>
    ),
  }

  async function submitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // not using at all
    if (!user.password) return window.alert('password required')
    const createdUser = await createUser(user)
    if (createdUser) {
      localStorage.setItem(`pokemonUser_${currentUser.name}`, JSON.stringify(createdUser))
      currentUser.dispatchUser({ ...currentUser, name: user.name })
      router.push('/dashboard')
    }
  }

  return (
    <Box className={styles.loginForm}>
      <form onSubmit={submitUser}>
        <FormControl>
          <FormGroup>
            <InputTextField
              id="name"
              name="name"
              label="User"
              autoComplete="username"
              value={user.name}
              onChange={hadleChange}
            />
            <InputTextField
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Password"
              value={user.password}
              onChange={hadleChange}
              autoComplete="current-password"
              // TODO: Keep on eye in this InputProps, probably is causing problems in the first rendeding.
              InputProps={inputProps}
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
