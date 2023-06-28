import { Fragment } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import styles from './typePicker.module.css'

//TODO: FIX types in a separate file
const PokemonTypePicker = ({
  pokemonTypes = ['fire', 'fightinh', 'rock'],
  setListTypes,
}: {
  pokemonTypes?: string[]
  setListTypes: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  // TODO: Change any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleCheckboxChange(e: any) {
    const isChecked = e.target.checked
    const checkedValue = e.target.value

    if (isChecked) {
      setListTypes(prev => [...prev, checkedValue])
      return
    } else {
      setListTypes(prev => prev.filter((item: string) => item !== checkedValue))
    }
  }

  return (
    <Fragment>
      <FormGroup>
        <section className={styles.container}>
          {pokemonTypes.map((type: string) => (
            <FormControlLabel
              key={type}
              control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />}
              label={type}
              value={type}
              onChange={handleCheckboxChange}
            />
          ))}
        </section>
      </FormGroup>
    </Fragment>
  )
}

export default PokemonTypePicker
