import { useEffect, useState } from "react";
import * as brain from 'brain.js';
import "./App.css";
import StringToComponent from "./StringToComponent";
import PopupImage from "./popups/PopupImage";
import DesignGenerator from "./DesignGenerator";
import Navbar_1 from "./navbar/Navbar_1";
import Hero_5 from "./hero/Hero_5";
import Testimonials_1 from "./testimonials/Testimonials_1";
import About_6 from "./about/About_6";
import Service_3 from "./service/Service_3";
import Footer_1 from "./footer/Footer_1";
import Contact_3 from "./contact/Contact_3";
import Hero_3 from "./hero/Hero_3";
import Hero_6 from "./hero/Hero_6";
import Hero_1 from "./hero/Hero_1";
import Hero_10 from "./hero/Hero_10";
import Navbar_2 from "./navbar/Navbar_2";
import Navbar_3 from "./navbar/Navbar_3";
import Testimonials_2 from "./testimonials/Testimonials_2";
import Service_1 from "./service/Service_1";
import Service_2 from "./service/Service_2";
import Service_5 from "./service/Service_5";
import Service_10 from "./service/Service_10";
import Service_9 from "./service/Service_9";
import Service_8 from "./service/Service_8";
import Contact_1 from "./contact/Contact_1";
import Contact_2 from "./contact/Contact_2";
import Contact_4 from "./contact/Contact_4";
import Prices_1 from "./prices/Prices_1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Prices_4 from "./prices/Prices_4";
import Prices_5 from "./prices/Prices_5";
import Prices_6 from "./prices/Prices_6";
import Prices_7 from "./prices/Prices_7";
import Prices_8 from "./prices/Prices_8";
import Hero_Template from "./hero/Hero_Template";
import Service_6 from "./service/Service_6";
import Service_7 from "./service/Service_7";
import About_5 from "./about/About_5";
import About_1 from "./about/About_1";
import About_3 from "./about/About_3";
import About_Template from "./about/About_Template";
import ConfettiEffect from "./ConfettiEffect";
import MouseTrail from "./MouseTrail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the duration for displaying confetti

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? ( // Render ConfettiEffect if still loading
        <ConfettiEffect duration={5000} />
      ) : (
        <>
          <MouseTrail />
          <DesignGenerator />
        </>
      )}
    </div>
  );
};

export default App;