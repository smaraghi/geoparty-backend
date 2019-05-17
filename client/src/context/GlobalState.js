import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState({})
  const [loading, setLoading] = useState(false)
 
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

  

  return(
    <ShopContext.Provider
      value={{
        questions,
        questionIndex,
        activeQuestion,
        loading,
        fetchQuestions
      }}>
      { props.children }
    </ShopContext.Provider>
  )
}

export default GlobalState