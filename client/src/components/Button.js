import { Link } from 'react-router-dom'
import mergeClasses from '../helpers/mergeClasses'

const Button = ({ className, tag, children, ...props }) => {
  const classes = {
    base: 'block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded transition shadow',
    hover: 'hover:bg-blue-700',
    inherited: className
  }

  switch (tag) {
    case 'Link':
      return (
        <Link
          className={mergeClasses(classes)}
          {...props}
        >{children}</Link>
      )
    default:
      return (
        <button
          className={mergeClasses(classes)}
          {...props}
        >{children}</button>
      )
  }
}

export default Button
