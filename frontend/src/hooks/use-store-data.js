import { useEffect, useState } from "react";

const useStoreData = (storeName) => {
  const [storeData, setStoreData] = useState([]);

  console.log(storeData);
  const fetchStoreData = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url:
        `http://${process.env.REACT_APP_URL}/drinkPrice/getStoreInventory?storeName=` +
        storeName,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStoreData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStoreData();
  }, [storeName]);

  return storeData;
};

export default useStoreData;
