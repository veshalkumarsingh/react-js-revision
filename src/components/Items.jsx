import React from 'react'

// Conditional Rendering - ternary operator - && Operator
const Items = () => {
    const age = 20;
    const gmail = false;
    const aadhar = true;
    return (
        <>

            <div>
                {
                    age > 18 ? (
                        <>
                            <p>You are ready to go</p>
                        </>
                    ) : (
                        <>
                            <p>You are not ready to go</p>
                        </>
                    )
                }
            </div>
            <div>
                {aadhar && <h1>You can open a bank acccount</h1>}
                {gmail && <h1>You can open a YTT acccount</h1>}
            </div>
        </>
    )
}

export default Items