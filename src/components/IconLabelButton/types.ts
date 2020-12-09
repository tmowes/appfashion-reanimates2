export interface IconLabelButtonProps {
  name: string
  size: number
  color: string
  backgroundColor: string
  onPress: () => void
  label: string
  labelColor?: string
  selected?: boolean
}
