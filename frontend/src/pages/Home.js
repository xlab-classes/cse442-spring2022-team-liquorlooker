import { React , useState } from "react";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
import Map from "../images/maps.png";
import data from "../components/List/store.json";
import { Helmet } from "react-helmet";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";
import useDrinks from "../hooks/use-drinks";
import useDrinkPrice from "../hooks/use-drink-price";

const Home = () => {
  const drinks = useDrinks();
  const drinkPrices = useDrinkPrice();

  return (
    
    <body className="main">
      
      <Helmet>
        <style>{"body { background-color: #363636; }"}</style>
      </Helmet>

      <h1>{"DrinkID: " + drinkPrices.drinkPrice.map((e) => e.drinkPrice)}</h1>

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
            defaultValue="5"
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
          <Autocomplete
            id="combo-box"
            freeSolo
            disableClearable
            size="small"
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
                onChange = {(event) => {
                  
                }}
              />
            )}
          />
        </div>

        <img className="map" src={Map} alt="Map" />
      </div>
    </body>
  );
};

export default Home;
