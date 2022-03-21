import { useEffect, useState } from "react";
import axios from "axios";

const useDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  console.log(drinks)
  const fetchDrinks = async () => {
    var config = {
      method: "get",
      url: "http://cheshire.cse.buffalo.edu:1812/drinks/getAllDrinkNames",
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDrinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return {
    drinks,
  };
};

export default useDrinks;
