import axios from "axios";
import { useState, useEffect } from "react";

export default function useLikes(drinkName) {
  const [likes, setLikes] = useState(0);
  // if(drinkName === "") return;

  const fetchLikes = async () => {
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_DEV_URL}/likes/getLikes`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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

  const postLikes = async () => {
    var data = JSON.stringify({
      drinkName: drinkName, 
    });

    var config = {
      method: 'post',
      url: `http://${process.env.REACT_APP_DEV_URL}/likes/bumpLikes`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      fetchLikes()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleClick = () => {
    console.log("Like clicked")
    console.log(`drink name is ${drinkName}`)
    postLikes(); 
  }

  useEffect(() => {
    fetchLikes();
  }, []);

  return { likes, fetchLikes, handleClick };
}
