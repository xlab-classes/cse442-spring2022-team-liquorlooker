import { React, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
// import Map from "../images/maps.png";
import stores from "../components/List/store.json";
import { Helmet } from "react-helmet";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";
import useDrinks from "../hooks/use-drinks";
import useDrinkPrice from "../hooks/use-drink-price";
import Map from "../components/Map/Map";


const Home = () => {
  const enter = 13;
  const drinks = useDrinks();
  const [drinkName, setDrinkName] = useState("");
  const drinkPrices = useDrinkPrice(drinkName);
  const [radius, setRadius] = useState(1);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <body className="main">
      <Helmet>
        <style>{"body { background-color: #363636; }"}</style>
      </Helmet>

      {/* <h1>{drinkPrices.drink.map((e) => e.drinkName)}</h1> */}

      <div className="sidebar">
        <div className="radius">
          <TextField
            id="radius-tf"
            label="Radius"
            size="small"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            defaultValue="1"
            onChange={(event) => {
              if(event.target.value < 1){
                event.target.value = ""
                return event.target.value;
              }else{
                setRadius(event.target.value)
                return event.target.value
              }
            }}
            type="number"
          />
        </div>

        {/* <MyList data={stores} /> */}

        <MyList data={drinkPrices} name={drinkName} />
      </div>

      <div className="right">
        <div className="search">
          <Autocomplete
            id="combo-box"
            freeSolo
            disableClearable
            size="small"
            onChange={(e, newval, reason) => {
              setDrinkName(newval);
            }}
            PaperComponent={({ children }) => (
              <Paper
                style={{
                  fontFamily:
                    "'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'",
                  background: "#363636",
                  color: "azure",
                }}
              >
                {children}
              </Paper>
            )}
            options={drinks.drinks.map((option) => option.drinkName)}
            renderInput={(params) => (
              <TextField
                {...params}
                id="search-tf"
                label="Search Drink"
                fullWidth="true"
                // size="small"
                InputLabelProps={{
                  style: { color: "azure" },
                }}
                InputProps={{
                  ...params.InputProps,
                  style: { color: "azure" },
                  type: "search",
                }}
                value={drinkName}
                onKeyDown={(event) => {
                  if (event.key === enter) {
                    setDrinkName(event.target.value);
                  }
                }}
              />
            )}
          />
        </div>

        <Map radius={radius} drinkName={drinkName}/>
        {/* <img className="map" src={Map} alt="Map" /> */}
      </div>
    </body>
  );
};

export default Home;
