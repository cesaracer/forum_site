import React, { useEffect } from 'react';
import Post from '../Components/Post';
import { connect } from 'react-redux';
import {setPosts} from '../actions/actions'

function PostList(props){

    useEffect(() => {
        fetch('/posts/all')
        .then(res => res.json())
        .then(data => props.setPosts(data))
    })

    return(
        <div className='post-container'>
            {
                props.posts.map(p => <Post key={p._id} {...p} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setPosts: (posts) => dispatch(setPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)