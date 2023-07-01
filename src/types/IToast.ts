import { AlertColor } from '@mui/material'

export type IToastProps = {
  message: string
  open: boolean
  close: (event: React.SyntheticEvent | Event, reason?: string) => void
  severity: AlertColor | undefined
}
