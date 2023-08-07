import IPlainObject from '@def/IPlainObject'
import { Box } from '@mui/material'
import React from 'react'
import useStyles from './stlyes'

const CardsContainer: React.FC<IPlainObject> = ({ children }): JSX.Element => {
  const classes = useStyles()
  return <Box className={classes.cardsContainer}>{children}</Box>
}

export default CardsContainer
