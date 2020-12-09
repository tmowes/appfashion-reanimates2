import React from 'react'
import { View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

import * as S from './styles'
import { IconLabelButtonProps } from './types'

const IconLabelButton: React.FC<IconLabelButtonProps> = ({
  name,
  color,
  backgroundColor,
  size,
  onPress,
  label,
  labelColor,
  selected,
}) => {
  return (
    <RectButton
      onPress={onPress}
      style={{
        backgroundColor,
        height: size,
        borderRadius: size / 8,
        elevation: selected ? 0 : 8,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          padding: 8,
          borderRadius: size / 8,
          borderWidth: 1,
          borderColor: selected ? color : backgroundColor,
        }}
      >
        <Icon name={name} size={size * 0.7} color={color} />
        <S.Label style={{ color: labelColor || color, fontSize: size * 0.6 }}>
          {label}
        </S.Label>
      </View>
    </RectButton>
  )
}

export default IconLabelButton
