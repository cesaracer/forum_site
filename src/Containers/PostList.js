import React from 'react';
import Post from '../Components/Post';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(PostList)