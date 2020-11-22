import { FC, ReactNode } from 'react'

export interface CartContainerProps {
  children: ReactNode
  CheckoutComponent: FC<{ minHeight: number }>
}
