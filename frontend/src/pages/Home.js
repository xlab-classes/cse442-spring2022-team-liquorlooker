import { React } from "react";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
import Map from "../assets/maps.png";
import data from "../components/List/store.json";
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <body className="main">

      <Helmet>
        <style>{"body { background-color: #363636; }"}</style>
      </Helmet>

      <div className="sidebar">
        <div className="radius">
          <TextField
            id="radius-tf"
            label="Radius"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            defaultValue= "5"
            onChange={(event) =>
              event.target.value < 1
                ? (event.target.value = "")
                : event.target.value
            }
            type="number"
          />
        </div>
        <MyList data={data} />
      </div>

      <div className="right">
        <div className="search">
          <TextField
            id="search-tf"
            label="Search Drink"
            variant="outlined"
            fullWidth="true"
            size="small"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            type="search"
          />
        </div>
        <img className="map" src={Map} alt="Map" />
      </div>

    </body>
  );
};

export default Home;
