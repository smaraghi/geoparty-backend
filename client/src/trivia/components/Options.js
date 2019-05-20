import React, { useContext } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import shopContext from '../../context/shop-context'

const Options = () => {
  const context = useContext(shopContext)

  return(
    <Grid id='flashcard-option-buttons'>
      <Grid.Column textAlign="center">
        <br/>
        <Button id="button-1" inverted color="twitter" onClick={context.toggleModalStatus} >Previous Questions</Button>
        <Button id="button-2" inverted color="vk" onClick={() => {
          context.setShowAnswer(false)
          context.setVisible(true)
          context.handleAnswered(false)
          context.handleQuestionIndex()
          context.addPreviousQuestion(context.activeQuestion, context.correct)
        }}>Next Question</Button>
      </Grid.Column>
    </Grid>
  )
}

export default Options
