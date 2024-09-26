'use client'

import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTitle } from "@/hooks/useTitle";

function Login(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const nameFieldRef = useRef<HTMLInputElement>(null);
    useTitle("Login")

    
    useEffect(() => {
        nameFieldRef.current?.focus();
        
    }, [])


    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        setName(evt.target.value)
    }

    async function handleSignin(){


        console.log("name: ",  nameFieldRef.current?.value)
        if(name && password){
            setMessage("");
            const url = "http://localhost:9000/login"
            // axios
            //     .post(url, {name, password})
            //     .then((response) => {
            //         console.log("response", response)
            //     }, (error) => {
            //         console.log("error", error)
            //     })

            try {
                
                const response = await axios.post(url, {name, password});
                console.log("response", response);
                console.log("AccessToken: ", response.data.accessToken)
                console.log("RefreshToken: ", response.data.refreshToken);
                router.push("/about");
            } catch (error) {

                console.log("error", error);
                setMessage("Invalid Credentials");
                
            }

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
                <input ref={nameFieldRef} id="name" className="form-control" value={name} onChange={handleNameChange}/>
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