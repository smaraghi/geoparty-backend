import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState({})
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [previousQuestions, setPreviousQuestions] = useState([])
  const [percentage, setPercentage] = useState(0)
  const [starAmount, setStarAmount] = useState([])

  const fetchQuestions = () => {
    setLoading(true)
    fetch('http://localhost:3000/questions/get_trivia')
    .then(res => res.json())
    .then(questions => {
      setQuestions(questions.results)
      setActiveQuestion(questions.results[0])
      setLoading(false)
    })
  }

  // sets the activeQuestion to the next index in the questions array, then updates questionIndex to match the new activeQuestion
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

  const addPreviousQuestion = (question, correct) => {
    question.correct = correct
    setPreviousQuestions([...previousQuestions, question])
  }

  const handleCorrectAnswer = bool => {
    setCorrect(bool)
  }

  const incrementProgress = () => {
    let newProgress = percentage + 10 
    if(newProgress === 100){
      newProgress = 0 
      incrementStarBar()
    }
    setPercentage(newProgress)
  }

  const incrementStarBar = () => {
    setStarAmount([...starAmount, 1])
  }

  return(
    <ShopContext.Provider
      value={{
        questions,
        questionIndex,
        activeQuestion,
        answered,
        correct,
        loading,
        modalStatus,
        percentage,
        starAmount,
        previousQuestions,
        fetchQuestions,
        handleQuestionIndex,
        handleAnswered,
        addPreviousQuestion,
        toggleModalStatus,
        handleCorrectAnswer,
        incrementProgress,
        incrementStarBar
      }}>
      { props.children }
    </ShopContext.Provider>
  )
}

export default GlobalState
