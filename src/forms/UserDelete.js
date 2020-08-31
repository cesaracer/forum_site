import React, { useState } from 'react'
import Axios from 'axios'

function UserEdit(props){

    const api = Axios.create({
        baseURL: '/users'
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