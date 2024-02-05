import React from 'react'
import Header from './header'
import Footer from './footer'
import IPlainObject from '@src/types/IPlainObject'
import styles from './layout.module.css'

const Layout: React.FC<IPlainObject> = ({ children, userMenuRef }) => {
  return (
    <div className={styles.layout}>
      <Header menuUser={<div ref={userMenuRef} />} />
      <>{children}</>
      <Footer />
    </div>
  )
}

export default Layout
