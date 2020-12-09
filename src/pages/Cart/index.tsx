import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Path } from 'react-native-svg'

import * as C from '../../components'

import CartContainer from './CartContainer'
import CartItem from './CartItem'
import Checkout from './Checkout'

const { width } = Dimensions.get('window')
const aspectRatio = width / 375
const height = 100 * aspectRatio
const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z'

const initialItems = [
  { id: 1, quantity: 3 },
  { id: 2, quantity: 1 },
  { id: 3, quantity: 3 },
  { id: 4, quantity: 2 },
  { id: 5, quantity: 3 },
  { id: 6, quantity: 9 },
]

const Cart: React.FC = () => {
  const { navigate } = useNavigation()
  const [items, setItems] = useState(initialItems)

  return (
    <CartContainer CheckoutComponent={Checkout}>
      <View>
        <View style={{ backgroundColor: '#2cb9b0', zIndex: 10 }}>
          <C.Header
            title="Shopping Cart"
            color="white"
            left={{ icon: 'arrow-left', onPress: () => true }}
            right={{ icon: 'bell', onPress: () => navigate('OnBoarding') }}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: height / 2 }}
        >
          {items.map(({ id, quantity }, index) => (
            <CartItem
              key={id + index}
              onDelete={() => setItems(items.filter(item => item.id !== id))}
              quantity={quantity}
            />
          ))}
        </ScrollView>
        <View
          style={{
            height,
            zIndex: 5,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
            <Path d={d} fill="#2cb9b0" />
          </Svg>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {`${items.length} Items Added`}
          </Text>
        </View>
      </View>
    </CartContainer>
  )
}

export default Cart
