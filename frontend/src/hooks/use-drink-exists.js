import { useEffect, useState } from "react";

const UseDrinkExists = (drinkName) => {
  const [drinkExists, setStoreData] = useState(false);

  const fetchDrinkExists = async () => {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      drinkName: drinkName,
    });
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_URL}/drinks/exists`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
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
    fetchDrinkExists();
  }, [drinkName]);

  return drinkExists;
};

export default UseDrinkExists;
