import React from 'react'
import { Link } from "react-router-dom";
import BlogData from './BlogData';

const BlogCard = () => {

    return (

        BlogData.map((blog) => {                       
          const {id, title, date, image, desc, content} = blog;
          return(
            <div className="col-6">
                <div className="blog-card">
                    <div className="card-image">
                        <img src={image} className="img-fluid" alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className="date">{date}</p>
                        <h5>{title}</h5>
                        <p className="desc">
                            {desc}
                        </p>
                        <Link to={`/blog/${id}`} className="button">Read More</Link>
                    </div>
                </div>
            </div>
          )
        }
        )
      
      
    )
    
}
export default BlogCard