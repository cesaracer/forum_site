import React, { useEffect } from 'react';
import Post from '../Components/Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions';

function PostList(props){
    return(
        <div className='post-container'>
            {
                props.posts.map(p => <Post {...p}/>)
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
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps)(PostList)