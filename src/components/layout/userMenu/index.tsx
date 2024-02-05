import { Logout } from '@mui/icons-material'
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import UserContext from '@context'
import { userActionTypes } from '@src/context/types'
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom'

interface Props {
  userMenuRef: React.MutableRefObject<HTMLElement | null>
}

const UserMenu = ({ userMenuRef }: Props) => {
  const currentUser = useContext(UserContext)
  console.log('currentUser:', currentUser)
  const router = useRouter()

  const settings = [
    {
      name: 'Profile',
      icon: (
        <Box sx={{ '& .MuiAvatar-root': { marginRight: '15px' }, '& .MuiAvatar-circular': { width: 20, height: 20 } }}>
          <Avatar />
        </Box>
      ),
      action: () => {
        alert('profile'), handleClose()
      },
    },
    {
      name: 'Logout',
      icon: (
        <Box sx={{ '& .MuiListItemIcon-root': { minWidth: 30 } }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
        </Box>
      ),
      action: () => {
        currentUser.userDispatch({ type: userActionTypes.logout, payload: {} }), handleClose(), router.push('/login')
      },
    },
  ]

  const handleClose = () => {
    setAnchorEl(null)
  }
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      {currentUser.name &&
        userMenuRef &&
        userMenuRef.current &&
        ReactDOM.createPortal(
          <Tooltip
            title="Account settings"
            style={{
              width: '100px',
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 4 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
            </IconButton>
          </Tooltip>,
          userMenuRef.current
        )}
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {settings.map(setting => (
          <MenuItem key={setting.name} onClick={setting.action}>
            {setting.icon}
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default UserMenu
