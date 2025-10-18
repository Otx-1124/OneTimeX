// App.jsx
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

// ✅ Page Components
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import LoginPage from "./Components/Login";
import AboutPage from "./Components/About";
import BlogPage from "./Components/Blog";
import TermsAndPolicies from "./Components/Terms&Policies";
import Explore from "./Components/Explore";
import Connect from "./Components/Connect";
import MainProfile from "./Components/MainProfile";
import NotFound from "./Components/PageErr";
import RiskDisclosurePopup from "./Components/Disclaimer";
import InvestmentProps from "./PropComponent/InvestmentProps";
import OnetimexIntro from "./Components/Onetimex-intro";
import NSEChart from "./Tests/Graph";
import UnlistedProp from "./PropComponent/UnlistedProp";
import Dashboard from "./Components/Dashboard";
import MyFunds from "./Components/My-funds";

// ✅ Utils
import ScrollToTop from "./Components/ScrolltoTop";
import CompletedOrder from "./OrderComponents/CompletedOrder";
import Processing from "./OrderComponents/Processing";
import AllUnlistedData from "./Components/AllUnlistedData";
import OneTimeXAdminPanel from "./Tests/AdminPanel";
import AdminPanel from "./Tests/AdminPanel";
import DiwaliDisclaimer from "./Tests/DiwaliDis";

function App() {
  const location = useLocation();

  // ✅ Smooth scroll setup (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      smoothTouch: false,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    // Store globally if needed
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  // ✅ Ensure scroll-to-top on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0); // fallback
    }
  }, [location.pathname]);

  const [diwaliDisclaimer, setDiwaliDisclaimer] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDiwaliDisclaimer(false);
  //   }, 20000);
  //   return () => clearTimeout(timer);
  // }, []); // empty dependency array

  return (
    <>
      {/*Deewali Dislaimer Popup for 20 sec */}
      <DiwaliDisclaimer
        show={diwaliDisclaimer}
        onClose={() => setDiwaliDisclaimer(false)}
      />

      {/* Disclaimer Popup Always Available */}
      <RiskDisclosurePopup />

      {/* Routes */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/terms-con" element={<TermsAndPolicies />} />
          <Route path="/unlisted-data" element={<AllUnlistedData />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/connect-us" element={<Connect />} />
          <Route path="/investment-props" element={<InvestmentProps />} />
          <Route path="/onetimex-intro" element={<OnetimexIntro />} />
          <Route path="/graph" element={<NSEChart />} />
          <Route path="/unlisted-detail" element={<UnlistedProp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myfunds" element={<MyFunds />} />
          <Route path="/profile-section" element={<MainProfile />} />
          <Route path="/completed" element={<CompletedOrder />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/admin" element={<OneTimeXAdminPanel />} />
          {/* Catch-all for 404 */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
