import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { CardSelectedProps } from './types'

export const Container = styled.View<CardSelectedProps>`
  width: 120px;
  height: 120px;
  margin: 8px;
  border-radius: 12px;
  border-width: 2px;
  background: white;
  border-color: #0c0d34;
  opacity: 0.3;
  ${({ selected }) =>
    selected &&
    css`
      background: #2cb9b0;
      border-color: #bfeaf5;
      opacity: 1;
    `}
`
export const CardSelection = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const CardContent = styled.View`
  padding: 8px;
`

export const CardText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

export const CardImage = styled.Image`
  width: 48px;
  height: 48px;
`
export const AddIcon = styled(Icon)``
