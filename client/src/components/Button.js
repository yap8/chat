import mergeClasses from '../helpers/mergeClasses'

const Button = ({ className, children }) => {
  const classes = {
    base: 'bg-blue-500 text-white font-semibold py-2 px-4 rounded transition shadow',
    hover: 'hover:bg-blue-700',
    inherited: className
  }

  return (
    <button
      className={mergeClasses(classes)}
    >{children}</button>
  )
}

export default Button
