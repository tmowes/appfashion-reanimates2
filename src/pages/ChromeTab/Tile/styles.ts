import styled from 'styled-components/native'
import { WebView } from 'react-native-webview'
import { MARGIN, SIZE } from '../config'

export const Container = styled.View`
  width: ${SIZE}px;
  height: ${SIZE}px;
`

export const Web = styled(WebView)`
  flex: 1;
  margin: ${MARGIN * 2}px;
  border-radius: ${MARGIN * 2}px;
  overflow: hidden;
`
