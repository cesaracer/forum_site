import React from 'react';

function Post(props){
    return(
        <div className='post-preview'>
            <div className='post-preview-title'>{props.title}</div>
            <div className='post-preview-author'>{props.content}</div>
        </div>
    )
}

export default Post;