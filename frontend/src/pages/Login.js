import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";

async function getData(loginEm, loginPsw) {
  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({
    "email": loginEm,
    "password": loginPsw,
  });
  var config = {
    method: "post",
    url: `http://${process.env.REACT_APP_DEV_URL}/auth/validateUser`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      loginUser(response.data, loginPsw);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function loginUser(user, userPsw) {
  var axios = require("axios");
  var data = JSON.stringify({
    "email": user.email,
    "password": userPsw,
  });
  var config = {
    method: "post",
    url: `http://${process.env.REACT_APP_DEV_URL}/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("logged-in", true)
      localStorage.setItem("store-name", user.storeName)
      localStorage.setItem("user-email", user.email)
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <body>
      <Helmet>
        <style>{"body {background-color: #363636; }"}</style>
      </Helmet>
      <div>
        <h1>
          <span className={styles.Login}>Login</span>
        </h1>
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
            onChange={(event) => setLoginEmail(event.target.value)}
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
            type="password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.submit}>
        <Link to="/">
          <button
            type="submit"
            onClick={() => getData(loginEmail, loginPassword)}
          >
            Login
          </button>
        </Link>
      </div>

      <div className={styles.register}>
        <Link to="/registerUser">
          <button type="submit">Register User</button>
        </Link>
      </div>

      <div className={styles.register}>
        <Link to="/registerBusiness">
          <button type="submit">Register Business</button>
        </Link>
      </div>
    </body>
  );
};

export default Login;
