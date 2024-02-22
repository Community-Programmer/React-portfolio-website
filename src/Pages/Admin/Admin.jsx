import React, { useEffect, useRef } from 'react'
import styles from './Admin.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { authAdmin} from '../../Store/authSlice';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event)=>{
    event.preventDefault();

    const userData = new FormData(event.target);
    const userDataObj = Object.fromEntries(userData);
    dispatch(authAdmin(userDataObj));
  }
    
  const navigate = useNavigate();

    
  const auth = useSelector((state) => state.auth.authorized);

  useEffect(()=>{
    if(auth){
        navigate('/dashboard');
    }

  },[auth,navigate])



    const checkRef = useRef();

    const showpass = ()=>{
     
        if (checkRef.current.type === "password") {
            checkRef.current.type = "text";
          } else {
            checkRef.current.type = "password"; 
          }
    }
  return (
    <>
    <div className={styles.loginContainer}>
        <h1>Admin Panel</h1>
        <form className={styles.loginBox} onSubmit={handleSubmit}>
        <label htmlFor='username'>Username
        <input type='text' name='username'/>
        </label>
        <label htmlFor='password'>Password
        <input ref={checkRef} type='password' name='password' id='password' />
        </label>
        <div className="show">
        <input type="checkbox" onClick={showpass}/> Show Password
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
    </>
  )
}

export default Admin