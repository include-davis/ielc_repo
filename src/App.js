import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import GradeOne from "./Pages/GradeOne";
import GradeTwo from "./Pages/GradeTwo";
import GradeThree from "./Pages/GradeThree";
import GradeFour from "./Pages/GradeFour";
import GradeFive from "./Pages/GradeFive";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Volunteer from "./Pages/Volunteer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomePage/>}></Route>
        <Route path = "/aboutus" element = {<AboutUs/>}></Route>
        <Route path = "/contactus" element = {<ContactUs/>}></Route>
        <Route path = "/grade/1" element = {<GradeOne/>}></Route>
        <Route path = "/grade/2" element = {<GradeTwo/>}></Route>
        <Route path = "/grade/3" element = {<GradeThree/>}></Route>
        <Route path = "/grade/4" element = {<GradeFour/>}></Route>
        <Route path = "/grade/5" element = {<GradeFive/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/volunteer" element = {<Volunteer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
