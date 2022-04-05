import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/Login.module.css"
import {Helmet} from "react-helmet"
import TextField from '@mui/material/TextField'
// import {createHash} from "crypto-js"

async function getData(loginEm, loginPsw){

  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'email': loginEm,
    'password': loginPsw
  });
  var config = {
    method: 'post',
    url: 'http://cheshire.cse.buffalo.edu:1812/auth/login',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
    
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
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