import React from 'react'

import * as S from './styles'
import { IncomingExpensesProps } from './types'

const IncomingExpenses: React.FC<IncomingExpensesProps> = ({ filtered }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Incoming Expenses</S.Title>
        {/* {filtered && (
          <S.Resume>{`${filtered.map(({ expenses }) =>
            expenses.reduce((acc, value) => acc + value.total),
          )} Total`}</S.Resume>
        )} */}
        {/* {filtered &&
          filtered.map(({ expenses }) =>
            expenses.map(expense => (
              <S.Resume key={expense.id}>{expense.description}</S.Resume>
            )),
          )} */}
      </S.Header>
    </S.Container>
  )
}

export default IncomingExpenses
