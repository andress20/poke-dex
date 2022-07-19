// import './style.css'
// import { ButtonProps } from './definitions'

// export const Button: React.FC<ButtonProps> = ({ primary = false, label, ...props }) => {
//   const mode = primary ? 'button--primary' : 'button--secondary'
//   return (
//     <button type="button" className={`button  ${mode}`} {...props}>
//       {label}
//     </button>
//   )
// }

import Button from '@mui/material/Button'

export const PokemonButton: React.FC = () => {
  return <Button variant="contained">Hello World</Button>
}
