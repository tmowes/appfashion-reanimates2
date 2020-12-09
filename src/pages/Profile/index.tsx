import React, { useState, useCallback } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import TabConfiguration from './TabConfiguration'
import TabPersonalInfo from './TabPersonalInfo'
import * as S from './styles'

const Profile: React.FC = () => {
  const { dispatch } = useNavigation()
  const [activeConfigTab, setActiveConfigTab] = useState(false)
  const [activeInfoTab, setActiveInfoTab] = useState(!activeConfigTab)

  const handleActiveTabChange = useCallback(() => {
    setActiveConfigTab(prev => !prev)
    setActiveInfoTab(prev => !prev)
  }, [])

  return (
    <S.Container>
      <S.ProfileHeader>
        <S.HeaderWrapper>
          <Header
            title="Profile"
            color="white"
            left={{
              icon: 'menu',
              onPress: () => dispatch(DrawerActions.openDrawer()),
            }}
            right={{ icon: 'log-out', onPress: () => true }}
          />
        </S.HeaderWrapper>
      </S.ProfileHeader>
      <S.ProfileWrapper>
        <S.ProfileTopContainer />
        <S.ProfileBottomContainer />
        <S.ProfileContent>
          <S.UserContent>
            <S.AvatarCircle>
              <S.Avatar source={{ uri: 'https://github.com/tmowes.png' }} />
            </S.AvatarCircle>
            <S.UserName>Julius Mowes</S.UserName>
            <S.UserEmail>julius.mowes@gmail.com</S.UserEmail>
          </S.UserContent>
          <S.ProfileTabs>
            <S.ProfileTabButton onPress={handleActiveTabChange}>
              <S.TabsTitle active={activeConfigTab}>Configuration</S.TabsTitle>
              <S.TabActive active={activeConfigTab} />
            </S.ProfileTabButton>
            <S.ProfileTabButton onPress={handleActiveTabChange}>
              <S.TabsTitle active={activeInfoTab}>Personal Info</S.TabsTitle>
              <S.TabActive active={activeInfoTab} />
            </S.ProfileTabButton>
          </S.ProfileTabs>
          {activeConfigTab && <TabConfiguration />}
          {activeInfoTab && <TabPersonalInfo />}
        </S.ProfileContent>
      </S.ProfileWrapper>
      <S.ProfileFooter>
        <Button
          variant="primary"
          label="Swipe to save changes"
          onPress={() => true}
        />
      </S.ProfileFooter>
    </S.Container>
  )
}

export default Profile
