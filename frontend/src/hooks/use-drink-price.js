import { useEffect, useState } from "react";
import axios from "axios";

const useDrinkPrice = (drinkName) => {
  const [drink, setDrink] = useState([]);

  console.log(drink)
  const fetchDrinkPrice = async () => {
    var config = {
      method: "GET",
      url: "http://localhost:3000/drinkPrice/getPrices",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: { drinkName: drinkName },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDrink(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDrinkPrice();
  }, [drinkName]);

  return(drink);
};

export default useDrinkPrice;
