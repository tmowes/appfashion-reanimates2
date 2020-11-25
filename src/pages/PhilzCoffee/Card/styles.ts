import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'
import { CardColorProps } from './types'

const { width } = Dimensions.get('window')
export const CARD_HEIGHT = (width * 1564) / 974

export const Container = styled.View`
  width: ${width}px;
  height: ${CARD_HEIGHT}px;
`

export const Content = styled.View<CardColorProps>`
  ${({ color1 }) =>
    color1 &&
    css`
      flex: 1;
      justify-content: space-between;
      background: ${color1};
      padding: 16px;
      margin: 32px;
      border-radius: 16px;
    `}
`

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: #432406;
  margin-bottom: 16px;
`

export const SubTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #432406;
`
