import React, { useState } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import { login, setUser } from '../actions/actions'

function Login(props){
    const [checked, setChecked] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const api = Axios.create({
        baseURL: '/users'
    })

    const loginUser = async () => {
        console.log('sent')
        let res = await api.post('/login', {email: email, password: password})
        console.log('received')
        let me = JSON.parse(res.request.response)
        console.log(me.username)
        props.login()
        props.setUser(me)
        
    }

    const signUp = async () => {
        let res = await api.post('/signup', {username: username, email: email, password: password})
        console.log(res.request.response)
    }
    
    return(
        <div className='login'>
            <div className='login-body'>
                {
                    checked ? 
                    <div><input type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)}/></div>
                    :
                    <div></div>
                }
                <div><input tabIndex='0' type='email' placeholder='Email' name='email' onChange={e => setEmail(e.target.value)}/></div>
                <div><input tabIndex='0' type='password' placeholder='Password' name='password' onChange={e => setPassword(e.target.value)}/></div>
                
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