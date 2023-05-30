import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import BlogCardHome from '../components/BlogCardHome';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                  src="images/main-banner-1.webp"
                  className="img-fluid rounded-3" 
                  alt="main banner" 
                  />
                  <div className="main-banner-content position-absolute">
                    <Link className="button">Buy Now</Link>
                  </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Top Sale</h4>
                      <h5>iPhone S13+ Pro</h5>
                      <p>From $990 or $40 per month</p>
                    </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>New Arrival</h4>
                      <h5>iPhone S13+ Pro</h5>
                      <p>From $990 or $40 per month</p>
                    </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>New Arrival</h4>
                      <h5>iPhone S13+ Pro</h5>
                      <p>From $990 or $40 per month</p>
                    </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3" 
                    alt="small banner" 
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>New Arrival</h4>
                      <h5>iPhone S13+ Pro</h5>
                      <p>From $990 or $40 per month</p>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-01.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>For all orders over $50</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Save upto 30% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>24/7 Customer Support</h6>
                    <p>Talk with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Safe and Secure Payment</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>TV</h6>
                    <p>24 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>TV</h6>
                    <p>24 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fc-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="product-section-heading">Featured Collection</h3>
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="pop-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="product-section-heading">Our Popular Products</h3>
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="col-4">
              <SpecialProduct />
            </div>
            <div className="col-4">
              <SpecialProduct />
            </div>
            <div className="col-4">
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-apple.png" alt="apple" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-samsung.png" alt="samsung" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-intel.png" alt="intel" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-lg.png" alt="lg" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-canon.png" alt="canon" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-sandisk.png" alt="sandisk" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-dell.png" alt="dell" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-bose.png" alt="bose" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-section-heading">Our Latest Blogs</h3>
            </div>
          <div className="row"> 
              <BlogCardHome />         
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home