import React, { useState } from 'react';
import {connect} from 'react-redux'
import CommentEdit from '../forms/CommentEdit'
import { fetchComments, setComment } from '../actions/actions'

function Comment(props){
    const [isVisible, setVisible] = useState(false)
    const toggleEdit = () => {
        setVisible(!isVisible)
        props.setComment({id: props._id, comment: props.content})
    }

    return(
        <div className='comment'>
            <div className='comment-header'>
                <div className='comment-header-author'>
                    <p>{props.author}</p>
                </div>
                {
                    props.userId === props.user.userId ?
                    <div className='comment-options'>
                        <button className='option' onClick={toggleEdit}>
                        {
                            isVisible ?
                            <h6>Close</h6>
                            :
                            <h6>Manage</h6>
                        }
                        </button>
                    </div>
                    :
                    <div></div>
                }
            </div>
            <div className='comment-body'>
                <p>{props.content}</p>
            </div>
            {
                isVisible ?
                <CommentEdit/>
                :
                <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadComments: id => dispatch(fetchComments(id)),
        setComment: com => dispatch(setComment(com))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)