import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

export default async function fetchDrinkID() {
  // const [drinkID, setDrinkID] = useState([]);

  // useEffect(() => {
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  // var urlencoded = new URLSearchParams();
  // urlencoded.append("drinkName", "Gin");

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   body: urlencoded,
  //   redirect: 'follow'
  // };

  await fetch("http://localhost:3000/drinks/getDrinkid", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(
      JSON.stringify({
        drinkName: "Gin",
      })
    ),
  }).then((res) => {
    console.log(res);
  });

  // fetch("localhost:3000/drinks/getDrinkid", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // }, []);

  // return {
  //   drinkID,
  // };
}
