import React from 'react'
import Header from '@comp/layout/header'
import Footer from '@comp/molecules/footer'
import { Box } from '@mui/material'
import IPlainObject from '@src/types/IPlainObject'

const Layout: React.FC<IPlainObject> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
