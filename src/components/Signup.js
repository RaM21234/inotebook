import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import signup from "../images/signup.png";
import user from "../images/user.jfif";
import {
    Link
} from "react-router-dom";



const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault(); //using this the page will not reload

        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        } else {
            alert("invalid credentials");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div class="container text-start my-5">
                <div class="row">

                    <div class="col">


                        <div className="container border border-dark rounded">

                            <div className="text-center my-4 mx-5" style={{
                                width: '256px',
                                height: '256px',
                                backgroundImage: `url(${user})`,

                            }}>

                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 my-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" onChange={onChange} id="name" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 my-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={onChange} id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3 my-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" minlength={5} required onChange={onChange} id="password" />
                                </div>
                                <div className="mb-3 my-3">
                                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" name="cpassword" minlength={5} required onChange={onChange} id="cpassword" />
                                </div>

                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                                <p>Already have an Account? <Link to='/login' >Login</Link></p>
                            </form>

                        </div>


                    </div>
                    <div class="col">
                        <div className=" my-4" style={{
                            width: '620px',
                            height: '600px',
                            backgroundImage: `url(${signup})`,
                        }}></div>
                    </div>
                </div>
            </div>



        </>




    )
}

export default Signup
