import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
  const [user, setUser] = useState({})
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState({})
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [previousQuestions, setPreviousQuestions] = useState([])
  const [percentage, setPercentage] = useState(0)
  const [starAmount, setStarAmount] = useState(0)

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

  const authenticatingUser = (username, password) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.authenticated) {
        setUser(data.user)
        setStarAmount(Math.floor(data.user.correct_answers / 10))
        setPercentage((data.user.correct_answers % 10) * 10)
        localStorage.setItem('token', data.token)
      } else {
        alert('Incorrect username or password')
      }
    })
  }

  const authenticatingToken = (token) => {
    fetch('http://localhost:3000/verify_token', {
      headers:{"Authentication": `Bearer ${token}`}
    })
    .then(res => res.json())
    .then(user => {
      setUser(user)
      setStarAmount(Math.floor(user.correct_answers / 10))
      setPercentage((user.correct_answers % 10) * 10)
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
    setStarAmount(starAmount + 1)
  }

  return(
    <ShopContext.Provider
      value={{
        user,
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
        authenticatingUser,
        authenticatingToken,
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
