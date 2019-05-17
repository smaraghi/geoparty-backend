
import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'

const TriviaContainer = () => {
  const [questions, setQuestions] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/questions/get_trivia')
    .then(res => res.json())
    .then(questions => {
      setQuestions(questions.results)
    })
  }, [])

  return (
    <div>
      <Header as='h6'>TRIVIA</Header>
      // {questions.map(q => <div>{q.question}</div>)}
    </div>
  )

}

export default TriviaContainer
