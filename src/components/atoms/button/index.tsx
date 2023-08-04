import { useToast } from '@hooks'
import Button from '@mui/material/Button'
import Toast from '../toast'

interface ComponentProps {
  secondary?: boolean
  label: string
  backgroundColor?: string
}

export const PokemonButton: React.FC<ComponentProps> = ({ secondary, label, backgroundColor }) => {
  const { message, severity, openToast, handleCloseToast, handleOpenToast } = useToast()

  const color = secondary ? 'secondary' : 'primary'

  return (
    <>
      <Button
        sx={{ backgroundColor: { backgroundColor } }}
        variant="contained"
        color={color}
        onClick={() => handleOpenToast('click button', 'warning')}
      >
        {label}
      </Button>
      {<Toast message={message} open={openToast} close={handleCloseToast} severity={severity} />}
    </>
  )
}
