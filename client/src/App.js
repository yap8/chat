import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  const { error, message } = useSelector(state => state.request)

  useEffect(() => {
    if (error && message) toast.error(message)
  }, [error, message])

  return (
    <Router>
      <div>
        <ToastContainer
          position="top-center"
        />
        <div className="bg-slate-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-screen flex items-center justify-center">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chats/:id' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
