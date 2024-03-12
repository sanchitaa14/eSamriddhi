import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backend/firebase";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // to not lose state of email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log("LoggedIn");
                window.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="mt-20">
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Registered email address..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></input>

                {/* Password */}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>

                {/* Submit */}
                <button type="submit">Log In</button>

                {/*Signup*/}
                <a href="/signup">Don't have an account?</a>
            </form>
        </div>
    );
}

export default Login;