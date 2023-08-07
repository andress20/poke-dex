import { AppBar, Avatar, Box, IconButton, MenuItem, Toolbar, Tooltip, Typography, Container } from '@mui/material'
import { Fragment, useContext, useState } from 'react'
// import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import UserContext from '@context'
import style from './header.module.css'

const Header = () => {
  const currentUser = useContext(UserContext)

  const menuItems = ['login', 'dashboard', 'allPokemonsPagination', 'allPokemonsScroll', 'allPokemonsByType', 'about']
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

  console.log(currentUser.name.charAt(0))

  return (
    <Fragment>
      <AppBar className={style.appBar}>
        <Container>
          <Toolbar className={style.userLoginSection} variant="dense">
            <Box sx={{ display: 'flex' }}>{menuItems.map(item => renderItemMenu(item))}</Box>
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
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  )
}

export default Header
