import { FaSpinner } from 'react-icons/fa'

import mergeClasses from '../helpers/mergeClasses'
import colors from '../assets/data/colors'
import { useSelector } from 'react-redux'

const Spinner = ({ className }) => {
  const spinner = useSelector(state => state.spinner)

  const color = colors.filter(color => color.name === spinner)[0].class.split(' ')[1]

  const classes = {
    base: `animate-spin ${color}`,
    inherited: className
  }

  return (
    <FaSpinner className={mergeClasses(classes)} />
  )
}

export default Spinner
