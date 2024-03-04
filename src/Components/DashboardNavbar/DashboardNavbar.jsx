import React, { useEffect, useState } from 'react'
import styles from './DashboardNavbar.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../../Store/authSlice'

const DashboardNavbar = () => {
      const navigate =useNavigate();
      const dispatch = useDispatch();

      const [isOpen, setIsOpen] = useState(false);

      const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

      const logout = async()=>{
            dispatch(logoutAdmin());
            navigate('/admin');
      }
    
      const auth = useSelector((state) => state.auth.authorized);
    
      useEffect(()=>{
        if(!auth){
            navigate('/admin');
        }
    
      },[auth,navigate])

  return (
    <>
    <div className={styles.dashboardNavbar}>
      <div className={styles.navBars}><i onClick={toggleNavbar} className="fa-solid fa-bars fa-xl"/></div>
       
      <div className={`${styles.sideNavbar} ${isOpen ? styles.active : ''}`}>
       <h3 >Admin Dashboard</h3>
       <ul className={styles.Navlinks}>
       <Link onClick={toggleNavbar} to="/dashboard">
              <li className="fa fa-home" /> Home
        </Link>
        <Link onClick={toggleNavbar} to="/dashboard/skills">
              <li className="fa fa-wrench" />Manage Skills
        </Link>
        <Link onClick={toggleNavbar} to="/dashboard/projects">
              <li className="fa fa-file" /> Manage Projects
        </Link>
        <Link onClick={toggleNavbar} to="/dashboard/technologies">
              <li className="fa fa-globe" /> Manage Technologies
        </Link>
        <Link onClick={toggleNavbar} to="/dashboard/timelines">
              <li className="fa fa-timeline" /> Manage Timeline
        </Link>
       </ul>
       <div className={styles.logout}>
        <span onClick={logout}>
        <i className="fa-solid fa-right-from-bracket"/>
       Logout
        </span>
       
       </div>
       <div className={styles.closeIcon}>
       <i onClick={toggleNavbar} className="fa-solid fa-x fa-xl"/>
       </div>
    </div>
    <Outlet/>
    </div>
    </>
  )
}

export default DashboardNavbar