import React from 'react'
import Header from './header'
import Footer from './footer'
import IPlainObject from '@src/types/IPlainObject'
import useStyles from './styles'

const Layout: React.FC<IPlainObject> = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
