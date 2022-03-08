import React from "react";
import data from "./store.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MyList = (props) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        color: 'azure',
        bgcolor: "#363636",
        position: "relative",
        overflow: "auto",
        maxHeight: '79vh',
        minWidth:'20vw',
        maxWidth: '100vw',
        overflow: 'auto',
        border: 1, 
        borderColor: 'white',
        borderRadius: 2,
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
