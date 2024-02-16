import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Skills from "./Pages/skills/Skills";
import './App.css'
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/Project";
import About from "./Pages/About/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Timelines from "./Pages/Timeline/Timelines";
import Admin from "./Pages/Admin/Admin";
import Layout from "./Layout/Layout";



function App() {

  useEffect(() => {
    AOS.init({
      offset: 200
    });
  }, []);

  
  return (
  <>
  <Routes>
  <Route path="/" element={<Layout/> }>
    <Route index element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/timeline' element={<Timelines/>}/>
  </Route>
  </Routes>

  <Routes>
   <Route path='/admin' element={<Admin/>}/>
  </Routes>

  </>
  );
}

export default App;
