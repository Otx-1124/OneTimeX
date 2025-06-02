import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import SignupPage from './Components/Signup'
import LoginPage from './Components/Login'
import AboutPage from './Components/About'
import BlogPage from './Components/Blog'
import TermsAndPolicies from './Components/Terms&Policies'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/terms&con' element={<TermsAndPolicies/>}/>
    </Routes>
   </>
  )
}

export default App
