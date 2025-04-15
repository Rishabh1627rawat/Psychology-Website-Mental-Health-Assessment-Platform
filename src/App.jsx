import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Faq from "./Faq";
import Footer from "./Footer";
import Subscription from "./Subscription";
import ContactUs from "./ContactUs";
import UserInfoForm from "./UserInfoForm";
import Testflow from  "./TestFlow"
function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/ContactUS" element={<ContactUs />} />
          <Route path="/TestFlow" element={<Testflow user={user} />} />
          <Route path="/form" element={<UserInfoForm setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
