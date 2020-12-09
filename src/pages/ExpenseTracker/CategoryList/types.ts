import { CategoryProps } from '../types'

export interface CategoryListProps {
  categories: CategoryProps[]
  loadingExpenses: () => void
}

export interface CategoryListHandles {
  selectedCategoryIdArray: () => number[] | null
}
