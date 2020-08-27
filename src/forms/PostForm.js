import React, { useState } from 'react'
import Axios from 'axios';
import {connect} from 'react-redux'
import { addPost } from '../actions/actions';

function Create(props){
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setContent] = useState('')

    const api = Axios.create({
        baseURL: '/posts'
    })

    const createPost = async () => {
        await api.post('/create', {title: postTitle, author: "test", content: postContent})
        window.location.reload()
    }

    return(
        <div className='post-form'>
            <div className='post-form-input'>
                <input type='text' name='title' onChange={e => setPostTitle(e.target.value)} placeholder='Post title'/>
            </div>
            <div className='post-form-input'>
                <textarea name='content' onChange={e => setContent(e.target.value)} placeholder="What's on your mind..."/>
            </div>
            <div className='btn' onClick={createPost}>Post</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);