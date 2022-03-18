import { React } from "react";
import TextField from "@mui/material/TextField";
import "../styles/Home.css";
import MyList from "../components/List/List";
import Map from "../images/maps.png";
import data from "../components/List/store.json";
import { Helmet } from "react-helmet";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";

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
                  background: "#363636",
                  color: "azure",
                }}
              >
                {children}
              </Paper>
            )}
            options={data.map((option) => option.text)}
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
