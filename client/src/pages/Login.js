import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

import Form, { FormGroup, FormInput, FormTitle } from "../components/Form/Form"
import Button from "../components/Button"
import { login } from '../redux/actions/authActions'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const auth = useSelector(state => state.auth)
  const { success, error, message } = useSelector(state => state.request)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (auth) navigate('/')
  }, [auth, navigate])

  useEffect(() => {
    if (error && message) toast.error(message)

    if (success) navigate('/')
  }, [success, error, message, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = formData

    dispatch(login(email, password))

    setFormData({
      ...formData,
      password: ''
    })
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
