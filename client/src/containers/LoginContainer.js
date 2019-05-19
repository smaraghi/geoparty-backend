
import React, { useContext, useState } from 'react'
import shopContext from '../context/shop-context'
import { Segment, Form, Button } from 'semantic-ui-react'

const LoginContainer = () => {
  const context = useContext(shopContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Segment>
      <Form
        onSubmit={() => context.authenticatingUser(username, password)}
        size="mini"
        key="mini"
      >
        <Form.Group widths="equal">
          <Form.Input
            label="username"
            placeholder="username"
            name="username"
            onChange={handleUsername}
            value={username}
          />
          <Form.Input
            type="password"
            label="password"
            placeholder="password"
            name="password"
            onChange={handlePassword}
            value={password}
          />
        </Form.Group>
        <Button type="submit" inverted color="vk">Login</Button>
      </Form>
    </Segment>
  )
}

export default LoginContainer
