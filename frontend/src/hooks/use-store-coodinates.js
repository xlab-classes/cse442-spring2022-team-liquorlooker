import { useEffect, useState, useRef } from "react";
import axios from "axios";

function useStoreCoordinates(stores, drinkName, radius) {
  const [storeCoord, setStoreCoord] = useState({});
  const [storeCoords, setStoreCoords] = useState([]);

  const fetchStoreCoodinates = async (storeName) => {
    var config = {
      method: "get",
      url: "http://localhost:3000/store/getLocation",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        storeName: storeName,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStoreCoord((prevStoreCoord) => {
          return {
            lat: response.data.latitude,
            lng: response.data.longitude,
          };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    stores.map?.((store) => {
      fetchStoreCoodinates(store);
      setStoreCoords((prev) => {
          if(!(prev.includes(storeCoord))){
            return [...prev, storeCoord];
          }
      });
    });
  }, [drinkName, radius]);

  console.log(storeCoord);
  console.log(storeCoords);

  // return storeCoords;
  return storeCoords;
}

export default useStoreCoordinates;
