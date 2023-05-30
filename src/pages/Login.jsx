import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        if (json.success) {
            //save the auth token to local storage and redirect
            localStorage.setItem('userEmail', credentials.email)
            localStorage.setItem('token', json.authToken)
            navigate("/");

        }
        else {
            alert("Enter Valid Credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div style={{ backgroundImage: 'url("./login_bg.jpeg")', backgroundSize: 'cover', height: '100vh' }}>

            <div className='container row h-100' >
                <form className='w-50 col-sm-12 my-auto mx-auto border border-5 border-secondary bg-light rounded p-5' 
        onSubmit={handleSubmit}
                >
                    <h2>User Login</h2>
                    <div className="m-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' aria-describedby="emailHelp" 
                            value={credentials.email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' 
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )

}
