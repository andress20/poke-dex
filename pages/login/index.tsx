import { Box } from '@mui/material'
import { NextPage } from 'next'
import LoginUserForm from '@comp/molecules/form/login'

const Login: NextPage = () => {
  return (
    <Box>
      <LoginUserForm />
    </Box>
  )
}

export default Login
