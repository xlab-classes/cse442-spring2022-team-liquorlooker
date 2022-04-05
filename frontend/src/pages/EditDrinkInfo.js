import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/EditDrinkInfo.module.css";
import { TextField } from "@mui/material";

const EditDrinkInfo = () => {
  return(
    <main>
      <Helmet>
        <style>{"body {background-color: #363636; }"}</style>
      </Helmet>
      <div>
        <h1>
          <span className={styles.EditDrink}>Edit Drink Info</span>
        </h1>
      </div>

      <div className={styles.DrinkNameLocation}>
        <div className={styles.DrinkName}>
          <TextField
            label="Enter Drink Name"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
          />
        </div>
      </div>

      <div className={styles.PriceLocation}>
        <div className={styles.Price}>
          <TextField
            label="Enter Price"
            variant="outlined"
            size="normal"
            InputLabelProps={{
              style: { color: "azure" },
            }}
          />
        </div>
      </div>

      <div className={styles.AddDrinkButton}>
        <Link to="/businessInventory">
          <button type="submit">Add Drink</button>
        </Link>
      </div>

      <div className={styles.RemoveDrinkButton}>
        <Link to="/businessInventory">
          <button type="submit">Remove Drink</button>
        </Link>
      </div>

      <div className={styles.EditDrinkButton}>
        <Link to="/businessInventory">
          <button type="submit">Edit Drink</button>
        </Link>
      </div>
    </main>
  );
};

export default EditDrinkInfo;