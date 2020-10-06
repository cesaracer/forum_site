import React , {useState} from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import {fetchComments} from '../actions/actions'

//renders form to allow users to edit their comments
function CommentEdit(props){
    const [comment, setComment] = useState('')

    const api = Axios.create({
        baseURL: 'https://us-central1-forum-app-33ac9.cloudfunctions.net/api/comments'
    })

    //sends new data to api to update comment
    const updateComment = async () => {
        await api.patch(`/edit/${props.comment.id}`, {content: comment})
        setComment('')
        props.loadComments(props.post.id)
    }

    //sends delete request to api to remove comment permenantly
    const deleteComment = async () => {
        await api.delete(`/delete/${props.comment.id}`)
        props.loadComments(props.post.id)
    }

    return(
        <div className='comment-edit-form'>
            <div><textarea name='content' onChange={e => setComment(e.target.value)} placeholder='Edit your comment...'/></div>
            <div className='btn-edit' onClick={updateComment}>Edit</div>
            <div className='btn-del' onClick={deleteComment}>Delete</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        comment: state.comment,
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadComments: id => dispatch(fetchComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)