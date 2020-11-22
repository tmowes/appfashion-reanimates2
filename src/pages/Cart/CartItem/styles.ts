import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 4px 16px;
  margin: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Box = styled.View`
  background: #bfeaf5;
  height: 80px;
  width: 120px;
  border-radius: 12px;
`

export const Description = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 8px;
`

export const SizeRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SizeTitle = styled.Text`
  color: #0c0d34;
  font-size: 13px;
  line-height: 15px;
  margin-right: 4px;
`
export const SizeType = styled.Text`
  color: #2cb9b0;
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
`

export const ItemTitle = styled.Text`
  color: #0c0d34;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
`

export const Price = styled.Text`
  color: #2cb9b0;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
`

export const QuantityContainer = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background: #0c0d34;
`

export const QuantityText = styled.Text`
  color: white;
  font-size: 13px;
  line-height: 15px;
`
