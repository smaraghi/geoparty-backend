import React, { useContext } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import shopContext from '../../context/shop-context'

const Options = () => {
  const context = useContext(shopContext)

  const handleQuestionSkip = () => {
    if (!context.answered) {
      context.setCorrect(false)
      context.addPreviousQuestion(context.activeQuestion, false)
    } else {
      context.addPreviousQuestion(context.activeQuestion, context.correct)
    }
  }

  return(
    <Grid id='flashcard-option-buttons'>
      <Grid.Column textAlign="center">
        <br/>
        <Button id="previous-button" inverted color="twitter" onClick={() => context.setModalStatus(true)} >Previous Questions</Button>
        <Button id="next-button" inverted color="vk" onClick={() => {
          handleQuestionSkip()
          context.setShowAnswer(false)
          context.setVisible(true)
          context.setAnswered(false)
          context.handleQuestionIndex()
        }}>Next Question</Button>
      </Grid.Column>
    </Grid>
  )
}

export default Options
