import { FaSpinner } from 'react-icons/fa'

import mergeClasses from '../helpers/mergeClasses'

const Spinner = ({ className }) => {
  const classes = {
    base: 'animate-spin text-white',
    inherited: className
  }

  return (
    <FaSpinner className={mergeClasses(classes)} />
  )
}

export default Spinner
