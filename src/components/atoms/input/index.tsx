import TextField, { TextFieldProps } from '@mui/material/TextField'

const InputTextFiled: React.FC<TextFieldProps> = ({ id, name, label, variant = 'outlined', onChange }) => (
  <TextField margin="dense" id={id} name={name} label={label} variant={variant} onChange={onChange} />
)

export default InputTextFiled
