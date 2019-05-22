
import React, { useState, useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Segment, Header, Button, Form } from 'semantic-ui-react'

const Options = () => {
  const context = useContext(shopContext)
  const [editingProfile, setEditingProfile] = useState(false)
  const [bio, setBio] = useState(context.user.bio)

  const handleSubmit = () => {
    fetch(`http://localhost:3000/users/${context.user.id}`, {
      method: "PATCH",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        bio: bio
    	})
    })
  }

  return (
    <Segment id="profile-options">
      <Header>Edit Profile</Header>
      {!editingProfile ?
      <Button onClick={() => setEditingProfile(true)}>Go</Button>
      :
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setEditingProfile(false)
          context.setBio(bio)
          handleSubmit()
        }}
      >
        <Form.TextArea
          label='bio'
          name='bio'
          placeholder={context.user.bio}
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
      <Button type='submit'>Submit</Button>
      </Form>
      }
    </Segment>
  )
}

export default Options
