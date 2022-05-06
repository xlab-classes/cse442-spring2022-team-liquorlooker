import { useEffect, useState } from "react";
import axios from "axios";

export default function useDrinkExists(drinkName) {
  const [drinkExists, setDrinkExists] = useState(false);

  const fetchDrinkExists = async () => {
    var config = {
      method: 'get',
      url: `http://${process.env.REACT_APP_DEV_URL}/drinks/exists`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        drinkName : drinkName,
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setDrinkExists(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchDrinkExists();
  }, [drinkName]);

  return drinkExists.drinkExists;
};