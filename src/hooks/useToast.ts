import React, { useState } from 'react'
import { AlertColor } from '@mui/material'

export const useToast = () => {
  const [openToast, setOpenToast] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<AlertColor>()

  const handleOpenToast = (message: string, withSeverity: AlertColor) => {
    setOpenToast(true)
    setMessage(message)
    setSeverity(withSeverity)
  }

  const handleCloseToast = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenToast(false)
  }

  return { message, setMessage, severity, openToast, setOpenToast, handleOpenToast, handleCloseToast }
}
