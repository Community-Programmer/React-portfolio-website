import React, { useRef } from 'react'
import styles from './Admin.module.css'

const Admin = () => {
    
    const checkRef = useRef()

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
        <form className={styles.loginBox}>
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