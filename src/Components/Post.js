import React from 'react'
import {connect} from 'react-redux'
import {setPost, activate, fetchComments} from '../actions/actions'

//preview block that users can click on to see entire post
function Post(props){
    const post = {
        author: props.author,
        content: props.content,
        id: props._id,
        title: props.title,
        userId: props.userId
    }

    const handleClick = async () => {
        props.setPost(post)
        props.activate()
        props.loadComments(post.id)
    }

    return(
        <div className='post-preview' onClick={handleClick}>
            <div className='post-preview-title'>{props.title}</div>
            <div className='post-preview-author'>{props.content}</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        setPost: post => dispatch(setPost(post)),
        activate: () => dispatch(activate()),
        loadComments: id => dispatch(fetchComments(id))
    }
}

export default connect(null, mapDispatchToProps)(Post)