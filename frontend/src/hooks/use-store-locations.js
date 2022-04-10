import { useEffect, useState } from "react";
import axios from "axios";

function useStoreLocations(radius, longitude, latitude) {
  const [stores, setStores] = useState([]);

  var config = {
    method: "get",
    url: `http://localhost:3000/store/getStoresInRadius`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: { 
      radius: radius,
      latitude: latitude,
      longitude: longitude,
   },
  };

  const fetchStoreLocations = async () => {
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      setStores(response.data);
    });
  };

  useEffect(() => {
    fetchStoreLocations();
  }, [radius]);

    return stores;
};

export default useStoreLocations;
