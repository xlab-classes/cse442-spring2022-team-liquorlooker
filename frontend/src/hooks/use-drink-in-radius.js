import { useEffect, useState } from "react";
import axios from "axios";

function useDrinksInRadius(radius, longitude, latitude, drinkName) {
  const [stores, setStores] = useState([]);

  const fetchDrinksInRadius = async () => {
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_URL}/drinkPrice/drinkInRadius`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        radius: radius,
        latitude: latitude,
        longitude: longitude,
        drinkName: drinkName,
      },
    };

    axios(config).then(function (response) {
      console.log(`req-data:${JSON.stringify(response.data)}`);
      setStores(response.data);
    });
  };

  useEffect(() => {
    fetchDrinksInRadius();
  }, [radius, drinkName]);

  return stores;
}

export default useDrinksInRadius;
