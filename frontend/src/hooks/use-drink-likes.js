import axios from "axios";
import { useState, useEffect } from "react";

export default function useLikes({ drinkName }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = () => {
      var config = {
        method: "get",
        url: `  http://${process.env.REACT_APP_DEV_URL}/likes/getLikes?drinkName=Gin`,
        headers: {},
        params: {
          drinkName: drinkName,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setLikes(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchLikes();
  }, []);

  return likes;
}
