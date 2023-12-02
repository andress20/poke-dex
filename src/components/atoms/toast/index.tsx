import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { IToastProps } from '@customTypes/IToast'
import { Alert, AlertTitle } from '@mui/material'
import Slide from '@mui/material/Slide'
// TODO: add documentation for this component

const Toast: React.FC<IToastProps> = ({ message, open, close, severity }) => {
  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5_000}
      onClose={close}
      // message={message} // Alert tag overrides this prop
      action={action}
      TransitionComponent={Slide}
    >
      <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
        <AlertTitle>{severity}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
