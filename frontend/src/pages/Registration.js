import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/Registration.module.css"
import {Helmet} from "react-helmet"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/TextField'


const Registration = () => {
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
            id="email-tf"
            label="Enter Email"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
          />
        </div>
      </div>

      <div className={styles.passwordLocation}>
        <div className={styles.password}>
          <TextField
            id="password-tf"
            label="Enter Password"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
          />
        </div>
      </div>

      <div className={styles.reenterpasswordLocation}>
        <div className={styles.reenterpassword}>
          <TextField
            id="reenterpassword-tf"
            label="Re-Enter Password"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
          />
        </div>
      </div>

      <div className={styles.submit}>
        <Link to="/">
          <Button type="submit"></Button>
        </Link>
      </div>
    </main>
  );
}

export default Registration;