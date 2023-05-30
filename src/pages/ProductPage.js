import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import watch from "../images/blog-1.jpg";
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
    const [ prodOrdered, setProdOrdered ] = useState(true);
    
    return (
        <>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="prod-image">
                                <div>
                                    <img 
                                        src={watch}
                                        alt="product" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="prod-details">
                                <div className="border-bottom">
                                    <h3 className="prod-title">
                                        Smart Watch Black and Gold Colored
                                    </h3>
                                </div>
                                <div className="border-bottom">
                                    <p className="prod-price">£78</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">( 5 Reviews )</p>
                                        <Link to="#">
                                            Post a Review
                                        </Link>
                                    </div>
                                    <div className="border-bottom py-3">
                                        <div className="d-flex align-items-center gap-10 my-2">
                                            <h3 className="prod-heading">Type:</h3>
                                            <p className="prod-data">Akj</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-10 my-2">
                                            <h3 className="prod-heading">Brand:</h3>
                                            <p className="prod-data">SSm</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-10 my-2">
                                            <h3 className="prod-heading">Category:</h3>
                                            <p className="prod-data">Mtkp</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-10 my-2">
                                            <h3 className="prod-heading">Tags:</h3>
                                            <p className="prod-data">PPjdf</p>
                                        </div>
                                        <div className="d-flex gap-10 flex-column my-3">
                                            <h3 className="prod-heading">Shipping & Returns</h3>
                                            <p className="prod-data">
                                                Free Shipping on orders over £25.
                                                Free Returns
                                                <br/>
                                                <b>Delivery withing 3-4 business days</b>
                                            </p>
                                        </div>
                                        <div className="my-5">
                                            <Link className="button">Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prod-desc-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                
                                <p>This is the text for product description. This product
                                    uses the latest technology. Buy this product
                                    at an attractive price. Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Morbi ullamcorper commodo magna ac convallis. 
                                    Ut ut sapien at lacus laoreet elementum. Aliquam pulvinar maximus augue,
                                    sit amet placerat ligula. Sed laoreet iaculis sapien non hendrerit. 
                                    Nam ornare pulvinar finibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prod-reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Reviews</h4>
                            <div className="prod-reviews-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 5 reviews</p>
                                    </div>
                                </div>
                                {prodOrdered && (
                                    <div>
                                        <Link className="text-dark text-decoration-underline" to="#">Post a Review</Link>
                                    </div>
                                )}
                            </div>
                            <div className="prod-review-form py-4">
                                <h4>Post Your Review</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                    <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={true}
                                            activeColor="#ffd700"
                                    />
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            cols="35"
                                            rows="4"
                                            placeholder="Comments">

                                        </textarea>
                                    </div>
                                    <div>
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-3">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">John</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Duis vel ullamcorper libero. Duis quis nisl semper, ullamcorper 
                                        elit eu, sollicitudin metus. Pellentesque hendrerit neque vehicula enim aliquam, 
                                        ac iaculis augue blandit.
                                    </p>
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

export default ProductPage