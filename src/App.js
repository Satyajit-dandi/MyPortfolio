
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";

function App() {
  return (
   <BrowserRouter>
    <div className="App">
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route exact path="/education" element={<Education></Education>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        {/* <Route></Route> */}
      </Routes>
       
      </div>
   </BrowserRouter>
     
 
  );
}

export default App;
