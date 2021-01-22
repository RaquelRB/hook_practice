import React, {useState, useEffect} from 'react'
import './effects.css'

import {Message} from './Message'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;


    const handleInputChange = ({target}) =>{
        setformState({
            ...formState,
            [target.name]: target.value
        })};

    return (
        <div>
            <h1>useEffect</h1>
            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />

            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />

            </div>
            

        </div>
    )
}
