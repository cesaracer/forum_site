import React, { useEffect, useState } from 'react'

function PostPage(props){
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`/comments/${props._id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    })

    return(
        <div>
            <div className="post-page-title">{props.title}</div>
            <div className="post-page-date">{props.date}</div>
            <div className="post-page-content">{props.content}</div>
            <CommentForm postId={props._id}/>
            <div className="post-page-comments">
                {
                    comments.map(c => <Comment key={c._id} {...c}/>)
                }
            </div>
        </div>
    )
}