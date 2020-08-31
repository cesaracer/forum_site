import React, { useState } from 'react'
import {connect} from 'react-redux'
import { deactivate, fetchComments } from '../actions/actions'
import Comment from './Comment'
import CommentForm from '../forms/CommentForm'
import PostEdit from '../forms/PostEdit'

function Modal(props){
    const [isEdit, setEdit] = useState(false)
    return(
        <div className='modal'>
            <div className='modal-header'>
                <div className='modal-header-title'>
                    <h1>{props.post.title}</h1>
                </div>
                {
                    props.post.userId === props.user.userId ?
                    <button className='btn-edit' onClick={() => setEdit(!isEdit)}>
                        {
                            isEdit ?
                            <h1>Close</h1>
                            :
                            <h1>Manage</h1>
                        }
                    </button>
                    :
                    <div></div>
                }
                <div onClick={() => props.close()} className='exit'>X</div>
            </div>
            <div className='modal-content'>
                {
                    isEdit ?
                    <PostEdit/>
                    :
                    <div className='modal-body'><p>{props.post.content}</p></div>
                }
                <CommentForm/>
                <div className='modal-comments'>
                    {
                        props.comments.map(c => <Comment {...c}/>)
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        close: () => dispatch(deactivate()),
        loadComments: id => dispatch(fetchComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)