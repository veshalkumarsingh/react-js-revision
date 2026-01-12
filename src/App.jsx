import React from 'react'

const App = () => {
    const designation = "Sofware Developer";
    const person = {
        name: "Veshal Kumar Singh",
        age: 20
    };

    return (
        <>
            <div>4+9</div>
            <div>Sum = {4 + 9}</div>
            <div>{person.name}</div>
            <div>{person.age}</div>
        </>
    )

}

export default App  