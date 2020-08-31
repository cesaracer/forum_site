import React, { useState } from 'react'
import {connect} from 'react-redux'
import { fetchComments } from '../actions/actions'
import Axios from 'axios'

function CommentForm(props){
    const [comment, setComment] = useState('')
    const [warning, setWarning] = useState('')

    const api = Axios.create({
        baseURL: '/comments'
    })
    const handleAdd = async () => {
        if(!props.status){
            setWarning('Login to post a comment')
        }else{
            if(comment === ''){
                setWarning('You cannot leave a blank comment')
            }
            else{
                await api.post('/add', {postId: props.post.id, userId: props.user.userId, author: props.user.username, content: comment})
                props.getComments(props.post.id)
                setWarning('')
            }
        }
        
    }

    return(
        <div className='comment-form'>
            <div className='comment-form-input'><textarea placeholder='What do you think?' onChange={e => setComment(e.target.value)}/></div>
            <div><h5 className='warning'>{warning}</h5></div>
            <div className='form-btn' onClick={handleAdd}>Comment</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.login,
        user: state.user,
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getComments: id => dispatch(fetchComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)