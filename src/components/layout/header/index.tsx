import { AppBar, IconButton, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Fragment } from 'react'
import Link from 'next/link'
import style from './header.module.css'

const Header = () => {
  return (
    <Fragment>
      <AppBar className={style.appBar} position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/allPokemons">All Pokemons</Link>
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
      </AppBar>
    </Fragment>
  )
}

export default Header
