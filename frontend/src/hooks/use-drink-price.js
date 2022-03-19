import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const useDrinkPrice = () => {
  const [drinkPrice, setDrinkPrice] = useState([]);

  const fetchDrinkPrice = async () => {
    var data = qs.stringify({
      drinkName: "Gin",
    });

    console.log(`Data:"${data}`);

    var config = {
      method: "GET",
      url: "http://localhost:3000/drinkPrice/getPrices",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      params: { 'drinkName': "Gin" },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDrinkPrice(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDrinkPrice();
  }, []);

  return {
    drinkPrice
  };
};

export default useDrinkPrice;
