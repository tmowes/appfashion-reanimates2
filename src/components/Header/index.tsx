import React from 'react'
import { Text, View } from 'react-native'

import { HeaderProps } from './types'
import RoundedIconButton from '../RoundedIconButton'

const Header: React.FC<HeaderProps> = ({ left, title, right, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 24,
        paddingBottom: 6,
        paddingHorizontal: 16,
      }}
    >
      <RoundedIconButton
        name={left.icon}
        size={32}
        color={color}
        backgroundColor="transparent"
        onPress={left.onPress}
      />
      <Text
        style={{
          color,
          fontSize: 16,
          lineHeight: 24,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={32}
        backgroundColor="transparent"
        color={color}
        onPress={right.onPress}
      />
    </View>
  )
}

export default Header
