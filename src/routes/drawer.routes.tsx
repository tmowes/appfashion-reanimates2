import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import * as P from '@pages'
import * as C from '@components'

const { Navigator, Screen } = createDrawerNavigator()

const Routes: React.FC = () => {
  return (
    <Navigator drawerContent={() => <C.DrawerMenu />}>
      <Screen name="Reflectly" component={P.Reflectly} />
      <Screen name="SpinnerSelectorDemo" component={P.SpinnerSelectorDemo} />
      <Screen name="ExpenseTracker" component={P.ExpenseTracker} />
      <Screen name="PhilzCoffee" component={P.PhilzCoffee} />
      <Screen name="ChromeTab" component={P.ChromeTab} />
      <Screen name="Cart" component={P.Cart} />
      <Screen name="Notifications" component={P.Notifications} />
      <Screen name="Profile" component={P.Profile} />
      {/* <Screen name="Transactions" component={P.Transactions} /> */}
      <Screen name="Favorites" component={P.Favorites} />
      <Screen name="OutfitIdeas" component={P.OutfitIdeas} />
    </Navigator>
  )
}

export default Routes
