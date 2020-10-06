import React, { useState } from 'react'
import Axios from 'axios'
import { fetchPosts, deactivate } from '../actions/actions'
import {connect} from 'react-redux'

//renders form to edit post
function PostEdit(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const api = Axios.create({
        baseURL: 'https://us-central1-forum-app-33ac9.cloudfunctions.net/api/posts'
    })

    const updatePost = async () => {
        await api.patch(`/edit/${props.post.id}`, {title: title, content: content})
        //updating post list and closing the window
        props.loadPosts()
        props.close()
    }

    const deletePost = async () => {
        await api.delete(`/delete/${props.post.id}`)
        //updating post list and closing the window
        props.loadPosts()
        props.close()
    }

    return(
        <div className='form-edit-post'>
            <div><input type='text' onChange={e => setTitle(e.target.value)} placeholder={props.post.title} name='title'/></div>
            <textarea name='content' onChange={e => setContent(e.target.value)} placeholder={props.post.content}/>
            <button className='btn-edit' onSubmit={e => e.preventDefault()} onClick={updatePost}>Edit</button>
            <button className='btn-del' onSubmit={e => e.preventDefault()} onClick={deletePost}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadPosts: () => dispatch(fetchPosts()),
        close: () => dispatch(deactivate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)