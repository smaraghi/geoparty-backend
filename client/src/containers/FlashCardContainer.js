import React, {useContext} from 'react'
import { Card, Button } from 'semantic-ui-react'
import shopContext from '../context/shop-context'
import { isEmpty } from 'lodash'
import '../css/FlashCard.css'

const FlashCardContainer = () => {
  const context = useContext(shopContext)
  const answers = isEmpty(context.activeQuestion) ? ['', '', '', ''] : context.activeQuestion.incorrect_answers.concat([context.activeQuestion.correct_answer])

  return(
    <Card>
      <Card.Content>
        {context.activeQuestion.question}
      </Card.Content>
      <Card.Content id='card-button-container'>
        <Button id='card-button-one' inverted color='blue'>A {answers[0]}</Button>
        <Button id='card-button-two' inverted color='red'>B {answers[1]}</Button>
        <Button id='card-button-three' inverted color='green'>C {answers[2]}</Button>
        <Button id='card-button-four' inverted color='teal'>D {answers[3]}</Button> 
      </Card.Content>
    </Card>
  )
}

export default FlashCardContainer