import React, { useState } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import { login, setUser } from '../actions/actions'

//renders the login/signup form
function Login(props){
    const [checked, setChecked] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const api = Axios.create({
        baseURL: ' https://us-central1-forum-app-33ac9.cloudfunctions.net/api/users'
    })

    const loginUser = () => {
        api.post('/login', {email: email, password: password})
        .then(res => {
            let me = JSON.parse(res.request.response)
            //updating state to logged in and setting user state
            props.login()
            props.setUser(me)
        })
    }

    const signUp = async () => {
        setLoading(true)
        let res = await api.post('/signup', {username: username, email: email, password: password})
        setLoading(false)
        if(res.request.response){
            alert('Sign up successful')
            setChecked(!checked)
            setUsername('')
        }
    }
    
    return(
        <div className='login'>
            {
                isLoading ?
                <div className='login-body'>
                    <p>Loading...</p>
                </div>
                :
                <div className='login-body'>
                    {
                        //renders username field if user is signing up
                        checked ? 
                        <div><input type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} value={username}/></div>
                        :
                        <div></div>
                    }
                    <div><input tabIndex='0' type='email' placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} value={email}/></div>
                    <div><input tabIndex='0' type='password' placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} value={password}/></div>
                    {
                        checked ?
                        <div>
                            <h5 onClick={e => setChecked(!checked)}>Already have an account</h5>
                            <button tabIndex='0' className='btn' onClick={signUp}>Sign Up</button>
                            
                        </div>
                        :
                        <div>
                            <h5 onClick={e => setChecked(!checked)}>Create an account</h5>
                            <button tabIndex='0' className='btn' onClick={loginUser}>Login</button>
                        </div>
                    }
                </div>
            }
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: () => dispatch(login()),
        setUser: u => dispatch(setUser(u))
    }
}

export default connect(null, mapDispatchToProps)(Login)