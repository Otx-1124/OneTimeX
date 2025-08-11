import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Home from "./Components/Home";
import SignupPage from "./Components/Signup";
import LoginPage from "./Components/Login";
import AboutPage from "./Components/About";
import BlogPage from "./Components/Blog";
import TermsAndPolicies from "./Components/Terms&Policies";
import Explore from "./Components/Explore";
import Connect from "./Components/Connect";
import ScrollToTop from "./Components/ScrolltoTop";
import Signup from "./Components/Signup";
import MainProfile from "./Components/MainProfile";
import NotFound from "./Components/PageErr";
import RiskDisclosurePopup from "./Components/Disclaimer";
import InvestmentProps from "./PropComponent/InvestmentProps";
import OnetimexIntro from "./Components/Onetimex-intro";
import NSEChart from "./Tests/Graph";
import UnlistedProp from "./PropComponent/UnlistedProp";
import Dashboard from "./Components/Dashboard";

function App() {
    const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store globally if needed
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  // 🛠 Fix: Scroll to top on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0); // fallback
    }
  }, [location.pathname]);

  return (
    <>
      <RiskDisclosurePopup />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/terms-con" element={<TermsAndPolicies />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/connect-us" element={<Connect />} />
          <Route path="/profile-section" element={<MainProfile />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/investment-props" element={<InvestmentProps />} />
          <Route path="/onetimex-intro" element={<OnetimexIntro />} />
          <Route path="/graph" element={<NSEChart />} />
          <Route path="/unlisted-detail" element={<UnlistedProp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
