import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/JS/Navbar";
import Footer from "./Components/JS/Footer";

import AboutUs from "./Pages/JS/AboutUs";
import ContactUs from "./Pages/JS/ContactUs";
import Program from "./Pages/JS/Program";
import HomePage from "./Pages/JS/HomePage";
import Register from "./Pages/JS/Register";
import Volunteer from "./Pages/JS/Volunteer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/about-us" element = {<AboutUs/>}></Route>
          <Route path = "/contact-us" element = {<ContactUs/>}></Route>
          <Route path = "/grade/:gradeLevel" element = {<Program/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/volunteer" element = {<Volunteer/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
