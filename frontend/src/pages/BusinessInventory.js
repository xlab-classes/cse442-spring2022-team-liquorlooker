import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BusinessInventory.module.css";
import { Helmet } from "react-helmet";
import { TableContainer,Table,TableHead,TableRow,TableBody,TableCell } from "@mui/material";
import useStoreData from "../hooks/use-store-data";

const BusinessInventory = () => {
  function createData(drinkName, price) {
    return { drinkName, price };
  }

  const store = window.location.pathname.split("/")[2]
  const rows = [];
  const storeData = useStoreData(store);
  storeData.forEach(element => {
    rows.push(createData(element.drinkName, element.drinkPrice))
  });

  return(
    <main>
      <Helmet>
        <style>{"body {background-color: #363636; }"}</style>
      </Helmet>
      <div>
        <h1>
          <span className={styles.StoreName}>{store}</span>
        </h1>
      </div>
      <div>
      <TableContainer className={styles.Table}>
      <Table sx={{ maxWidth: 550, backgroundColor: "#514E4E", border: "1.5px solid black"}}aria-label="drink table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: "white", fontFamily: 'Segoe UI'}}>Drink Name</TableCell>
            <TableCell sx={{color: "white", fontFamily: 'Segoe UI'}} align="right">Price&nbsp;($$$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: "white"}} component="th" scope="row">
                {row.drinkName}
              </TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
      {localStorage.getItem("logged-in") ? <div className={styles.EditDrink}>
        <Link to={`/editDrinkInfo/${store}`}>
          <button type="submit">Edit Drink Info</button>
        </Link>
      </div> : null}
    </main>
  );
};

export default BusinessInventory;