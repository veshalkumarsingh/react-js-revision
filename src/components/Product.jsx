import React from 'react'
// Props
const Product = ({ name, price, color, Person = {} }) => {
    return (

        <div>
            <h1>Brand - {name}</h1>
            <h2>Price - {price}</h2>
            <h3>Price - {color}</h3>
            {Person.name && (
                <>
                <p>Name = {Person.name}</p>
                <p>Age = {Person.age}</p>
            </>
            )}
        </div>

    )
}

export default Product