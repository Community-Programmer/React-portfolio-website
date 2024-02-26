import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate();

    
  const auth = useSelector((state) => state.auth.authorized);

  useEffect(()=>{
    if(!auth){
        navigate('/admin');
    }

  },[auth,navigate])


  return (
    <>
    <h1>Dashboard Page</h1>
    </>
  )
}

export default Dashboard