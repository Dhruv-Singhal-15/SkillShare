import Header

 from "./components/Header/Header";
 
 import "./index.css";

 import "./App.css";

 import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gradinet"/>
    

    <Header/>
    <Hero/>


    </div>
    <Companies/>
    <Courses/>
    
    <Contact/>
    
    

    <GetStarted/>
    <Footer/>

    


     
    </div>
    
  );
}

export default App;
