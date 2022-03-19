import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/Login.module.css"
import {Helmet} from "react-helmet"
import TextField from '@mui/material/TextField'

function getData(loginEm, loginPsw){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", loginEm);
  urlencoded.append("password", loginPsw);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("localhost:3000/auth/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



const Login = () => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  return (
    <body>
      <Helmet>
        <style>{'body {background-color: #363636; }'}</style>
      </Helmet>
      <div>
        <h1><span className={styles.Login}>Login</span></h1>
      </div>

      <div className={styles.emailLocation}>
        <div className={styles.email}>
          <TextField
            label="Enter Email"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            value={loginEmail}
            onChange = {(event) => setLoginEmail(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.passwordLocation}>
        <div className={styles.password}>
          <TextField
            label="Enter Password"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            value={loginPassword}
            onChange = {(event) => setLoginPassword(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.submit}>
        <Link to="/">
          <button type="submit" onClick={() => getData(loginEmail, loginPassword)}>Login</button>
        </Link>
      </div>

      <div className={styles.register}>
        <Link to="/registration">
          <button type="submit">Register</button>
        </Link>
      </div>
    </body>
  );
}

export default Login;