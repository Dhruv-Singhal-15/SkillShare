import Header from "./components/Header/Header";


import "./index.css";

import "./App.css";

import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradinet" />

        <Header />
        <Hero />
      </div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<>
      <Companies/>
      <Courses/>
      <Contact/>

      <GetStarted/>
      <Footer/>

      </>} />
      
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Companies" element={<Companies/>} />
      
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/GetStarted" element={<GetStarted/>} />
      <Route path="/Footer" element={<Footer/>} />

      

      </Routes>
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
