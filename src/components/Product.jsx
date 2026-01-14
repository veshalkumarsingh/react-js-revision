import React from 'react'

// importing external css
import './Product.css'


// Props
const Product = ({ name, price, color, Person = {} }) => {

    // Internal CSS-Object
    const mystyle = {
        backgroundColor: 'white',
        color: 'red',
        padding: '10px',
        margin: '10px',
        border: '1px solid yellow'
    }
    return (
        // Inline Styling - CSS
        <div
            // style={{ backgroundColor: 'red', padding: '10px', margin: '10px', border: '1px solid yellow', borderRadius: '10px' }}
            // style={mystyle}
            // <!--------- External CSS -------------------->
            // className='container'
            className='con-ext'
        >
            <h1>Brand - {name}</h1>
            <h2>Price - {price}</h2>
            <h3>Price - {color}</h3>
            {/* {Person.name && (
                <>
                <p>Name = {Person.name}</p>
                <p>Age = {Person.age}</p>
            </>
            )} */}
        </div>

    )
}

export default Product