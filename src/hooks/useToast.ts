import React, { useState } from 'react'

export const useToast = () => {
  const [openToast, setOpenToast] = useState(false)

  const handleOpenToast = () => {
    setOpenToast(true)
  }

  const handleCloseToast = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenToast(false)
  }

  return { openToast, setOpenToast, handleOpenToast, handleCloseToast }
}
