import { useEffect, useState } from "react";
import axios from "axios";

function useDrinksInRadius(radius, longitude, latitude, drinkName, onStoreChange) {
  const [stores, setStores] = useState([]);

  const fetchDrinksInRadius = async () => {
    var config = {
      method: "get",
      url: `http://localhost:3000/drinkPrice/drinkInRadius`,
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
      console.log(`:${JSON.stringify(response.data)}`);
      setStores(response.data);
      onStoreChange(response.data);
      

    });
  };

  useEffect(() => {
    fetchDrinksInRadius();
        
  }, [radius, drinkName]);


  return(stores);
}

export default useDrinksInRadius;
