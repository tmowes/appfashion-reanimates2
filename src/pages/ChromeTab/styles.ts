import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MARGIN, SIZE } from './config'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #24292e;
  padding: 0 ${MARGIN}px;
`
