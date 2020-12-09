import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

import DrawerRoutes from './drawer.routes'
import SnapchatNav from './shared.routes'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      {/* <Screen name="SnapchatNav" component={SnapchatNav} /> */}
      <Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Screen name="OnBoarding" component={P.OnBoarding} />
      <Screen name="Welcome" component={P.Welcome} />
      <Screen name="Login" component={P.Login} />
      <Screen name="SignUp" component={P.SignUp} />
      <Screen name="ForgotPassword" component={P.ForgotPassword} />
      <Screen name="PasswordChanged" component={P.PasswordChanged} />
    </Navigator>
  </>
)

export default AppRoutes
