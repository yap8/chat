import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setTheme } from '../../redux/actions/themeActions'
import Button from '../../components/Button'

const Theme = () => {
  const dispatch = useDispatch()

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme))
  }

  return (
    <div className="p-4 sm:w-1/2 md:w-1/4 bg-white shadow rounded dark:bg-slate-800">
      <h1 className="text-xl text-center mb-2 dark:text-white">Theme</h1>
      <Button
        className="text-center mb-2"
        onClick={() => handleThemeChange('light')}
      >Light</Button>
      <Button
        className="text-center mb-2"
        onClick={() => handleThemeChange('dark')}
      >Dark</Button>
      <Link to="/settings" className="text-blue-500 hover:underline">Go back</Link>
    </div>
  )
}

export default Theme
