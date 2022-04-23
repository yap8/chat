import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setTheme } from '../../redux/actions/themeActions'
import Button from '../../components/Button'

const Theme = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme))
  }


  const handleGoBack = () => navigate(-1)

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
      <button
        className="text-blue-500 hover:underline w-full"
        onClick={handleGoBack}
      >Go back</button>
    </div>
  )
}

export default Theme
