import React, { useEffect, useContext } from 'react'
import { Header } from 'semantic-ui-react'
import FlashCardOptions from '../components/FlashCardOptions';
import FlashCardContainer from './FlashCardContainer';
import PreviousQuestionsModal from '../components/PreviousQuestionsModal'
import shopContext from '../context/shop-context';
import ProgressBar from '../components/ProgressBar';

const TriviaContainer = () => {
  const context = useContext(shopContext)

  useEffect( () => {
    context.fetchQuestions()
  }, [])

  return (
    context.loading ?
    <h1>loading...</h1>
    :
    <div>
      <Header as='h4'>TRIVIA</Header>
        <ProgressBar />
        <FlashCardContainer />
        <PreviousQuestionsModal />
        <FlashCardOptions />
    </div>
  )

}

export default TriviaContainer
