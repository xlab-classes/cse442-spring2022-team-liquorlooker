import React from "react";
import styles from "../styles/DrinkDetailCSS.module.css";
import { Helmet } from "react-helmet";
import beer from "../images/download.jpg";
import Comments from "../components/Comments/Comments";
import { ButtonGroup, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import useComments from "../hooks/use-comments";
import { useLocation } from "react-router";

const DrinkDetail = () => {
  const location = useLocation();
  const { drinkName } = location.state;
  const loggedIn = localStorage.getItem("logged_in");
  if(loggedIn){
    const userEmail = localStorage.getItem("user-email");
    const user = userEmail.substring(0, userEmail.indexOf('@'));
  }
  const { comments, fetchComments, postComment } = useComments(drinkName);
  console.log(comments);
  return (
    <body>
      <div>
        <Helmet>
          <style>{"body {background-color: #363636; }"}</style>
        </Helmet>

        <h1 style={{ color: "azure" }}>{drinkName}</h1>
        <ButtonGroup variant="text" aria-label="text button group">
          <IconButton sx={{ color: "azure" }}>
            <ThumbUpIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "azure" }}>
            <ThumbDownIcon fontSize="large" />
          </IconButton>
        </ButtonGroup>
        <Comments comments={comments}/>
      </div>
    </body>
  );
};

export default DrinkDetail;
