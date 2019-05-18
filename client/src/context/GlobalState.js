import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState({})
  const [answered, setAnswered] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [previousQuestions, setPreviousQuestions] = useState([])

  const fetchQuestions = () => {
    setLoading(true)
    fetch('http://localhost:3000/questions/get_trivia')
    .then(res => res.json())
    .then(questions => {
      console.log(questions.results)
      setQuestions(questions.results)
      setActiveQuestion(questions.results[0])
      setLoading(false)
    })
  }

  // sets the activeQuestion to the next index in the questions array, then updates active index to match the new activeQuestion
  const handleQuestionIndex = () => {
    setActiveQuestion(questions[questionIndex + 1])
    setQuestionIndex(questionIndex + 1)
  }

  const handleAnswered = bool => {
    setAnswered(bool)
  }

  const toggleModalStatus = () => {
    setModalStatus(!modalStatus)
  }

  const addPreviousQuestion = (question) => {
    setPreviousQuestions([...previousQuestions], question)
  }

  return(
    <ShopContext.Provider
      value={{
        questions,
        questionIndex,
        activeQuestion,
        answered,
        loading,
        modalStatus,
        previousQuestions,
        fetchQuestions,
        handleQuestionIndex,
        handleAnswered,
        addPreviousQuestion,
        toggleModalStatus
      }}>
      { props.children }
    </ShopContext.Provider>
  )
}

export default GlobalState
