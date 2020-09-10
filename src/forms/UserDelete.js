import React from 'react'
import Axios from 'axios'

function UserEdit(props){

    const api = Axios.create({
        baseURL: 'https://us-central1-forum-app-33ac9.cloudfunctions.net/api/users'
    })

    const deleteUser = () => {
        api.delete(`/delete/${props._id}`)
    }

    return(
        <div>
            <div className='btn' onClick={deleteUser}>Delete Account</div>
        </div>
    )
}

export default UserEdit