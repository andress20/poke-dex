import { useToast } from '@hooks'
import Button from '@mui/material/Button'
import Toast from '../toast'

interface ComponentProps {
  secondary?: boolean
  label: string
  backgroundColor?: string
}

export const PokemonButton: React.FC<ComponentProps> = ({ secondary, label, backgroundColor }) => {
  const { openToast, handleCloseToast, handleOpenToast } = useToast()

  const color = secondary ? 'secondary' : 'primary'

  return (
    <>
      <Button sx={{ backgroundColor: { backgroundColor } }} variant="contained" color={color} onClick={handleOpenToast}>
        {label}
      </Button>
      {<Toast message="toast from button" open={openToast} close={handleCloseToast} severity="warning" />}
    </>
  )
}
