// import './App.css'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./view/private/Home/Home";
import RealTimeOverview from "./pages/Overview";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import LatestNews from "./pages/LatestNews/latestNews";
import AboutUs from "./pages/AboutUs/AboutUs";
import PortfolioTracker from "./pages/PortfolioTracker/PorfolioTracker";

const App: React.FC = () => {
  const apiKey = "E833XYO4KYP8UYRI";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/overview"
          element={
            <RealTimeOverview
              symbol={"IBM"}
              interval={"1min"}
              apiKey={apiKey}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-tracker" element={<PortfolioTracker />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
