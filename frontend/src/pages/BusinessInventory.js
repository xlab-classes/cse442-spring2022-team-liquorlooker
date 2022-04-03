import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BusinessInventory.module.css";
import { Helmet } from "react-helmet";
import { TableContainer,Table,TableHead,TableRow,TableBody,TableCell } from "@mui/material";

function createData(drinkName, price, percentage) {
  return { drinkName, price, percentage};
}

const rows = [
  createData('Everclear 750ml', 21.59, 60),
  createData('Blue Light 18pk', 14.99, 4.5),
  createData('Titos 375ml', 13.99, 40),
  createData('Pink Whitney 750ml', 10.99, 35),
  createData('Jose Cuervo 750ml', 26.99, 40),
];

const BusinessInventory = () => {
  return(
    <main>
      <Helmet>
        <style>{"body {background-color: #363636; }"}</style>
      </Helmet>
      <div>
        <h1>
          <span className={styles.StoreName}>Store Name</span>
        </h1>
      </div>
      <div>
        <h2>
          <span className={styles.Location}>Location</span>
        </h2>
      </div>
      <div>
      <TableContainer className={styles.Table}>
      <Table sx={{ maxWidth: 650, backgroundColor: "#514E4E", border: "1.5px solid black"}}aria-label="drink table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: "white", fontFamily: 'Segoe UI'}}>Drink Name</TableCell>
            <TableCell sx={{color: "white", fontFamily: 'Segoe UI'}} align="center">Price&nbsp;($$$)</TableCell>
            <TableCell sx={{color: "white", fontFamily: 'Segoe UI'}} align="center">Abv&nbsp;(%)</TableCell>
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
              <TableCell sx={{color: "white"}} align="center">{row.price}</TableCell>
              <TableCell sx={{color: "white"}} align="center">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
      <div className={styles.AddDrink}>
        <Link to="/addDrink">
          <button type="submit">Add Drink</button>
        </Link>
      </div>
    </main>
  );
};

export default BusinessInventory;