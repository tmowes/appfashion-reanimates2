import React from 'react'
import * as P from '@pages'

import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { SnapchatRoutes } from './types'

const {
  Navigator,
  Screen,
} = createSharedElementStackNavigator<SnapchatRoutes>()

const SnapchatNav = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: { backgroundColor: 'transparent' },
    }}
    mode="modal"
  >
    <Screen name="Snapchat" component={P.Snapchat} />
    <Screen
      name="Story"
      component={P.Story}
      sharedElementsConfig={route => {
        return [route.params.story.id]
      }}
    />
  </Navigator>
)

export default SnapchatNav
