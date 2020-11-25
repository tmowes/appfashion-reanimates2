import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
`
export const Action = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
`

export const Edit = styled(Icon)``

export const Title = styled.Text`
  align-self: center;
`
