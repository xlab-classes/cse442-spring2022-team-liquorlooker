import React from "react";
import styles from "../styles/DrinkDetailCSS.module.css"
import {Helmet} from "react-helmet"
import beer from "../images/download.jpg"

const DrinkDetail = () => {
  return (
    <body>
      <div>
        <Helmet>
          <style>{'body {background-color: #363636; }'}</style>
        </Helmet>
        <img src={beer} alt="Beer" className={styles.DrinkImage}></img>
        <p><span className={styles.DrinkName}>Drink Name</span></p>
        <p><span className={styles.Price}>Price: $$$</span></p>
        <p><span className={styles.Locations}>Locations: 1,2,3</span></p>
        <p><span className={styles.Rating}>Rating: x/10</span></p>
      </div>
    </body>
  );
}

export default DrinkDetail;