import React from "react";
import styles from "../styles/DrinkDetailCSS.module.css";
import { Helmet } from "react-helmet";
import beer from "../images/download.jpg";
import Comments from "../components/Comments/Comments";
import { ButtonGroup, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const DrinkDetail = () => {
  return (
    <body>
      <div>
        <Helmet>
          <style>{"body {background-color: #363636; }"}</style>
        </Helmet>

        <h1 style={{ color: "azure" }}>GIN</h1>
        <ButtonGroup variant="text" aria-label="text button group">
          <IconButton sx={{ color: "azure" }}>
            <ThumbUpIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "azure" }}>
            <ThumbDownIcon fontSize="large" />
          </IconButton>
        </ButtonGroup>
        <Comments />
      </div>
    </body>
  );
};

export default DrinkDetail;
