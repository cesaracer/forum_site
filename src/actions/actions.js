import {SET_POSTS, SET_USER, LOGIN, LOGOUT, SET_POST, SET_ACTIVE, DEACTIVATE, SET_COMMENTS, SET_COMMENT} from './actionTypes'
import Axios from 'axios'

export const setPosts = (posts) => {
    return{
        type: SET_POSTS,
        posts
    }
}

export const setUser = (user) => {
    return{
        type: SET_USER,
        user
    }
}

export const login = () => {
    return{
        type: LOGIN
    }
}

export const logout = () => {
    return{
        type: LOGOUT
    }
}

export const setPost = (post) => {
    return{
        type: SET_POST,
        post
    }
}

export const activate = () => {
    return{
        type: SET_ACTIVE
    }
}

export const deactivate = () => {
    return{
        type: DEACTIVATE
    }
}

export const setComments = comments => {
    return{
        type: SET_COMMENTS,
        comments
    }
}

export const setComment = comment => {
    return{
        type: SET_COMMENT,
        comment
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        Axios.get('https://us-central1-forum-app-33ac9.cloudfunctions.net/api/posts/all')
        .then(res => {
            dispatch(setPosts(res.data))
        })
    }
}

export const fetchComments = (id) => {
    return(dispatch) => {
        Axios.get(`https://us-central1-forum-app-33ac9.cloudfunctions.net/api/comments/all/${id}`)
        .then(res => {
            dispatch(setComments(res.data))
        })
    }
}