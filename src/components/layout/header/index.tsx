import { MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import useStyles from './styles'
import { ReactNode } from 'react'

interface Props {
  menuUser: ReactNode
}

const Header = ({ menuUser }: Props) => {
  const styles = useStyles()

  const menuItems = ['login', 'dashboard', 'allPokemonsPagination', 'allPokemonsScroll', 'allPokemonsByType', 'about']

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
        {menuItems.map(item => renderItemMenu(item))}
        {menuUser}
      </menu>
    </nav>
  )
}

export default Header
