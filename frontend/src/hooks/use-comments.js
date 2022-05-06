import { useEffect, useState } from "react";
import axios from "axios";

export default function useComments(drinkName) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    var config = {
      method: "get",
      url: `http://${process.env.REACT_APP_DEV_URL}/comments/getComments`,
      headers: {
        "Content-Type": "application/json",
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
      url: `http://${process.env.REACT_APP_DEV_URL}/comments/addComment`,
      headers: {
        "Content-Type": "application/json",
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
        fetchComments();
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
