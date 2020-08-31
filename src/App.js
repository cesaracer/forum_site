import React from 'react';
import PostList from './Containers/PostList'
import {connect} from 'react-redux'
import Sidebar from './Components/SideBar'
import Modal from './Components/Modal';
import PostForm from './forms/PostForm';
import Header from './Components/Header'

function App(props) {
  return (
    <div className="App">
      <Header/>
      {
        props.show ? 
        <Modal/>
        :
        <div></div>
      }
      <Sidebar/>
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

export default connect(mapStateToProps)(App);
