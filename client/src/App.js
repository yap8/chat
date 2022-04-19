import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import mergeClasses from './helpers/mergeClasses'
import Login from "./pages/Login"
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const classes = {
    base: 'h-screen bg-white flex items-center justify-center container',
    dark: 'dark:bg-slate-700'
  }

  return (
    <Router>
      <div className={mergeClasses(classes)}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
