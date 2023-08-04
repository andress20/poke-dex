import { FormEvent, useContext, useState } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormControl, FormGroup, Button, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import styles from './form.module.css'
import { createUser } from '@services/services'
import { useRouter } from 'next/router'
import UserContext from '@context'
import Cookies from 'js-cookie'
import { userActionTypes } from '@src/context/types'
import Toast from '@atoms/toast'
import { useToast } from '@hooks'
import { enqueueSnackbar } from 'notistack'

const LoginForm: React.FC = (): JSX.Element => {
  const [user, setUser] = useState({ name: '', password: '', likes: [''] })
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const currentUser = useContext(UserContext)
  const { message, severity, openToast, handleOpenToast, handleCloseToast } = useToast()

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowPassword(true)
  }
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowPassword(false)
  }

  function hadleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setUser(user => ({ ...user, [name]: value }))
  }

  async function submitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // not using at all
    if (!user.name) {
      // with notistack
      enqueueSnackbar('User Name is required', { variant: 'info' })
      //with MUI toast
      //handleOpenToast('User Name is required', 'info')
      return
    }
    if (!user.password) {
      handleOpenToast('Password is required', 'info')
      return
    }
    const createdUser = await createUser(user)
    if (createdUser) {
      Cookies.set(`pokemonUser_${user.name}`, JSON.stringify(createdUser), { expires: 1 })
      currentUser.userDispatch({ type: userActionTypes.updateName, payload: user.name })
      router.push('/dashboard')
    }
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

  return (
    <Box className={styles.loginForm}>
      <form onSubmit={e => submitUser(e)}>
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
      <Toast message={message} open={openToast} close={handleCloseToast} severity={severity} />
    </Box>
  )
}
export default LoginForm
