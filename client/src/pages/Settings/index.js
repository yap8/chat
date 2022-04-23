import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import Background from "./Background"
import Theme from "./Theme"

const Settings = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  return (
    <div className="p-4 sm:w-1/2 md:w-1/4 bg-white shadow rounded dark:bg-slate-800">
      <h1 className="text-xl text-center mb-2 dark:text-white">Settings</h1>
      <Button tag="Link" to="/settings/background" className="text-center mb-2">Background</Button>
      <Button tag="Link" to="/settings/theme" className="text-center mb-2">Theme</Button>
      <button
        className="text-blue-500 hover:underline w-full"
        onClick={handleGoBack}
      >Go back</button>
    </div>
  )
}

export { Background, Theme }
export default Settings
