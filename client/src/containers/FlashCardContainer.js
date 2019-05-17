import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const FlashCardContainer = (props) => {
  const answers = [props.question.correct_answer, props.question.incorrect_answers]
  console.log(props.question.incorrect_answers)


  return(
    <Card>
      <Card.Content>
        {props.question.question}
      </Card.Content>
      <Card.Content>
        <Button>{answers[0]}</Button>
        <Button>{answers[1]}</Button>
        <Button>{answers[2]}</Button>
        <Button>{answers[3]}</Button>
      </Card.Content>
    </Card>
  )
}

export default FlashCardContainer