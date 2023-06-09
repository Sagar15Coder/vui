import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = ({cartProducts}) => {  
  return (
    <>  
      <div className="header-top-strip py-3">
       <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0" >
                Free Shipping over $75 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: 
                <a className="text-white" href="tel: +44 7585754410">+44 7585754410</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-top py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">NextGen</Link>
              </h2>
            </div>
            <div className="col-7">
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control py-2" 
                placeholder="Search product" 
                aria-label="Search product" 
                aria-describedby="basic-addon2"/>
              <button className="input-group-text p-3">
                <span id="basic-addon2">
                  <BsSearch className="fs-6" />                
                </span>
              </button>
              
            </div>
            </div>
            <div className="col-3">
              <div className="header-top-links d-flex align-items-center justify-content-end">
                <div className='mt-4'>
                  <Link to="/login">
                    <img src="images/login-icon.png" alt="login" />
                    <span>
                      <p className="mb-0 text-white">
                      Log In
                      </p>
                    </span>
                  </Link>
                </div>
              
                &nbsp; &nbsp;
                <div>
                  <Link
                    to="/cart" 
                    className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.png" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartProducts.length === 0 ? "" : cartProducts.length}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-32">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="menu" />
                      <span>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <Link className="dropdown-item text-white" to="#">Action</Link>
                      <Link className="dropdown-item text-white" to="#">Another action</Link>
                      <Link className="dropdown-item text-white" to="#">Something else here</Link>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/vui">Home</NavLink>
                    <NavLink to="/vui/product">Our Store</NavLink>
                    <NavLink to="/vui/blogs">Blogs</NavLink>
                    <NavLink to="/vui/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
