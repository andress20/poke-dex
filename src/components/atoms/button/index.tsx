import Button from '@mui/material/Button'

interface ComponentProps {
  secondary?: boolean
  label: string
  backgroundColor?: string
}

export const PokemonButton: React.FC<ComponentProps> = ({ secondary, label, backgroundColor }) => {
  const color = secondary ? 'secondary' : 'primary'
  return (
    <Button sx={{ backgroundColor: { backgroundColor } }} variant="contained" color={color}>
      {label}
    </Button>
  )
}
