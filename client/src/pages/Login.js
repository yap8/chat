import Form, { FormGroup, FormInput, FormTitle } from "../components/Form/Form"
import Button from "../components/Button"
import { Link } from "react-router-dom"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
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
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            name='password'
            label
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
