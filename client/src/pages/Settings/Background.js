import { Link } from "react-router-dom"

const Background = () => {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/4 bg-white shadow rounded dark:bg-slate-800">
      <h1 className="text-xl text-center mb-2 dark:text-white">Background</h1>
      <Link to="/settings" className="text-blue-500 hover:underline">Go back</Link>
    </div>
  )
}

export default Background
