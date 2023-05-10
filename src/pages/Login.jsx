
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div style={{ backgroundImage: 'url("./login_bg.jpeg")', backgroundSize: 'cover', height: '100vh' }}>

            <div className='container row h-100' >
                <form className='w-50 col-sm-12 my-auto mx-auto border border-5 border-secondary bg-light rounded p-5' >
                    <h2>User Login</h2>
                    <div className="m-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )

}