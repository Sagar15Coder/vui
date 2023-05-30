import React from 'react'
import { HiOfficeBuilding } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <div>
        <div className="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19858.98614931999!2d-0.43613375000000004!3d51.524713199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766d9094a81af3%3A0xb8c47eeb6f83c573!2s56%20Blacklands%20Dr%2C%20Hayes%20UB4%208EX!5e0!3m2!1sen!2suk!4v1683074417158!5m2!1sen!2suk"                 
                width="100%"
                height="300"
                className="border-0 w-100"                  
                loading="lazy"
                allowFullScreen="true"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-box d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="email" className="form-control" placeholder="Email ID" />
                    <input type="tel" className="form-control" placeholder="Mobile No." />
                    <textarea
                      name=""
                      id=""
                      className="form-control w-100"
                      cols="40"
                      rows="5"
                      placeholder="Your Message"
                      >
                    </textarea>
                    <button className="button border-0">Send</button>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <HiOfficeBuilding />
                        <address className="mb-0">
                          56 Blacklands Drive, Hayes, London
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall />
                        <a href="tel:+44 84937590">+44 84937590</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillMail />
                        <a href="mailto: nextgen@gmail.com">
                          nextgen@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact