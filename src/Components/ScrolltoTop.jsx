import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Always scroll to top when pathname changes OR page reloads
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [pathname])

  return children
}

export default ScrollToTop;
