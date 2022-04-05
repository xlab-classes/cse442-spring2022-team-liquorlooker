import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Registration.module.css";
import {Helmet} from "react-helmet"
import TextField from "@mui/material/TextField";

async function sendData(em, psw, repsw){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(em) == false){
    alert("Not a valid email, Please try registering again")
    return
  }
  if(psw != repsw){
    alert("Passwords do not match, Please try registering again")
    return
  }
  //var hashedPsw = createHash('sha256').update(psw).digest('hex')

  /*
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", em);
  urlencoded.append("password", psw)

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("localhost:3000/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  */

    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'email': em,
      'password': psw
    });
    var config = {
      method: 'post',
      url: 'http://cheshire.cse.buffalo.edu:1812/auth/register',
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

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reenterPassword, setReenterPassword] = useState("")

  return (
    <main>
      <Helmet>
          <style>{'body {background-color: #363636; }'}</style>
      </Helmet>
      <div>
        <h1><span className={styles.Register}>Register</span></h1>
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value = {password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.reenterpasswordLocation}>
        <div className={styles.reenterpassword}>
          <TextField
            label="Re-Enter Password"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            value={reenterPassword}
            onChange={(event) => setReenterPassword(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.submit}>
        <Link to="/">
          <button type="submit" onClick={() => sendData(email, password, reenterPassword)}>Register</button>
        </Link>
      </div>
    </main>
  );
}

export default Registration;