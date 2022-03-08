import React from "react";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
import Map from "../assets/maps.png";

const Home = () => {
  return (
      <main className="main">
        <div className="sidebar">
          <TextField
            id="outlined-basic"
            label="Radius"
            variant="outlined"
            size="small"
          />
          <MyList />
        </div>

        <div className="right">
          <div className="search">
            <TextField
              id="outlined-basic"
              label="Search Drink"
              variant="outlined"
              fullWidth="true"
              size="small"
            />
          </div>
          <img className="map" src={Map} alt="Map"/>
        </div>
      </main>
  );
};

export default Home;
