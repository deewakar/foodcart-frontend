import {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", phone:"", password: "", geolocation: "" })
  let navigate = useNavigate()

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://foodcart-backend-production.up.railway.app/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone, password: credentials.password, location: credentials.geolocation })

    });
    const json = await response.json()
    if (json.success) {
      //save the auth token to local storage and redirect
      localStorage.setItem('token', json.authToken)
      navigate("/login")

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("./signup_bg.jpeg")', backgroundSize: 'cover', height: '100vh' }}>

      <div className='container row h-100' >
        <form className='w-50 col-sm-12 my-auto mx-auto border border-5 border-secondary bg-light rounded p-5'
          onSubmit={handleSubmit}>
          <h2>User Registration</h2>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' aria-describedby="emailHelp"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
      <div className="m-3">
      <label htmlFor="phone" className="form-label">Mobile Phone</label>
      <input type="text" className="form-control" name='phone' aria-describedby="emailHelp"
      value={credentials.phone}
      onChange={onChange}
      />
      </div>

      <div className="m-3">
      <label htmlFor="geolocation" className="form-label">Address</label>
      <fieldset>
      <input type="text" className="form-control" name='geolocation' aria-describedby="emailHelp"
      value={credentials.geolocation}
      onChange={onChange}
      />
      </fieldset>
      </div>
      <div className="m-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' 
      value={credentials.password}
      onChange={onChange}
      />
      </div>
      <button type="submit" className="m-3 btn btn-success">Submit</button>
      <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
      </form>
      </div>
      </div>
  )

}
