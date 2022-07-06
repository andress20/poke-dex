import Header from '@comp/layout/header'
import Footer from '@comp/layout/footer'
import IPlainObject from '@def/IPlainObject'
import React from 'react'

// type Props = { children: React.ReactNode }

const Layout: React.FC<IPlainObject> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
