import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className="footer-top py-4 mt-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Your Email Address" 
                aria-label="Your Email Address" 
                aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
                </span>
            </div>
            </div>
          </div>
        </div>       
      </div>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className = "text-white fs-6">
                  56 Blacklands Drive <br/>
                  Hayes, London <br />
                  Post Code: UB4 8EX
                </address>
                <a href="tel:+44 7585754410" className="mt-4 d-block mb-2 text-white">
                  +44 07585754410
                </a>
                <a href="mailto:abc@nxtgen.com" className="mt-4 d-block mb-2 text-white">
                  abc@nxtgen.com
                </a>
                <div className="d-flex align-items-center gap-28 mt-4">
                  <a className="text-white" href="/">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Customer Service</Link>
                <Link className="text-white py-2 mb-1">Terms and Conditions</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Returns and Replacements</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQs</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
                <Link className="text-white py-2 mb-1">Memberships</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Electronics</Link>
                <Link className="text-white py-2 mb-1">Clothing</Link>
                <Link className="text-white py-2 mb-1">Grocery</Link>
                <Link className="text-white py-2 mb-1">Toys & Games</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; { new Date().getFullYear()}; Powered by WD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer