import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Form, { FormGroup, FormInput, FormTitle } from "../components/Form/Form"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { login } from '../redux/actions/userActions'

const Login = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = formData

    dispatch(login(email, password))
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='p-4 bg-white shadow rounded'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormTitle className="text-center">Login</FormTitle>
        </FormGroup>
        <FormGroup>
          <FormInput
            name='email'
            label
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            name='password'
            label
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button className="w-full">Login</Button>
        </FormGroup>
        Need an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
      </Form>
    </div>
  )
}

export default Login
