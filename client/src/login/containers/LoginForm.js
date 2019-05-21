// import React, { useContext, useState } from 'react'
// import shopContext from '../../context/shop-context'
// import { Segment, Form, Button } from 'semantic-ui-react'
//
// const LoginForm = () => {
//   const context = useContext(shopContext)
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//
//   return (
//     <Form
//       onSubmit={() => context.authenticatingUser(username, password)}
//       size="mini"
//       key="mini"
//     >
//       <Form.Group widths="equal">
//         <Form.Input
//           label="username"
//           placeholder="username"
//           name="username"
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//         />
//         <Form.Input
//           type="password"
//           label="password"
//           placeholder="password"
//           name="password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//       </Form.Group>
//       <Button type="submit" inverted color="vk">Login</Button>
//     </Form>
//   )
// }
//
// export default LoginForm
