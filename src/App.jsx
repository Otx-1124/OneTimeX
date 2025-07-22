import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

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
import NotFound from './Components/PageErr'
import RiskDisclosurePopup from './Components/Disclaimer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // 👇 Make accessible globally so we can stop/start later
    window.lenis = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
          <>
                <RiskDisclosurePopup />


    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/terms-con' element={<TermsAndPolicies />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/connect-us' element={<Connect />} />
        <Route path='/profile-section' element={<MainProfile />} />
        <Route path='/error' element={<NotFound />} />
      </Routes>
    </ScrollToTop>
    </>
  )
}

export default App
