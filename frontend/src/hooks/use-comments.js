import { useEffect, useState } from "react";
import axios from "axios";

export default function useComments(drinkName) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_DEV_URL}/comments/getComments`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        drinkName: drinkName,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setComments(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postComment = async (userName, comment) => {
    var config = {
      method: "post",
      url: "localhost:3000/comments/addComment",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        userName: userName,
        comment: comment,
        drinkName: drinkName,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchComments();
  }, [])

  return { comments, fetchComments, postComment };
}
