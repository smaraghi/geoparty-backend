import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card } from 'semantic-ui-react'

const FlashCardBack = () => {
  const context = useContext(shopContext)

  return(
    <Card id="flash-card" >
      <Card.Content className='flashcard-question'>
        {context.activeQuestion.question}
      </Card.Content>
      <Card.Content id='correct-answer-container'>
        {context.activeQuestion.correct_answer}
      </Card.Content>
  </Card>
  )
}

export default FlashCardBack