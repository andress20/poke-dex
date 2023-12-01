import { FormEvent, useContext, useState } from 'react'
import InputTextField from '@atoms/input'
import { Box, FormGroup, Button, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useStyles from './styles'
import { createUser, loginUser } from '@services/services'
import { useRouter } from 'next/router'
import UserContext from '@context'
import Cookies from 'js-cookie'
import { userActionTypes } from '@src/context/types'
import Toast from '@atoms/toast'
import { useToast } from '@hooks'
import { enqueueSnackbar } from 'notistack'
import { User } from '@def/IUser'
import IPlainObject from '@def/IPlainObject'

const LoginForm: React.FC<IPlainObject> = ({ bottomMessage }): JSX.Element => {
  const [user, setUser] = useState<User>({ name: '', password: '', likes: [''] })
  const [showPassword, setShowPassword] = useState(false)
  const styles = useStyles()

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
    e.preventDefault()
    if (!user.name) {
      // Sample with notistack
      enqueueSnackbar('User Name is required', { variant: 'info' })
      return
    }
    if (!user.password) {
      // Sample with MUI toast
      handleOpenToast('Password is required', 'info')
      return
    }
    const createdUser = await createUser(user)
    if (createdUser) {
      Cookies.set(`pokemonUser_${user.name}`, JSON.stringify(createdUser), { expires: 3 })
      currentUser.userDispatch({
        type: userActionTypes.login,
        payload: { userName: user.name, password: user.password },
      })
      router.push('/dashboard')
    }
  }

  async function handleLogin() {
    const savedUser = await loginUser(user)
    if (!savedUser) return enqueueSnackbar('user or password incorrect', { variant: 'info' })

    // Update Context with userName entered and password
    currentUser.userDispatch({
      type: userActionTypes.login,
      payload: { userName: user.name, password: savedUser.password, pokemonArrayNames: savedUser.likes },
    })
    router.push('/dashboard')
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

  /*
  inputProps: props pass to the original html input tag
  InputProps: props pass to the MUI Input component
  */
  const InputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconPassword />
      </InputAdornment>
    ),
  }

  return (
    <main className={styles.loginForm}>
      <form onSubmit={e => submitUser(e)}>
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
            InputProps={InputProps}
          />

          <Box sx={{ width: 'max-content', margin: 'auto' }}>
            <Button variant="text" type="submit" sx={{ width: 'max-content', margin: 'auto' }}>
              Create
            </Button>
            <Button variant="text" type="button" onClick={handleLogin} sx={{ width: 'max-content', margin: 'auto' }}>
              Login
            </Button>
          </Box>
        </FormGroup>
      </form>

      {bottomMessage}
      <Toast message={message} open={openToast} close={handleCloseToast} severity={severity} />
    </main>
  )
}
export default LoginForm
