import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/js/Navbar";
import Footer from "./components/js/Footer";

import AboutUs from "./pages/js/AboutUs";
import ContactUs from "./pages/js/ContactUs";
import Program from "./pages/js/Program";
import HomePage from "./pages/js/HomePage";
import Register from "./pages/js/Register";
import Volunteer from "./pages/js/Volunteer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}></Route>
          <Route path = "/about-us" element = {<AboutUs/>}></Route>
          <Route path = "/contact-us" element = {<ContactUs/>}></Route>
          <Route path = "/program/:gradeLevel" element = {<Program/>}></Route>
          <Route path = "/register" element = {<Register/>}></Route>
          <Route path = "/volunteer" element = {<Volunteer/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
