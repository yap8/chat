import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="bg-slate-50">
        <div className="h-screen flex items-center justify-center container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
