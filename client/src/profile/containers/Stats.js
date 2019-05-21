import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import StarBar from '../../trivia/containers/StarBar'
import { Header } from 'semantic-ui-react'

const Stats = () => {
  const context = useContext(shopContext)

  return(
    <div>
      <StarBar />
      <Header as='h2'>Rank: {context.starAmount}</Header>
      <Header as='h3'>Total Questions: {context.user.total_questions}</Header>
      <Header as='h3'>Percentage Correct: {(context.user.correct_answers / context.user.total_questions).toFixed(2) * 100}%</Header>
    </div>
  )
}

export default Stats
