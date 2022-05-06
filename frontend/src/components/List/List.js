import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import useDrinkExists from "../../hooks/use-drink-exists";

const MyList = (props) => {
  const drinkExists = useDrinkExists(props.drinkName);
  const compareByPrice = (a, b) => {
    return a.drinkPrice > b.drinkPrice
      ? 1
      : b.drinkPrice > a.drinkPrice
      ? -1
      : 0;
  };
  const stores = props.stores.sort(compareByPrice);
  // if(props.data.length > 0){
  // return(
  // <Button variant="text" size= "large" sx={{
  //   color: "azure",
  //   width: "100%",
  // }}
  // >
  //   {props.name}
  //   {" $" + Object.values(props.data[0])[2]}
  // </Button>
  // )
  // }

  // if (stores.length > 0) {
    console.log(drinkExists)
  return (
    <>
      {drinkExists && stores.length > 0 && (
        <List
          sx={{
            width: "100%",
            color: "azure",
            bgcolor: "#363636",
            position: "relative",
            overflow: "auto",
            maxHeight: "80vh",
            minWidth: "20vw",
            maxWidth: "100vw",
            overflow: "auto",
            border: 1,
            borderColor: "white",
            borderRadius: 2,
            "& ul": { padding: 0 },
          }}
        >
          <ul>
            {stores.map?.((store) => {
              return (
                <ListItem key={store}>
                  <Link
                    to={"/DrinkDetail"}
                    state={{ drinkName: props.drinkName }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={`${store.storeName} \n ${
                          store.drinkName
                        } $${store.drinkPrice.toFixed(2)}`}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </ul>
        </List>
      )}
      {!drinkExists && (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            color: "azure",
            bgcolor: "#363636",
            position: "relative",
            overflow: "auto",
            maxHeight: "79vh",
            minWidth: "20vw",
            maxWidth: "100vw",
            overflow: "auto",
            border: 1,
            borderColor: "white",
            borderRadius: 2,
            "& ul": { padding: 0 },
          }}
        >
          <ul>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={"No Price Detected"} />
              </ListItemButton>
            </ListItem>
          </ul>
        </List>
      )}
    </>
  );
};
//   } else {
//     return (
//       <List
//         sx={{
//           width: "100%",
//           maxWidth: 360,
//           color: "azure",
//           bgcolor: "#363636",
//           position: "relative",
//           overflow: "auto",
//           maxHeight: "79vh",
//           minWidth: "20vw",
//           maxWidth: "100vw",
//           overflow: "auto",
//           border: 1,
//           borderColor: "white",
//           borderRadius: 2,
//           "& ul": { padding: 0 },
//         }}
//       >
//         <ul>
//           <ListItem>
//             <ListItemButton>
//               <ListItemText primary={"No Price Detected"} />
//             </ListItemButton>
//           </ListItem>
//         </ul>
//       </List>
//     );
//   }
// };

export default MyList;
