import React from 'react'

import Product from './Product'

import { products } from '../data'

import * as S from './styles'

import { ProductsProps } from './types'

const Products: React.FC<ProductsProps> = ({ x }) => {
  return (
    <S.Container pointerEvents="none">
      {products.map((product, index) => {
        return <Product key={index} product={product} x={x} index={index} />
      })}
    </S.Container>
  )
}

export default Products
