import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Program from "./Pages/Program";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Volunteer from "./Pages/Volunteer";

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
