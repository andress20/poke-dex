import { NextPage } from 'next'
import LoginForm from '@comp/molecules/form/login'
import { Typography } from '@mui/material'

/**
 * Passing Message as a children or prop avoid re-render when form changes
 */

const Message = () => (
  <Typography sx={{ marginTop: 10, fontWeight: 100 }}>* Users with no activity for 3 days, will be removed </Typography>
)

const Login: NextPage = () => <LoginForm bottomMessage={<Message />} />

export default Login
