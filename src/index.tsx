import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, View } from 'react-native'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#0c0d34',
        }}
      >
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App
