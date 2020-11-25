import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  margin: 16px 32px 0;
  height: ${width}px;
`
export const CardImage = styled.Image`
  width: undefined;
  height: undefined;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

export const Content = styled.View`
  margin: 0 24px;
  padding: 24px;
  background: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-bottom: 16px;
`
export const Caption = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #432406;
`
