import React from 'react'
import { Item } from 'semantic-ui-react'

const PreviousQuestionItem = props => {

  const fillColor = () => {
    return props.question.correct ? "green" : "red"
  }

  return (
    <Item>
      <Item.Content style={{color: fillColor()}}>
        {props.num}. {props.question.question}
        <Item.Content>
        <br/>
          {props.question.correct_answer}
        </Item.Content>
      </Item.Content>
    </Item>
  )
}

export default PreviousQuestionItem
