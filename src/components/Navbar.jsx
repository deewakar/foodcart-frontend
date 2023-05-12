import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }
  
  const loadCart = () => {

  }
  
  const currentPath = useLocation().pathname;
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white position-sticky"
        style={{ boxShadow: "4px 5px 5px gold", filter: 'blur(20)', position: "fixed", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 text-warning" to="/">FoodCart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentPath !== '/' ?
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                </li>
                : ""}
              {(localStorage.getItem("token")) ?
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                </li> : ""}
            </ul>
            {(!localStorage.getItem("token")) ?
              <form className="d-flex">
                <Link className="btn btn-outline-warning  text-white mx-1 " to="/login">Login</Link>
                <Link className="btn btn-outline-warning text-white mx-1 " to="/signup">Signup</Link>
              </form> :
              <div>
                <Link className="btn btn-outline-warning" to="/cart"> My Cart <span className="badge bg-success">4</span></Link>
                 <button onClick={handleLogout} className="btn btn-outline-warning text-white mx-1" >Logout</button> </div>
            }
            {/*
                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                  <Badge color="secondary" badgeContent={items.length} >
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>

                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              */}

          </div>
        </div>
      </nav>
    </div>);
}
