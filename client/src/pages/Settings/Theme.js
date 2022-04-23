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
    <div className="p-4 sm:w-1/2 md:w-1/4 bg-white shadow rounded">
      <h1 className="text-xl text-center mb-2">Theme</h1>
      <Button
        className="text-center mb-2"
        onClick={() => handleThemeChange('light')}
      >Light</Button>
      <Button
        className="text-center mb-2"
        onClick={() => handleThemeChange('dark')}
      >Dark</Button>
      <Link to="/" className="text-blue-500 hover:underline">Go back</Link>
    </div>
  )
}

export default Theme
