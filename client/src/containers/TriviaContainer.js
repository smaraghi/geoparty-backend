import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import FlashCardOptions from '../components/FlashCardOptions';
import FlashCardContainer from './FlashCardContainer';

const TriviaContainer = () => {
  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const index = questions.length > 0 ? questions[questionIndex] : {}

  useEffect( () => {
    setLoading(true)
    fetch('http://localhost:3000/questions/get_trivia')
    .then(res => res.json())
    .then(questions => {
      console.log(questions)
      setQuestions(questions.results)
      setLoading(false)
    })
  }, [])


  return (
    loading ? 
    <h1>loading...</h1>
    :
    <div>
      <Header as='h4'>TRIVIA</Header>
        {questions.map(q => <div>{q.question}</div>)}
        <div>*Progress Bar*</div>
        <FlashCardContainer question={index} />
        <FlashCardOptions />
    </div>
  )

}

export default TriviaContainer
