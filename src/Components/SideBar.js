import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions/actions'
import Login from '../forms/Login'
import Axios from 'axios'

function SideBar(props){
    const [toggle, setToggle] = useState(false)
    const [displayVal, setDisplayVal] = useState('none')

    const delAcc = async () => {
        await Axios.delete(`https://us-central1-forum-app-33ac9.cloudfunctions.net/api/users/delete/${props.user.userId}`)
        alert('Your account has been deleted')
        props.logout()
    }

    const setDisplay = () => {
        setToggle(!toggle)
        if(toggle){
            setDisplayVal('300px')
        }
        else{
            setDisplayVal('0px')
        }
    }
    
    return(
        <div className='sidebar'>
            <div className='sidebar-horizontal' >
                <img src='./images/profile.svg' onClick={setDisplay} alt='profile icon'/>
            </div>
            <div className='sidebar-content' style={{height: displayVal}}>
                {
                    props.status ?
                    <div className='profile'>
                        <div className='profile-username'>{props.user.username}</div>
                        <button className='btn' onClick={props.logout}>Logout</button>
                        <button className='btn-del' onClick={delAcc}>Delete Account</button>
                    </div>
                    :
                    <Login/>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.login,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)