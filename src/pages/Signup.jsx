import React from 'react'

import {Link} from 'react-router-dom';
export default function Signup() {

    return (
        <div style={{ backgroundImage: 'url("./signup_bg.jpeg")', backgroundSize: 'cover', height: '100vh' }}>

            <div className='container row h-100' >
                <form className='w-50 col-sm-12 my-auto mx-auto border border-5 border-secondary bg-light rounded p-5' >
                    <h2>User Registration</h2>
                    <div className="m-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <fieldset>
                            <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' aria-describedby="emailHelp" />
                        </fieldset>
                    </div>
                    <div className="m-3">
                        <button type="button" name="geolocation" className=" btn btn-warning">Click for current Location </button>
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </div>
        )

}
