import React from 'react'

import { View } from 'react-native'
import * as P from './pages'

const AnimatedStyleUpdateExample: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0c0d34',
      }}
    >
      <P.Cart />
    </View>
  )
}

export default AnimatedStyleUpdateExample
