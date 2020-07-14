import React from 'react';

const UserForm = props=> {
    
    const {input, setInputs} = props;


    
    
    const onChange = (e) =>{
        setInputs({
            ...input, [e.target.name]: e.target.value}); 
        console.log("logging inputs below")
        console.log(input)       
        
    }
    // const handleTitle = (e) => {
    //     setInputs({
    //         ...inputs, [e.target.name]: e.target.value});  
    //     if(e.target.value.length < 1) {
    //         setUserError("Title is required!");
    //     } else if(e.target.value.length < 3) {
    //         setUserError("Title must be 3 characters or longer!");
    //     }
    // }
    
    
    
    return(
        <form action="/action_page.php" >
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ onChange }  name="userName" value = {input.userName} />
                {input.userName.length < 2 ? <p>"Username must be at least 2 char"</p> : <p></p>}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ onChange }  name="email" value = {input.email}/>
                {input.email.length < 2 ? <p>"email must be at least 2 char"</p> : <p></p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ onChange } name="password" value = {input.password}/>
                {input.password.length < 2 ? <p>"Password must be at least 2 char"</p> : <p></p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ onChange } name="confirmPassword" />
                {input.cpass !== input.cpass ? <p>"Password must be same"</p> : <p></p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;