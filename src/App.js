import React, { useEffect } from 'react';
import PostList from './Containers/PostList'
import {connect} from 'react-redux'
import Sidebar from './Components/SideBar'
import Modal from './Components/Modal';
import PostForm from './forms/PostForm';
import Header from './Components/Header'
import { setPosts, fetchPosts } from './actions/actions';

function App(props) {
  useEffect(() => {
    props.fetch()
  },[])

  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      {
        props.show ? 
        <Modal/>
        :
        <div></div>
      }
      <PostForm/>
      <PostList/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    show: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetch: () => dispatch(fetchPosts()),
    setPosts: posts => dispatch(setPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
