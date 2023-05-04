import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Education from "./components/pages/Education";
// import Contact from "./components/pages/Contact";

const Education = React.lazy(() => import("./components/pages/Education"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<About></About>}></Route>
            <Route
              exact
              path="/education"
              element={<Education></Education>}
            ></Route>
            <Route exact path="/contact" element={<Contact></Contact>}></Route>
            {/* <Route></Route> */}
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
