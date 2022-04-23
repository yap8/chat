import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { setBackground } from '../../redux/actions/backgroundActions'
import gradients from "../../assets/data/gradients"

const Background = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeTheme = (name) => {
    dispatch(setBackground(name))
  }

  const handleGoBack = () => navigate(-1)

  return (
    <div className="h-4/6 w-1/2 p-2 bg-white shadow rounded dark:bg-slate-800 flex flex-col">
      <h1 className="text-xl text-center mb-2 p-2 dark:text-white">
        Backgrounds by <a className="text-blue-500 hover:underline" target="_blank" rel="noreferrer" href="https://github.com/jordihales/hypercolor">hypercolor</a> ❤️
      </h1>
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
      <button
        className="p-2 text-blue-500 hover:underline w-full"
        onClick={handleGoBack}
      >Go back</button>
    </div>
  )
}

export default Background
