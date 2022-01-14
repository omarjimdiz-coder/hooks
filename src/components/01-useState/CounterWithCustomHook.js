import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <div>
            <h1>Counter With Hook: { state }</h1>
            <hr />

            <button onClick={increment} className='btn btn-primary'> + 1</button>
            <button onClick={reset} className='btn btn-secondary m-2'>Reset</button>
            <button onClick={decrement} className='btn btn-success'> - 1</button>
        </div>
    )
}

export default CounterWithCustomHook
