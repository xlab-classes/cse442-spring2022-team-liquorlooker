import { useEffect, useState } from "react";
import axios from "axios";

const useStoreLocations = (data) => {
  const [stores, setStores] = useState([]);

  var axios = require("axios");

  var config = {
    method: "get",
    url: `http://${process.env.REACT_APP_DEV_URL}/store/getLocation`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      radius: 5,
      latitude: 42,
      longitude: -78,
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
  }, []);

  return stores;
};

export default useStoreLocations;
