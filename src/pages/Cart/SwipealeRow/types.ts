import { ReactNode } from 'react'

export interface SwipealeRowProps {
  children: ReactNode
  onDelete: () => void
  height: number
}
