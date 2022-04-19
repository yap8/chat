import mergeClasses from "../../helpers/mergeClasses"

const FormTitle = ({ className, children }) => {
  const classes = {
    base: 'text-xl semibold',
    inherited: className
  }

  return (
    <h2 className={mergeClasses(classes)}>{children}</h2>
  )
}

export default FormTitle
