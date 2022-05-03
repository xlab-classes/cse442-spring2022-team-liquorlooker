import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/EditDrinkInfo.module.css";
import { TextField } from "@mui/material";
import UseDrinkExists from "../hooks/use-drink-exists"

async function addEditDrink(storeName, drinkName, drinkPrice, drinkExists) {
  console.log(drinkExists);
  if(drinkExists == false){
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'drinkName': drinkName
    });
    var config = {
      method: 'post',
      url: `http://${process.env.REACT_APP_DEV_URL}/drinks/addDrink`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      newDrinkAddEdit(storeName, drinkName, drinkPrice);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'storeName': storeName,
    'drinkName': drinkName,
    'drinkPrice': drinkPrice 
  });
  var config = {
    method: 'post',
    url: `http://${process.env.REACT_APP_DEV_URL}/drinkPrice/addDrinkPrice`,
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

async function newDrinkAddEdit(storeName, drinkName, drinkPrice){
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'storeName': storeName,
    'drinkName': drinkName,
    'drinkPrice': drinkPrice 
  });
  var config = {
    method: 'post',
    url: `http://${process.env.REACT_APP_DEV_URL}/drinkPrice/addDrinkPrice`,
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

async function removeDrink(storeName, drinkName) {
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'storeName': storeName,
    'drinkName': drinkName
  });
  var config = {
    method: 'delete',
    url: `http://${process.env.REACT_APP_DEV_URL}/drinkPrice/deleteDrinkPrice`,
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

const EditDrinkInfo = () => {
  const [drinkName, setDrinkName] = useState("");
  const [drinkPrice, setDrinkPrice] = useState("");
  const drinkExistsBool = UseDrinkExists(drinkName).drinkExists;
  let store = window.location.pathname.split("/")[2]
  store = store.replace("%20", " ")
  console.log(store)

  if(localStorage.getItem("logged-in") && localStorage.getItem("store-name") === store){
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
              value={drinkName}
              onChange={(event) => setDrinkName(event.target.value)}
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
              value={drinkPrice}
              onChange={(event) => setDrinkPrice(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.AddDrinkButton}>
          <Link to={`/businessInventory/${store}`}>
            <button 
              type="submit"
              onClick={() => addEditDrink(store, drinkName, drinkPrice, drinkExistsBool)}
            >Add/Edit Drink</button>
          </Link>
        </div>

        <div className={styles.RemoveDrinkButton}>
          <Link to={`/businessInventory/${store}`}>
            <button 
              type="submit"
              onClick={() => removeDrink(store, drinkName)}
            >Remove Drink</button>
          </Link>
        </div>
      </main>
    );
  }
  else{
    return(
      <h1>Unauthorized</h1>
    );
  }
};

export default EditDrinkInfo;