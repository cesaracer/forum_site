import {SET_POSTS, ADD_POST, DEL_POST, SET_USER} from './actionTypes'

export const setPosts = (posts) => {
    return{
        type: SET_POSTS,
        posts
    }
}

export const addPost = (post) => {
    return{
        type: ADD_POST,
        post
    }
}

export const delPost = (postId) => {
    return{
        type: DEL_POST,
        postId
    }
}

export const setUser = (user) => {
    return{
        type: SET_USER,
        user
    }
}
