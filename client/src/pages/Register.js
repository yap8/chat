import Form, { FormGroup, FormInput, FormTitle } from "../components/Form/Form"
import Button from "../components/Button"
import { Link } from "react-router-dom"

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='p-4 shadow rounded'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormTitle className="text-center">Register</FormTitle>
        </FormGroup>
        <FormGroup>
          <FormInput
            name='name'
            label
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            name='username'
            label
          />
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
        <Link to="/login" className="text-blue-500 hover:underline">Already have an account?</Link>
      </Form>
    </div>
  )
}

export default Register
