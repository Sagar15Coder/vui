import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { BiArrowBack } from 'react-icons/bi'

const Checkout = () => {
  return (
    <>
        <div className="checkout-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-part">
                            <h3 className="site-name">NextGen</h3>
                            <nav>

                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="cust-details">
                                Smith Jackson (smth45@gmail.com)
                            </p>
                            <form
                                action=""
                                className="d-flex flex-wrap gap-15 justify-content-between">
                                <div className="w-100">
                                    <select 
                                        className="form-control form-select"
                                        name=""
                                        id="">
                                            <option value="" selected disabled>Select Country</option>
                                    </select>
                                    
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="First Name" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Last Name" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Address" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="House, Apartment No." className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="City" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Post Code/ Zip Code" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack />
                                            Return to Your Cart
                                        </Link>
                                        <Link to="/product" className="button">
                                            Proceed to Payment
                                        </Link>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout