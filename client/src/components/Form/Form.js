import FormGroup from "./FormGroup"
import FormInput from "./FormInput"
import FormTitle from "./FormTitle"

const Form = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
    </form>
  )
}

export { FormGroup, FormInput, FormTitle }
export default Form
