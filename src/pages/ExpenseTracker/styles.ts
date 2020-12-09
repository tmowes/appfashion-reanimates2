import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
  background: white;
`
export const Title = styled.Text``

export const Period = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`
export const Calendar = styled.View`
  height: 50px;
  width: 50px;
  background: #f5f7f9;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`

export const CalendarIcon = styled(Icon).attrs({
  name: 'calendar',
  size: 22,
  color: '#95A9B8',
})``

export const CalendarContent = styled.View`
  margin-left: 16px;
`
export const Dates = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #194868;
`

export const Resume = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: #898c95;
`

export const CategoryTab = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`
export const LeftCategory = styled.View`
  flex: 0.75;
`
export const RightCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.25;
`
