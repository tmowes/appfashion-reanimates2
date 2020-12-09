import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

import * as C from '@components'

import * as S from './styles'
import { categoriesData } from './data'
import CategoryList from './CategoryList'
import IncomingExpenses from './IncomingExpenses'
import { CategoryListHandles } from './CategoryList/types'

const ExpenseTracker: React.FC = () => {
  const categoryListRef = useRef<CategoryListHandles>(null)
  const { navigate } = useNavigation()
  const [viewMode, setViewMode] = useState('list')
  const [categories, setCategories] = useState(categoriesData)

  // selecionar categoria
  // enviar selected styles
  // filtrar por categoria selecionada ou todos

  const loadingExpenses = useCallback(() => {
    console.log('pegaRefCACETE')
    categoryListRef.current?.selectedCategoryIdArray()
  }, [categoryListRef])

  const filteredCategories = useMemo(() => {
    const selected = categoryListRef.current?.selectedCategoryIdArray()
    console.log('selected', selected)
    if (selected) {
      const categoriesFiltered = selected?.map(filtered =>
        categories.filter(category => category.id === filtered),
      )
      return categoriesFiltered[0]
    } else {
      return categories
    }
  }, [categories, categoryListRef])

  console.log('filteredCategories', filteredCategories)

  return (
    <S.Container>
      <C.Header
        title="Expense Tracker App"
        color="#194868"
        left={{ icon: 'arrow-left', onPress: () => true }}
        right={{
          icon: 'more-horizontal',
          onPress: () => navigate('OnBoarding'),
        }}
      />
      <S.Period>
        <S.Calendar>
          <S.CalendarIcon />
        </S.Calendar>
        <S.CalendarContent>
          <S.Dates>18 Nov 2020</S.Dates>
          <S.Resume>2% more than last month</S.Resume>
        </S.CalendarContent>
      </S.Period>
      <S.CategoryTab>
        <S.LeftCategory>
          <S.Dates>Categories</S.Dates>
          <S.Resume>{`${categories.length} total`}</S.Resume>
        </S.LeftCategory>
        <S.RightCategory>
          <C.RoundedIconButton
            name="bar-chart-2"
            size={32}
            onPress={() => setViewMode('chart')}
            color={viewMode !== 'chart' ? '#BEC1D2' : 'white'}
            backgroundColor={viewMode === 'chart' ? '#ff615f' : 'transparent'}
          />

          <C.RoundedIconButton
            name="list"
            size={32}
            onPress={() => setViewMode('list')}
            color={viewMode !== 'list' ? '#BEC1D2' : 'white'}
            backgroundColor={viewMode === 'list' ? '#ff615f' : 'transparent'}
          />
        </S.RightCategory>
      </S.CategoryTab>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {viewMode === 'list' && (
          <View>
            <CategoryList
              ref={categoryListRef}
              categories={categories}
              loadingExpenses={loadingExpenses}
            />
            <IncomingExpenses filtered={filteredCategories} />
          </View>
        )}
      </ScrollView>
    </S.Container>
  )
}

export default ExpenseTracker
