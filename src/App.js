import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/skills/Skills";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/Project";
import About from "./Pages/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Timelines from "./Pages/Timeline/Timelines";
import Admin from "./Pages/Admin/Admin";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioData } from "./Store/DataSlice";
import Loader from "./Components/Loader/Loader";
import Dashboard from "./Pages/Dashboard/Home/Dashboard";
import { authorization } from "./Store/authSlice";
import DashboardNavbar from "./Components/DashboardNavbar/DashboardNavbar";
import ManageSkill from "./Pages/Dashboard/Skills/ManageSkill";
import ManageProject from "./Pages/Dashboard/Projects/ManageProject";
import ManageTimeline from "./Pages/Dashboard/Timeline/ManageTimeline";
import ManageTechnologies from "./Pages/Dashboard/Technologies/ManageTechnologies";

function App() {
  const status = useSelector((state) => state.portfolioData.status);

  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(fetchPortfolioData());
    dispatch(authorization())

    AOS.init({
      offset: 170
    });

  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/timeline" element={<Timelines />} />
            </Route>
            
          </Routes>

          <Routes>
            
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<DashboardNavbar />} >
          <Route index element={<Dashboard/>} />
          <Route path="skills" element={<ManageSkill />} />
          <Route path="projects" element={<ManageProject />} />
          <Route path="timelines" element={<ManageTimeline />} />
          <Route path="technologies" element={<ManageTechnologies/>} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
