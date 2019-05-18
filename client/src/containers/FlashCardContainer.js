import React, { useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'
import { isEmpty } from 'lodash'
import '../css/FlashCard.css'

const FlashCardContainer = () => {
  const context = useContext(shopContext)
  const answers = isEmpty(context.activeQuestion) ? ['', '', '', ''] : context.activeQuestion.incorrect_answers.concat([context.activeQuestion.correct_answer])

  const checkAnswer = (answer) => {
    return answer === context.activeQuestion.correct_answer ? true : false
  }

  const handleAction = (answer) => {
    context.handleAnswered(true)
    checkAnswer(answer) ? console.log('party') : console.log('incorrect')
  }

  return(
    context.answered ?
    <Card id="flash-card">
      <Card.Content>
        {context.activeQuestion.question}
      </Card.Content>
      <Card.Content id='correct-answer-container'>
        {context.activeQuestion.correct_answer}
      </Card.Content>
    </Card>
    :
    <Card id="flash-card">
      <Card.Content>
        {context.activeQuestion.question}
      </Card.Content>
      <Card.Content id='card-button-container'>
        <Button id='card-button-one' inverted color='blue' onClick={() => handleAction(answers[0])}>A {answers[0]}</Button>
        <Button id='card-button-two' inverted color='red' onClick={() => handleAction(answers[1])}>B {answers[1]}</Button>
        <Button id='card-button-three' inverted color='green' onClick={() => handleAction(answers[2])}>C {answers[2]}</Button>
        <Button id='card-button-four' inverted color='teal' onClick={() => handleAction(answers[3])}>D {answers[3]}</Button>
      </Card.Content>
    </Card>
  )
}

export default FlashCardContainer
