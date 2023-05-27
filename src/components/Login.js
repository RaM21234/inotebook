import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom";
import login from "../images/login.jpg"
import user from "../images/user.jfif"
import {
    Link
} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //using this the page will not reload

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json()
        console.log(json);

        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        navigate("/");

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="container text-start my-5">
                <div class="row">

                    <div class="col border border-dark rounded my-5">
                        <div className="text-center my-4 mx-5" style={{
                            width: '256px',
                            height: '256px',
                            backgroundImage: `url(${user})`,

                        }}>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 my-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3 my-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password" />
                            </div>

                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                            <p>Don't have an Account? <Link to='/signup' >Signup</Link></p>
                        </form>
                    </div>
                    <div class="col">
                        <div className=" my-4" style={{
                            width: '800px',
                            height: '600px',
                            backgroundImage: `url(${login})`,

                        }}>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login
