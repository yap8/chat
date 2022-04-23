import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import Form, { FormGroup, FormInput, FormTitle } from "../components/Form/Form"
import Button from "../components/Button"
import { register } from "../redux/actions/authActions"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const success = useSelector(state => state.request.success)
  const auth = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (auth) navigate('/')
  }, [auth, navigate])

  useEffect(() => {
    if (success) {
      toast.success('Successfully registered')

      navigate('/login')
    }
  }, [success, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, username, email, password } = formData

    dispatch(register(name, username, email, password))

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
    <div className='p-4 sm:w-1/2 md:w-1/3 bg-white shadow rounded'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormTitle className="text-center">Register</FormTitle>
        </FormGroup>
        <FormGroup>
          <FormInput
            name='name'
            label
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            name='username'
            label
            value={formData.username}
            onChange={handleChange}
          />
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
        <Link to="/login" className="text-blue-500 hover:underline">Already have an account?</Link>
      </Form>
    </div>
  )
}

export default Register
