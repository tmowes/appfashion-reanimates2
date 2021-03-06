import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View``

export const DeleteContainer = styled(LinearGradient).attrs({
  colors: ['white', 'transparent'],
  start: { x: 0, y: 0.8 },
  end: { x: 0.4, y: 0.8 },
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const DeleteContent = styled(LinearGradient).attrs({
  colors: ['white', 'red', 'white'],
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const DeleteText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: auto 120px;
`

export const EditContainer = styled(LinearGradient).attrs({
  colors: ['#2cb9b080', 'transparent', 'transparent'],
  start: { x: 0.25, y: 1 },
  end: { x: 1, y: 1 },
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const EditContent = styled(LinearGradient).attrs({
  colors: ['transparent', '#2cb9b080', 'transparent'],
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const EditButtonsContainer = styled.View`
  flex: 1;
  align-self: flex-end;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`
