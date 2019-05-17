import React, { useState, useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'
import { isEmpty } from 'lodash'
import '../css/FlashCard.css'

const FlashCardContainer = () => {
  const [answered, setAnswered] = useState(false)
  const context = useContext(shopContext)
  const answers = isEmpty(context.activeQuestion) ? ['', '', '', ''] : context.activeQuestion.incorrect_answers.concat([context.activeQuestion.correct_answer])

  const checkAnswer = (answer) => {
    return answer === context.activeQuestion.correct_answer ? true : false 
  }

  const handleAnswer = (answer) => {
    setAnswered(true)
    if(checkAnswer(answer)){
      console.log('party')
    } else {
      console.log('incorrect')
    }
    
  }

  return(
    <Card>
      <Card.Content>
        {context.activeQuestion.question}
      </Card.Content>
      <Card.Content id='card-button-container'>
        <Button id='card-button-one' inverted color='blue' onClick={() => handleAnswer(answers[0])}>A {answers[0]}</Button>
        <Button id='card-button-two' inverted color='red' onClick={() => handleAnswer(answers[1])}>B {answers[1]}</Button>
        <Button id='card-button-three' inverted color='green' onClick={() => handleAnswer(answers[2])}>C {answers[2]}</Button>
        <Button id='card-button-four' inverted color='teal' onClick={() => handleAnswer(answers[3])}>D {answers[3]}</Button> 
      </Card.Content>
    </Card>
  )
}

export default FlashCardContainer