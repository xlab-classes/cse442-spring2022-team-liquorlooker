import React from "react";
import data from "./store.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MyList = (props) => {
  return (
    // <ul>
    //     {data.map((item) => (
    //         <li key={item.id}>{item.text}</li>
    //     ))}
    // </ul>
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: '80vh',
        minWidth:'20vw',
        maxWidth: '100vw',
        overflow: 'auto',
        "& ul": { padding: 0 },
      }}
    >
      
    <ul>
        {data.map((item) => (
            <ListItem key={`${item.id}`}>
                <ListItemText primary={`${item.text}`} />
            </ListItem>
        ))}
    </ul>
    </List>
  );
};

export default MyList;
