'use client'

import { ChangeEvent, useState } from "react";

function Login(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        setName(evt.target.value)
    }

    function handleSignin(){

        if(name && password){
            setMessage("");
            
        }
        else{
            setMessage("Enter the credentials");
        }

    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning">{message}</div>: null}


            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" className="form-control" value={name} onChange={handleNameChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input id="pwd" type="password" className="form-control" 
                                value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <br/>

            <div>
                <button className="btn btn-success" onClick={handleSignin}>SignIn</button>
            </div>



        </div>
    )
}

export default Login;