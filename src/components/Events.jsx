import React from 'react'
// Events & Event Handling
export const Events = () => {
    const newAlert = () => {
        alert("YES YES YES")

    }
    let count = 0;
     console.log('count value after'+count);
    let counter = (value) => {
        count = value;
        alert("ALERT:"+value);
        console.log('count value after'+count);
    }
    const bg_black = () => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "read";
    }
    const bg_pink = () => {
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "white";
    }
    return (
        <>
            <h1>Events</h1>
            <h3>Counter = {count}</h3>
            <button onClick={newAlert} on>Click Me</button>
            <div>
                <button onClick={bg_pink}>Click YES</button>
                <button onClick={bg_black}>Click NO</button>
                  <button onClick={()=>counter(20)}>Count me</button>
            </div>
        </>
    )
}
export default Events
