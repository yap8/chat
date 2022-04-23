import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { setBackground } from '../../redux/actions/backgroundActions'
import gradients from "../../assets/data/gradients"

const Background = () => {
  const dispatch = useDispatch()

  const handleChangeTheme = (name) => {
    dispatch(setBackground(name))
  }

  return (
    <div className="h-4/6 w-1/2 p-2 bg-white shadow rounded dark:bg-slate-800 flex flex-col">
      <h1 className="text-xl text-center mb-2 p-2 dark:text-white">Backgrounds</h1>
      <PerfectScrollbar className="flex flex-wrap px-2">
        {gradients.map(gradient => (
          <div key={gradient.name} className="w-1/3 p-2">
            <button
              className="w-full"
              onClick={() => handleChangeTheme(gradient.name)}
            >
              <h3 className="text-xl text-center dark:text-white mb-2">{gradient.name}</h3>
              <div className={`${gradient.direction} ${gradient.colors} w-full h-20 rounded`} />
            </button>
          </div>
        ))}
      </PerfectScrollbar>
      <Link to="/settings" className="p-2 text-blue-500 hover:underline">Go back</Link>
    </div>
  )
}

export default Background
