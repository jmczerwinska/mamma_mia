import React from 'react';

function SingleComment({ comment }) {
    const { title, raiting, text } = comment
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>Ocena: {raiting}/5</h2>
            <p>{text}</p>
        </div>
    )
}

export default SingleComment;