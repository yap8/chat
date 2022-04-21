import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer
          position="top-center"
        />
        <div className="bg-slate-50 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen flex items-center justify-center">
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
