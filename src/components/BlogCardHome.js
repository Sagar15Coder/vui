import React from 'react'
import BlogData from './BlogData';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BlogCardHome = () => {
    return (

        BlogData.map((blog) => {                       
          const {id, title, date, image, desc, content} = blog;
          return(
            <div className="col-3">
                <div className="blog-card">
                    <div className="card-image">
                        <img src={image} className="img-fluid" alt="blog" width="400" height="200" />
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

export default BlogCardHome