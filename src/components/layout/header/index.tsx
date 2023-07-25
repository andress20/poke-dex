import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { Fragment, useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import UserContext from '@context'
import style from './header.module.css'

const Header = () => {
  const currentuser = useContext(UserContext)
  return (
    <Fragment>
      <AppBar className={style.appBar} position="static">
        <section className={style.userLoginSection}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Toolbar variant="dense">
            <MenuItem>
              <Link href="/login">Login</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/allPokemonsPagination">All Pokemons Pagination</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/allPokemonsScroll">All Pokemons Scroll</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/allPokemonsByType">Pokemons by Type</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
          </Toolbar>
          <Typography className={style.userText} variant="h6">
            {currentuser.name}
          </Typography>
        </section>
      </AppBar>
    </Fragment>
  )
}

export default Header
