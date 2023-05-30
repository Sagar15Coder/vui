import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "okay") {
                    window.localStorage.setItem("token", data.data);
                    window.localStorage.setItem("logged_in", true);
                    window.location.href = "./userDetails";
                }
            });
    }

  return (
    <>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="login-box">
                        <h3 className="text-center mb-3">Login</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" placeholder="Email ID" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="Password" className="form-control mt-3" onChange={(e) => setPassword(e.target.value)} />
                            <Link className="forgot-pw" to="">Forgot Password?</Link>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button" type="submit">Login</button>
                                <Link to="/register" className="button">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Login