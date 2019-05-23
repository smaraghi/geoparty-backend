import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card, Button, Transition } from 'semantic-ui-react'
import { isEmpty } from 'lodash'

const FlashCardFront = () => {
  const context = useContext(shopContext)

  const answers = () => {
    if(isEmpty(context.activeQuestion)) {
      return ['', '', '', '']
    } else {
      return context.activeQuestion.shuffled_answers
    }
  }

  const flipCard = () => {
    context.setVisible(false)
    setTimeout( () => (context.setShowAnswer(true)), 900)
    console.log('hi orifins')
  }

  const checkAnswer = (answer) => {
    return answer === context.activeQuestion.correct_answer ? true : false
  }

  const handleAction = (answer) => {
    flipCard()
    context.setAnswered(true)
    if (checkAnswer(answer)){
      context.setCorrect(true)
      context.incrementProgress()
      context.saveScore(context.user, true)
    } else {
      context.setCorrect(false)
      context.saveScore(context.user, false)
    }
  }

  return(
    <Transition.Group animation={'horizontal flip'} duration={1000}>
      { context.visible &&  
      <Card id="flash-card">
        <Card.Content>
          {context.activeQuestion.question}
        </Card.Content>
        <Card.Content id='card-button-container'>
          <Button id='card-button-one' inverted color='blue' onClick={() => handleAction(answers()[0])}>A {answers()[0]}</Button>

          <Button id='card-button-two' inverted color='red' onClick={() => handleAction(answers()[1])}>B {answers()[1]}</Button>

          <Button id='card-button-three' inverted color='green' onClick={() => handleAction(answers()[2])}>C {answers()[2]}</Button>

          <Button id='card-button-four' inverted color='teal' onClick={() => handleAction(answers()[3])}>D {answers()[3]}</Button>
        </Card.Content>
      </Card>
      }
    </Transition.Group>
  )
}

export default FlashCardFront 