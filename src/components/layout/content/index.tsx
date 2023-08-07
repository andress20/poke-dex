import React from 'react'
import Header from '@comp/layout/header'
import Footer from '@comp/molecules/footer'
import { Box, Container } from '@mui/material'
import IPlainObject from '@src/types/IPlainObject'
import useStyle from './styles'

const Layout: React.FC<IPlainObject> = ({ children }) => {
  const classes = useStyle()
  return (
    <Box className={classes.layout}>
      <Header />
      {/* 
      / other way to do it instead of parent Box classname ... 
      <Container maxWidth="xl" sx={{ marginTop: '60px' }}> */}
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </Box>
  )
}

export default Layout
