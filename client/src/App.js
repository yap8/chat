import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import Settings, { Background, Theme } from './pages/Settings'
import getGradient from './helpers/getGradient'
import Register from './pages/Register'
import Login from "./pages/Login"
import Home from './pages/Home'

function App() {
  const { error, message } = useSelector(state => state.request)
  const background = useSelector(state => state.background)
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    if (error && message) toast.error(message)
  }, [error, message])

  return (
    <Router>
      <div className={theme || ''}>
        <ToastContainer
          position="top-center"
        />
        <div className={`bg-slate-50 dark:bg-gray-900 ${getGradient(background)} h-screen flex items-center justify-center`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chats/:id' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/settings/background' element={<Background />} />
            <Route path='/settings/theme' element={<Theme />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
