import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homes/Home";
import Navbar from "./components/header/navbar/Navbar";
import Whatwedo from "./pages/whatWeDo/Whatwedo";
import Ourworks from "./pages/ourWorks/Ourworks";
import LetsTalk from "./pages/letsTalk/LetsTalk";
import GraphicDesign from "./pages/graphicsDesign/GraphicDesign";
import WebDevelopment from "./pages/webDevelopment/WebDevelopment";
import IotService from "./pages/iot/IotService";
import MobileApp from "./pages/mobileAppDevelopment/MobileApp";
import DigitalMarketing from "./pages/digitalMarketing/DigitalMarketing";
import SoftwareDevelopment from "./pages/softwareDevelopment/SoftwareDevelopment";
import SearchEngine from "./pages/searcEngine/SearchEngine";
import AboutUs from "./pages/aboutus/Aboutus";
import OurTeam from "./pages/ourTeam/OurTeam";
import OurStory from "./pages/ourStory/OurStory";
import Gallery from "./pages/gallery/Gallery";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/foot/Footer";
import ScrollToTop from "./components/footer/scroll/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Whatwedo} />
          <Route path="/our-works" Component={Ourworks} />
          <Route path="/lets-talk" Component={LetsTalk} />
          <Route path="/service/graphic-designs" Component={GraphicDesign} />
          <Route path="/service/web-development" Component={WebDevelopment} />
          <Route path="/service/iot-services" Component={IotService} />
          <Route path="/service/mobile-app" Component={MobileApp} />
          <Route
            path="/service/digital-marketing"
            Component={DigitalMarketing}
          />
          <Route
            path="/service/software-development"
            Component={SoftwareDevelopment}
          />
          <Route path="/service/search-engine" Component={SearchEngine} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/our-team" Component={OurTeam} />
          <Route path="/our-story" Component={OurStory} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
