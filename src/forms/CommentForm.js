import React, { useState } from 'react'
import Axios from 'axios'

function CommentForm(props){
    const [comment, setComment] = useState('')
    const api = Axios.create({
        baseURL: '/comments/'
    })
    const comment = () => {
        api.post('/create/', {postId: props.postId, comment: comment})
    }
    return(
        <div>
            <div className=""><textarea placeholder='What do you think?' onChange={e => setComment(e.target.value)}/></div>
            <div className="btn">Comment</div>
        </div>
    )
}