import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import './simple.css'

const FormWithCustomHook = () => {

    const [formValues, handleChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name , email, password} = formValues;

    useEffect(() => {
        console.log('Email cambio');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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

            <div className='form-group'>
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='****'
                    value={password}
                    onChange={handleChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>Save</button>

        </form>
    )
}

export default FormWithCustomHook
