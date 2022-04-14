import { useEffect, useState } from "react";
import axios from "axios";

function useDrinkNames() {
  const [drinkNames, setDrinkNames] = useState([]);

  const fetchDrinks = async () => {
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_DEV_URL}/drinks/getAllDrinkNames`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDrinkNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return drinkNames;
 
};

export default useDrinkNames;
