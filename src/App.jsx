import React from 'react'
import Product from './components/Product';
import Event from './components/Events';
import Items from './components/Items';
import UseState from './components/UseState';


// Main Parent File
const App = () => {
    const designation = "Sofware Developer";
    const person = {
        name: "Veshal Kumar Singh",
        age: 20
    };

    return (
        <>
        <UseState/>
       
        {/* <Event/> */} 
            {/* <Product
                name="IPhone 20"
                price={1500}
                color="Red"
            />
             <Product
                name="IPhone 19"
                price={1300}
                color="Red"
                Person = {person}

            />
            <Items/> */}
            {/* <div>4+9</div>
            <div>Sum = {4 + 9}</div>
            <div>{person.name}</div>
            <div>{person.age}</div> */}
        </>
    )

}

export default App  