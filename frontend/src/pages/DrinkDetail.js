import { React, useState }from "react";
import styles from "../styles/DrinkDetailCSS.module.css";
import { Helmet } from "react-helmet";
import beer from "../images/download.jpg";
import Comments from "../components/Comments/Comments";
import { IconButton, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import useComments from "../hooks/use-comments";
import { useLocation } from "react-router";
import useLikes from "../hooks/use-drink-likes";

export default function DrinkDetail() {
  const location = useLocation();
  const { drinkName } = location.state;
  const { comments, fetchComments, postComment } = useComments(drinkName);
  // const [thumbsUp, setThumbsUp] = useState(false);
  const [disable, setDisable] = useState(false)
  const { likes, fetchLikes, handleClick } = useLikes(drinkName);

  const loggedIn = localStorage.getItem("logged_in");

  if (loggedIn) {
    const userEmail = localStorage.getItem("user-email");
    const user = userEmail.substring(0, userEmail.indexOf("@"));
  }


  return (
    <body>
      <div>
        <Helmet>
          <style>{"body {background-color: #363636; }"}</style>
        </Helmet>

        <h1 style={{ color: "azure" }}>{drinkName}</h1>
        {/* <Button variant="outlined" startIcon={<ThumbUpIcon />} style={{ color: "azure" }} >
          {likes.like_count}
        </Button> */}
        <IconButton 
          style={{ color: "azure", display: "flex", flexDirection: "column" }} 
          size="small"
          // disabled={!loggedIn}
          onClick={() => {
            handleClick()
          }}
        >
          <ThumbUpIcon fontSize="large" />
          <div>{likes.like_count}</div>
        </IconButton>
        <Comments comments={comments} />
      </div>
    </body>
  );
};
