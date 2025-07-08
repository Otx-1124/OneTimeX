import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import SignupPage from './Components/Signup'
import LoginPage from './Components/Login'
import AboutPage from './Components/About'
import BlogPage from './Components/Blog'
import TermsAndPolicies from './Components/Terms&Policies'
import Explore from './Components/Explore'
import Connect from './Components/Connect'
import ScrollToTop from './Components/ScrolltoTop'
import Signup from './Components/Signup'
import MainProfile from './Components/MainProfile'




function App() {

  return (
   <>
   <ScrollToTop>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/terms-con' element={<TermsAndPolicies/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/connect-us' element={<Connect/>}/>
      <Route path='/profile-section' element={<MainProfile/>}/>
    </Routes>
   </ScrollToTop>
   </>
  )
}

export default App
