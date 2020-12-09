export interface ExpensesProps {
  id: number
  title: string
  description: string
  location: string
  total: number
  status: string
}

export interface CategoryProps {
  id: number
  name: string
  icon: string
  color: string
  expenses: ExpensesProps[]
}

export interface CategoriesProps {
  categories: CategoryProps[]
}
