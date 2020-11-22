import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
`
export const LeftColumn = styled.View`
  flex: 1;
  flex-direction: row;
`
const textStyle = css`
  color: white;
  font-size: 18px;
`

export const RightColumn = styled.View``

export const Label = styled.Text`
  ${textStyle}
`

export const Quantity = styled.Text`
  ${textStyle}
  opacity: 0.3;
`

export const Value = styled.Text`
  ${textStyle}
  color: #2cb9b0
`
