import { useEffect, useState } from "react";
import axios from "axios";

function useComments({drinkName}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = () => {

        }

        fetchComments();
    })

}

export default useComments;