import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Flipcart.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Common/Navbar.jsx";
import Footer from "./Components/Common/Footer.jsx";
import SocialFooter from "./Components/Common/Social.jsx";
import ScrollToTop from "./Components/ScrolltoTop.jsx";
import { InvestmentProvider } from "./Context/InvestmentContext.jsx";
import { UnlistedProvider } from "./Context/UnlistedContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { AuthProvider } from "./ContextFile/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <AuthProvider>
        <Navbar />
      </AuthProvider>

      <InvestmentProvider>
        <UnlistedProvider>
          <AuthProvider>
          <App />
          </AuthProvider>
        </UnlistedProvider>
      </InvestmentProvider>
    </SearchProvider>
    <SocialFooter />
    <Footer />
  </BrowserRouter>,
);
