import React, { useEffect, useContext } from 'react'
import Options from '../components/Options';
import FlashCard from './FlashCard';
import PreviousQuestions from './PreviousQuestions'
import shopContext from '../../context/shop-context';
import ProgressBar from '../components/ProgressBar';
import StarBar from './StarBar';

const Trivia = () => {
  const context = useContext(shopContext)

  useEffect( () => {
    context.fetchQuestions()
  }, [])

  return (
    context.loading ?
    <h1>loading...</h1>
    :
    <div>
      <ProgressBar />
      <StarBar />
      <FlashCard />
      <Options />
      <PreviousQuestions />
    </div>
  )
}

export default Trivia
