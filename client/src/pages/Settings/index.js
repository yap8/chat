import { Link } from "react-router-dom"

import Button from "../../components/Button"

import Background from "./Background"
import Theme from "./Theme"

const Settings = () => {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/4 bg-white shadow rounded">
      <h1 className="text-xl text-center mb-2">Settings</h1>
      <Button tag="Link" to="/settings/background" className="text-center mb-2">Background</Button>
      <Button tag="Link" to="/settings/theme" className="text-center mb-2">Theme</Button>
      <Link to="/" className="text-blue-500 hover:underline">Go back</Link>
    </div>
  )
}

export { Background, Theme }
export default Settings
