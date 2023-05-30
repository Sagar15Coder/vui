import React, { useEffect, useState } from 'react'

const UserDetails = () => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                console.log(userData);
                setUserData(data.data);
                console.log("bf");
                console.log(userData);
                console.log("fd");
            });
    }, []);

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./login";
    }
  return (
    <>
        <h3>Hi {userData.fname}</h3>
        <p>{userData.email}</p>
        <br/>
        <br />
        <button className="btn btn-danger" onClick={() => logOut()}>Log Out</button>
    </>
  )
}

export default UserDetails