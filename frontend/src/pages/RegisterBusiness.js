import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Registration.module.css"
import { Helmet } from "react-helmet";
import TextField from "@mui/material/TextField";

async function sendAddStore(em, stnm, psw, repsw, lat, long) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(em) == false) {
    alert("Not a valid email, Please try registering again");
    return;
  }
  if (psw != repsw) {
    alert("Passwords do not match, Please try registering again");
    return;
  }
  
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'storeName': stnm,
    'latitude': lat,
    'longitude': long 
  });
  var config = {
    method: 'post',
    url: `http://${process.env.REACT_APP_DEV_URL}/store/addStore`,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    registerBusiness(em, psw, stnm)
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function registerBusiness(businessEmail, businessPsw, businessName){
  var bcrypt = require("bcryptjs");
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(businessPsw, salt);

  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({
    email: businessEmail,
    password: hash,
    storeName: businessName,
  });
  var config = {
    method: "post",
    url: `http://${process.env.REACT_APP_DEV_URL}/auth/business/register`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Registered")
    })
    .catch(function (error) {
      console.log(error);
    });
}

const RegisterBusiness = () => {
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  return (
    <main>
      <Helmet>
        <style>{"body {background-color: #363636; }"}</style>
      </Helmet>
      <div>
        <h1>
          <span className={styles.Register}>Register Business</span>
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
            InputProps={{
              style: { color: "azure" },
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.storeNameLocation}>
        <div className={styles.storeName}>
          <TextField
            label="Enter Store Name"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
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
            InputProps={{
              style: { color: "azure" },
            }}
            type="password"
            value={password}
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
            InputProps={{
              style: { color: "azure" },
            }}
            type="password"
            value={reenterPassword}
            onChange={(event) => setReenterPassword(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.latitudeLocation}>
        <div className={styles.latitude}>
          <TextField
            label="Enter Latitude"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.longitudeLocation}>
        <div className={styles.longitude}>
          <TextField
            label="Enter Longitude"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.submit}>
        <Link to="/">
          <button
            type="submit"
            onClick={() => sendAddStore(email, storeName, password, reenterPassword, latitude, longitude)}
          >
            Register
          </button>
        </Link>
      </div>
    </main>
  );
};

export default RegisterBusiness;