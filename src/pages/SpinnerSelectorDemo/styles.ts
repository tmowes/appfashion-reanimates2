import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #1e1e1e;
  align-items: center;
  justify-content: center;
`
export const Content = styled.View`
  align-items: center;
  justify-content: center;
  height: 180px;
  padding: 16px;
`
export const Title = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`

export const Button = styled(RectButton)`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`

export const Chevron = styled(Icon).attrs({
  size: 28,
  color: 'white',
})``
