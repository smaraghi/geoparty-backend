import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import { Modal, Button } from 'semantic-ui-react'

const PreviousQuestionsModal = () => {
  const context = useContext(shopContext)

  return (
    <Modal open={context.modalStatus}>
      <Modal.Content>
        Yo
        <Button onClick={context.toggleModalStatus}>Exit</Button>
      </Modal.Content>
    </Modal>
  )
}

export default PreviousQuestionsModal
