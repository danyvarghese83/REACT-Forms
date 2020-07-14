import React from 'react'

const Display = props =>{
    const{userName,email,password, cpass} = props.data;
    return(
        <div>
        <h1>Information</h1>
        <p>User Name:{userName}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirm Password:{cpass}</p>
        </div>
    )
}
export default Display;