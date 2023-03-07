import logo from './logo.svg';
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
        <Route path = "/" element = {<AboutUs/>}></Route>
        <Route path = "/" element = {<ContactUs/>}></Route>
        <Route path = "/" element = {<GradeOne/>}></Route>
        <Route path = "/" element = {<GradeTwo/>}></Route>
        <Route path = "/" element = {<GradeThree/>}></Route>
        <Route path = "/" element = {<GradeFour/>}></Route>
        <Route path = "/" element = {<GradeFive/>}></Route>
        <Route path = "/" element = {<Register/>}></Route>
        <Route path = "/" element = {<Volunteer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
