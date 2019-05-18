import React, { useState, useContext } from 'react'
import { Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'
import PreviousQuestionsModal from './PreviousQuestionsModal'

const FlashCardOptions = () => {
  const context = useContext(shopContext)

  return(
    <div>
      <Button onClick={context.toggleModalStatus} >Previous Questions</Button>
      <Button onClick={() => {
        context.handleAnswered(false)
        context.handleQuestionIndex()
      }}>Next Question</Button>
    </div>
  )
}

export default FlashCardOptions
