import React, { Fragment } from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { IToastProps } from '@customTypes/IToast'
import { Alert } from '@mui/material'

// TODO: add documentation for this component

const Toast: React.FC<IToastProps> = ({ message, open, close, severity }) => {
  const action = (
    <Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5_000}
        onClose={close}
        // message={message} // Alert tag overrides this prop
        action={action}
      >
        <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Toast
