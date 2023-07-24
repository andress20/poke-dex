import { Box } from '@mui/material'
import { NextPage } from 'next'
import LoginForm from '@comp/molecules/form/login'

const Login: NextPage = () => {
  return (
    <Box>
      <LoginForm />
    </Box>
  )
}

export default Login
