import { React, useState, useDebugValue } from "react";
import { useLoadScript } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
import { Helmet } from "react-helmet";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";
import useDrinkNames from "../hooks/use-drink-names";
import useDrinkPrice from "../hooks/use-drink-price";
import Map from "../components/Map/Map";

const Home = () => {
  const enter = 13;
  const drinkNames = useDrinkNames();
  const [drinkName, setDrinkName] = useState("");
  const drinkPrices = useDrinkPrice(drinkName);
  const [radius, setRadius] = useState(1);
  const [stores, setStores] = useState([]);

  console.log(`HOME store: ${JSON.stringify(stores)}`);
  useDebugValue(stores ? `HOME: ${stores}` : "IDK");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  const handleStoresChange = (stores) => {
    setStores(stores);
  };

  return (
    <body className="main">
      <Helmet>
        <title>Liquor Looker</title>
        <style>{"body { background-color: #363636; }"}</style>
      </Helmet>

      {/* <h1>{drinkPrices.drink.map((e) => e.drinkName)}</h1> */}

      <div className="sidebar">
        <div className="radius">
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            id="radius-tf"
            label="Radius"
            size="small"
            // variant="filled"
            InputLabelProps={{
              style: { color: "azure" },
            }}
            InputProps={{
              style: { color: "azure" },
            }}
            defaultValue="1"
            onChange={(event) => {
              if (event.target.value < 1) {
                event.target.value = "";
                return event.target.value;
              } else {
                setRadius(event.target.value);
                return event.target.value;
              }
            }}
            type="number"
          />
        </div>

        {/* <MyList data={stores} /> */}

        <MyList
          drinkPrices={drinkPrices}
          drinkName={drinkName}
          stores={stores}
        />
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
            options={drinkNames.map?.((drink) => drink.drinkName)}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                id="search-tf"
                label="Search Drink"
                fullWidth="true"
                // size="small"
                InputLabelProps={{
                  style: { color: "azure" },
                }}
                InputProps={{
                  ...params.InputProps,
                  style: { 
                    color: "azure",
                    padding : 3,
                  },
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
        <Map
          radius={radius}
          drinkName={drinkName}
          onStoreChange={handleStoresChange}
        />
      </div>
    </body>
  );
};

export default Home;
