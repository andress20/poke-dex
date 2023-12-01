import { Avatar, Box, IconButton, MenuItem, Tooltip, Typography, Menu, ListItemIcon } from '@mui/material'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserContext from '@context'
import { userActionTypes } from '@src/context/types'
import { Logout } from '@mui/icons-material'
import useStyles from './styles'

const Header = () => {
  const currentUser = useContext(UserContext)
  const router = useRouter()
  const styles = useStyles()

  const menuItems = ['login', 'dashboard', 'allPokemonsPagination', 'allPokemonsScroll', 'allPokemonsByType', 'about']
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  function renderItemMenu(item: string) {
    return (
      <MenuItem key={item}>
        <Link href={`/${item}`}>
          <Typography sx={{ textTransform: 'capitalize' }}>{item}</Typography>
        </Link>
      </MenuItem>
    )
  }

  return (
    <nav className={styles.navBar}>
      <menu className={styles.menuBar}>
        <li>first</li>
        <li>two</li>
      </menu>
      {/* <menu className={styles.menuBar}>{menuItems.map(item => renderItemMenu(item))}</menu> */}
      {/* {currentUser.name && (
        <Tooltip title="Account settings">
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
        </Tooltip>
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
      </Menu> */}
    </nav>
  )
}

export default Header
