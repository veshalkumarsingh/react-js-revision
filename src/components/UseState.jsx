import React, { useState } from 'react'

const UseState = () => {
    // let counter = 10;
    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(next=>next+1);
    }
    const dec = () => {
        
       setCounter(prev=>prev-1);
        console.log("=>" + counter)
    }
    return (
        <>
            <h1>use state hook</h1>
            <h1>{counter}</h1>
            <button onClick={inc}>
                Increase
            </button>
            <button on onClick={dec}>
                decrease
            </button>

        </>
    )
}

export default UseState