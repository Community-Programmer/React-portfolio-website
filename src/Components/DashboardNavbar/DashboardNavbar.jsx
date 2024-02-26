import React from 'react'
import styles from './DashboardNavbar.module.css'
import { Link, Outlet } from 'react-router-dom'

const DashboardNavbar = () => {
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
        <span>
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