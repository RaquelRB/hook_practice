import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    const newUser = 
    {id: 223,
    name: 'Fernando'}

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary" onClick={()=> setUser(newUser)}>
                Login
            </button>
        </div>
    )
}
