import { React, useState } from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import { IconButton, Button, TextField } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from "../components/Comments/Comments";
import useComments from "../hooks/use-comments";
import useLikes from "../hooks/use-drink-likes";

export default function DrinkDetail() {
  const location = useLocation();
  const { drinkName } = location.state;
  const { comments, fetchComments, postComment } = useComments(drinkName);
  // const [thumbsUp, setThumbsUp] = useState(false);
  const { likes, fetchLikes, handleClick } = useLikes(drinkName);
  const [comment, setComment] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("logged-in"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("user-email"));
  const [user, setUser] = useState("")
  const [storeName, setStoreName] = useState(localStorage.getItem("store-name"));

  // userEmail.substring(0, userEmail.indexOf("@"))
  console.log(loggedIn);

  // const userEmail = localStorage.getItem("user-email");
  // const user = userEmail.substring(0, userEmail.indexOf("@"));
  console.log(userEmail);
  

  return (
    <>
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
          disabled={!loggedIn}
          onClick={() => {
            handleClick();
          }}
        >
          <ThumbUpIcon fontSize="large" />
          <div>{likes.like_count}</div>
        </IconButton>

        {loggedIn !== null && loggedIn === "true" && (
          <div
            style={{
              maxWidth: "96.2vw",
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
              // justifyContent: "left",
              alignItems: "center"
            }}
          >
            <TextField
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "black",
                  },
                },
              }}
              id="filled-textarea"
              // variant="filled"
              rows={4}
              label="Comment"
              placeholder="Leave a comment"
              justifyContent="right"
              margin="normal"
              onChange={(event) => {
                setComment(event.target.value);
                setUser(userEmail.substring(0, userEmail.indexOf("@")))
                console.log(comment);
              }}
              InputLabelProps={{
                style: { color: "azure" },
              }}
              InputProps={{
                style: { color: "azure" },
              }}
              disabled={!loggedIn}
              multiline
              fullWidth
            />
            <Button 
              size="medium" 
              variant="contained" 
              style={{maxWidth: "20%"}}
              onClick={() => {
                console.log("button clicked")
                // setUserEmail(userEmail.substring(0, userEmail.indexOf("@")));
                console.log(storeName)
                console.log(`user: ${userEmail}`);
                console.log(`user: ${user}`);
                if(storeName !== "null" && comment !== ""){
                  postComment(storeName, comment);
                  return;
                }else if(user === "" || comment === ""){
                  return;
                }else{
                  postComment(user, comment);
                  return;
                }
              }}
            >
              Submit
            </Button>
          </div>
        )}
        <Comments comments={comments} />
      </div>
    </>
  );
}
