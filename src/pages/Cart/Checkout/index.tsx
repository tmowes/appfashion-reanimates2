import React, { useState } from 'react'

import { ScrollView, View, Text } from 'react-native'
import { Button, Card } from '../../../components'
import AddCard from '../../../components/Card/AddCard'
import { CardType } from '../../../components/Card/types'
import LineItem from './LineItem'

import * as S from './styles'
import { CheckoutProps } from './types'

const cards = [
  { id: 1, type: CardType.VISA, last4Digits: 5467, expiration: '05/24' },
  { id: 2, type: CardType.MASTER, last4Digits: 1158, expiration: '05/21' },
  { id: 3, type: CardType.AMERICAN, last4Digits: 5668, expiration: '10/23' },
  { id: 4, type: CardType.DINERS, last4Digits: 3469, expiration: '01/24' },
]

const shippingCost = 69.69
const shippingQuantity = 12
const shippingValue = 1354.69
const totalPay = Number((shippingValue + shippingCost).toFixed(2))

const Checkout: React.FC<CheckoutProps> = ({ minHeight }) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id)

  return (
    <S.Container style={{ paddingTop: minHeight }}>
      <View
        style={{
          paddingVertical: 16,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <AddCard selected={false} onSelect={() => true} />
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              selected={selectedCard === card.id}
              onSelect={() => setSelectedCard(card.id)}
            />
          ))}
        </ScrollView>
        <View
          style={{
            padding: 16,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 8,
            }}
          >
            Delivery address
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 16,
            }}
          >
            <View style={{ flex: 1, opacity: 0.8 }}>
              <Text style={{ color: 'white', fontSize: 15 }}>
                394, Botuverá
              </Text>
              <Text style={{ color: 'white', fontSize: 15 }}>Houston, TX</Text>
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: 15 }}>Change</Text>
            </View>
          </View>
          <LineItem
            label="Total Items"
            quantity={shippingQuantity}
            value={shippingValue}
          />
          <LineItem label="Standart Delivery" value={shippingCost} />
          <LineItem label="Total Payment" value={totalPay} />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          paddingBottom: 16,
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Button
          label={`Swipe to Pay $ ${totalPay}`}
          onPress={() => true}
          variant="primary"
        />
      </View>
    </S.Container>
  )
}

export default Checkout
