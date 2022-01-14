import React, { useEffect, useState } from 'react'
import './simple.css'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name , email} = formState;

    useEffect(() => {
        console.log("hey");
    }, []);

    useEffect(() => {
        console.log("formState cambió");
    }, [formState]);

    useEffect(() => {
        console.log("campo email cambió");
    }, [email]);

    const handleChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div className='form-group'>
                <input 
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default SimpleForm
