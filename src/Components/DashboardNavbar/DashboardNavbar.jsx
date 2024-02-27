import React, { useEffect } from 'react'
import styles from './DashboardNavbar.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../../Store/authSlice'

const DashboardNavbar = () => {
      const navigate =useNavigate();
      const dispatch = useDispatch();

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
      <div className={styles.sideNavbar}>
       <h3 >Admin Dashboard</h3>
       <ul className={styles.Navlinks}>
       <Link to="/dashboard">
              <li className="fa fa-home" /> Home
        </Link>
        <Link to="/dashboard/skills">
              <li className="fa fa-wrench" />Manage Skills
        </Link>
        <Link to="/dashboard/projects">
              <li className="fa fa-file" /> Manage Projects
        </Link>
        <Link to="/dashboard/technologies">
              <li className="fa fa-globe" /> Manage Technologies
        </Link>
        <Link to="/dashboard/timelines">
              <li className="fa fa-timeline" /> Manage Timeline
        </Link>
       </ul>
       <div className={styles.logout}>
        <span onClick={logout}>
        <i className="fa-solid fa-right-from-bracket"/>
       Logout
        </span>
       
       </div>
    </div>
    <Outlet/>
    </div>
    </>
  )
}

export default DashboardNavbar