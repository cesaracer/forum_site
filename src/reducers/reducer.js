import {SET_COMMENTS, SET_USER, SET_POSTS, LOGIN, LOGOUT, SET_POST, SET_ACTIVE, DEACTIVATE, SET_COMMENT} from '../actions/actionTypes'
import {combineReducers} from 'redux'

const postState = {
    id: '',
    title: '',
    author: '',
    content: '',
    userId: ''
}

const userState = {
    userId: '',
    username: ''
}

const commentState = {
    id: '',
    comment: ''
}
function postsReducer(state = [], action){
    switch(action.type){
        case SET_POSTS:
            return state = action.posts
        default:
            return state
    }
}

function userReducer(state = userState, action){
    switch(action.type){
        case SET_USER:
            return state = action.user;
        case LOGOUT:
            return state = {}
        default:
            return state;
    }
}

function loginReducer(state = false, action){
    switch(action.type){
        case LOGIN:
            return state = true
        case LOGOUT:
            return state = false
        default:
            return state
    }
}

function postReducer(state = postState, action){
    switch(action.type){
        case SET_POST:
            return state = action.post
        default:
            return state
    }
}

function modalReducer(state = false, action){
    switch(action.type){
        case SET_ACTIVE:
            return state = true
        case DEACTIVATE:
            return state = false
        default:
            return state
    }
}

function commentsReducer(state = [], action){
    switch(action.type){
        case SET_COMMENTS:
            return state = action.comments
        default:
            return state
    }
}

function commentReducer(state = commentState, action){
    switch(action.type){
        case SET_COMMENT:
            return state = action.comment
        case LOGOUT:
            return state = {}
        default:
            return state
    }
}

const reducer = combineReducers({
    login: loginReducer,
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    post: postReducer,
    modal: modalReducer,
    comment: commentReducer
})

export default reducer