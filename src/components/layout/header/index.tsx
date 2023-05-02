import { AppBar, IconButton, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Fragment } from 'react'
import Link from 'next/link'
import style from './header.module.css'

const Header = () => {
  return (
    <Fragment>
      <div className={style.appBar}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <MenuItem>
              <Link href="/">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  )
}

export default Header
