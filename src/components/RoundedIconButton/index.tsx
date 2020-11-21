import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

import { RoundedIconButtonProps } from './types'

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  name,
  color,
  backgroundColor,
  size,
  onPress,
}) => {
  return (
    <BorderlessButton
      onPress={onPress}
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon name={name} size={size * 0.8} color={color} />
    </BorderlessButton>
  )
}

export default RoundedIconButton
