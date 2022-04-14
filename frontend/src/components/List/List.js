import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import { Button } from "@mui/material";

const MyList = (props) => {
  const stores = props.stores
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

  if(stores.length > 0){
    return (
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
          {
            stores.map?.((store) => {
              return <ListItem key={store}>
                <ListItemButton>
                  <ListItemText primary={`${store.storeName} \n ${store.drinkName} $ ${store.drinkPrice}`}/>
                </ListItemButton>
              </ListItem>
            })
          }


          {/* {props.map((e) => ( */}
            {/* <ListItem>
              <ListItemButton>
                <ListItemText primary={`${Object.values(props.data[0])[1]} \n  $${Object.values(props.data[0])[2]}`} />
              </ListItemButton>
            </ListItem> */}
          {/* // ))} */}

        </ul>
      </List>
    );

  }else{
    return(
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
        {/* {props.map((e) => ( */}
          <ListItem>
            <ListItemButton>
              <ListItemText primary={"No Price Detected"} />
            </ListItemButton>
          </ListItem>
        {/* // ))} */}

        {/* {props.data.map((item) => (
            <ListItem key={`${item.id}`}>
                <ListItemButton>
                  <ListItemText primary={`${item.text}`} />
                </ListItemButton>
            </ListItem>
        ))} */}
      </ul>
    </List>
    );
  }

};

export default MyList;
