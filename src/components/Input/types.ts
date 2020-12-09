import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  icon: string
  placeholder: string
  touched?: boolean
  error: string | undefined
}

export interface ContainerProps {
  borderColor: string
}

export interface InputRef {
  focus(): void
}
