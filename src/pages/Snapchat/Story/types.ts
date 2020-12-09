import { NavigationProp, RouteProp } from '@react-navigation/native'
import { SnapchatRoutes } from 'src/routes/types'

export interface StoryProps {
  navigation: NavigationProp<SnapchatRoutes, 'Story'>
  route: RouteProp<SnapchatRoutes, 'Story'>
}
