import React, { useState } from 'react'
import Axios from 'axios';
import {connect} from 'react-redux'
import { setPosts, fetchPosts } from '../actions/actions';

function Create(props){
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setContent] = useState('')
    const [warning, setWarning] = useState('')
    const createPost = async () => {
        if(!props.isLoggedIn){
            setWarning('*Login to make a post*')
            setContent('')
            setPostTitle('')
        }
        else{
            if(!(postContent === '' || postTitle === '')){
                Axios.post('https://us-central1-forum-app-33ac9.cloudfunctions.net/api/posts/add', {title: postTitle, author: props.user.username, userId: props.user.userId, content: postContent})
                props.fetch()
                .then(res => {
                props.setPosts(res.data)
                })

                setContent('')
                setPostTitle('')
                setWarning('')
            }
            else{
                setWarning('*Please fill out all fields*')
            }
        }
    }

    return(
        <div className='post-form'>
            <div className='post-form-input'>
                <input type='text' name='title' value={postTitle} onChange={e => setPostTitle(e.target.value)} placeholder='Post title'/>
            </div>
            <div className='post-form-input'>
                <textarea name='content' value={postContent} onChange={e => setContent(e.target.value)} placeholder="What's on your mind..."/>
            </div>
            <div>
                <h5 className='warning'>{warning}</h5>
            </div>
            <div className='btn' onClick={createPost}>Post</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        isLoggedIn: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetch: () => dispatch(fetchPosts()),
        setPosts: posts => dispatch(setPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);