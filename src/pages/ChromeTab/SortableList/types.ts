import { ReactElement } from 'react'

export interface ListProps {
  children: ReactElement<{ id: string }>[]
}
