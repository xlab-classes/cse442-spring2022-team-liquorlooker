import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const useDrinkPrice = () => {
  const [drinkPrice, setDrinkPrice] = useState([]);

  const fetchDrinkPrice = async () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // var urlencoded = new URLSearchParams();
    // urlencoded.append("drinkName", "Gin");

    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   body: urlencoded,
    //   redirect: "follow",
    // };

    // fetch("localhost:3000/drinkPrice/getPrices", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

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
      // params: { drinkName: "Gin" },
      data: data,
    };

    // const res = await axios.get(config.url, { params: { drinkName: 'Gin' } });
    // console.log(JSON.stringify(res.data))
    await axios(config)
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
