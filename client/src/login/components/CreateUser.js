import React, { useState, useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Redirect } from 'react-router-dom'
import { Form, Segment, Header, Button } from 'semantic-ui-react'

const CreateUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [redirect, setRedirect] = useState(false)
  const context = useContext(shopContext)

  const handleSubmit = () => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
    		username: username,
    		password: password,
        bio: bio
    	})
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        setRedirect(true)
      } else {
        window.alert('Error submitting the form')
      }
    })
  }

  const renderRedirect = () => {
    if (redirect) {
      context.authenticatingUser(username, password)
      return <Redirect to='/profile' />
    }
  }

  return (
    <Segment>
      {renderRedirect()}
      <Header as='h2'>Create Account party</Header>
      <Form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <Form.Input
          label="username"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Form.Input
          label="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Form.TextArea
          label='bio (must be less than 200 characters)'
          name='bio'
          placeholder='Tell us more about yourself...'
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
  )
}

export default CreateUser
