import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'

const Dashboard = () => {

    const navigate = useNavigate();

    
  const auth = useSelector((state) => state.auth.authorized);
  console.log(auth)

  useEffect(()=>{
    if(!auth){
        navigate('/admin');
    }

  },[auth,navigate])


  return (
    <>
    <div className={styles.sideNavbar}>
       <h3 >Admin Dashboard</h3>
       <ul className={styles.Navlinks}>
       <Link to="/">
              <li className="fa fa-home" /> Home
        </Link>
        <Link to="/dashboard/skill">
              <li className="fa fa-home" /> Skills
        </Link>
        <Link to="/">
              <li className="fa fa-home" /> Home
        </Link>
        <Link to="/">
              <li className="fa fa-home" /> Home
        </Link>
       </ul>
    </div>
    </>
  )
}

export default Dashboard