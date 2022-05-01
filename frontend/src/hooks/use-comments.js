import { useEffect, useState } from "react";
import axios from "axios";

export default function useComments({ drinkName }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = () => {
      var config = {
        method: "get",
        url: `http://${process.env.REACT_APP_DEV_URL}/comments/getComments`,
        headers: {},
        params: {
          drinkName: drinkName,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setComments(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchComments();
  }, []);

  return comments;
}
