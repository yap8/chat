import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer
          position="top-center"
        />
        <div className="bg-slate-50 h-screen flex items-center justify-center">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
