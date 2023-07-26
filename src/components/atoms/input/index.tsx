import TextField, { TextFieldProps } from '@mui/material/TextField'

const InputTextFiled: React.FC<TextFieldProps> = ({ variant = 'outlined', ...props }) => {
  return <TextField margin="dense" variant={variant} {...props} />
}

export default InputTextFiled
