import React, { useEffect } from 'react';
import Post from '../Components/Post';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/actions'

function PostList(props){

    useEffect(() => {
        props.loadPosts()
    },[])

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
        loadPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)