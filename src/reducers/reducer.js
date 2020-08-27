import {ADD_POST, DEL_POST, SET_USER, SET_POSTS} from '../actions/actionTypes'
import {combineReducers} from 'redux'

function postReducer(state = [], action){
    switch(action.type){
        case SET_POSTS:
            return state = action.posts
        case ADD_POST:
            return [
                ...state,
                action.post
            ]
        case DEL_POST:
            const index = state.indexOf(action.postId)
            return[
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state
    }
}

function userReducer(state = {}, action){
    switch(action.type){
        case SET_USER:
            return state = action.user;
        default:
            return state;
    }
}


const reducer = combineReducers({
    user: userReducer,
    posts: postReducer
})

export default reducer