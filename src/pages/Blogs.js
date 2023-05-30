import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <>
        <div className="blog-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
              <div className="filter-card mb-3">
                  <h3 className="filter-title">Find Blogs By Categories</h3>
                  <div>
                    <ul>
                      <li>Electronics</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                      <li>Cosmetics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  <BlogCard/>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Blogs