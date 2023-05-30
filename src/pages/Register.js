import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }

  return (
    <>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="login-box">
                        <h3 className="text-center mb-3">Create an Account</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="fname" placeholder="First Name" className="form-control" onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" name="lname" placeholder="Last Name" className="form-control mt-3" onChange={(e) => setLastName(e.target.value)} />
                            <input type="email" name="email" placeholder="Email ID" className="form-control mt-3" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="Password" className="form-control mt-3" onChange={(e) => setPassword(e.target.value)} />
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                            <button className="button">Create Account</button>                                               
                            </div>
                            <div className="mt-3 d-flex justify-content-end">
                                <p>Already registered?</p>&nbsp;
                                <Link to="/login">Sign In</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Register