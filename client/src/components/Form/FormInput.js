import mergeClasses from "../../helpers/mergeClasses"
import capitalize from '../../helpers/capitalize'

const FormInput = ({ name, className, label, ...props }) => {
  const classes = {
    base: 'py-2 px-4 rounded transition shadow',
    inherited: className
  }

  return (
    <div className='flex flex-col'>
      {label && (
        <label
          className="mb-1 font-semibold"
          htmlFor={name}
        >
          {capitalize(name)}
        </label>
      )}
      <input
        name={name}
        type={name === 'password' ? 'password' : name === 'email' ? 'email' : 'text'}
        placeholder={capitalize(name)}
        id={name}
        className={mergeClasses(classes)}
        {...props}
      />
    </div>
  )
}

export default FormInput
