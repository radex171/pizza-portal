import React from 'react';
import styles from './Login.scss';

const Login = () =>{

  return (
    <div className={styles.component}>
      <div className={styles.login}>
        <label>Login:</label><br/>
        <input type='text' id='username' name='username' placeholder='please enter login'></input><br/> <br/>
        <label>Password:</label><br/>
        <input type='password' id='password' name='Password' placeholder='please enter password'></input><br/> <br/>
        <a href={`${process.env.PUBLIC_URL}/dashboard`}><input type='submit' value='Sing in'/></a>
      </div>
      <h2>Login view</h2>
    </div>
  );
};

export default Login;