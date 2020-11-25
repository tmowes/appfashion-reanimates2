import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const width = (Dimensions.get('window').width - 64) / 2

export const Touchable = styled.TouchableWithoutFeedback``

export const Container = styled.View`
  background: #432406;
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  border-radius: 27px;
  height: 54px;
  width: ${width}px;
`

export const Label = styled.Text`
  color: white;
  font-size: 16px;
  align-self: center;
`
