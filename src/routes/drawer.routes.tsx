import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerMenu from '../components/DrawerMenu'

import * as P from '../pages'

const { Navigator, Screen } = createDrawerNavigator()

const Routes: React.FC = () => {
  return (
    <Navigator drawerContent={() => <DrawerMenu />}>
      <Screen name="ChromeTab" component={P.ChromeTab} />
      <Screen name="Cart" component={P.Cart} />
    </Navigator>
  )
}

export default Routes
