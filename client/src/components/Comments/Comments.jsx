import React, { useState, useEffect } from 'react';
import SingleComment from '../SingleComment/SingleComment';

function Comments() {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/v1/reviews', {
                method: 'GET',
            });

            const parseData = await data.json();

            setComments(parseData.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div className="container container--comments">
            {comments.map((el, i) => <SingleComment key={i} comment={el} />)}
        </div>

    )
}

export default Comments;