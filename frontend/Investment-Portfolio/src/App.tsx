// import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './view/private/Home/Home'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
