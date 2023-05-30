import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import blog4 from "../images/watch-top-10.jpg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BlogContent4 = ({speak, cancel}) => {
    const title = "Blog Title 4";
    const content = "This is the content of the blog title 4. This is about the latest technology. By using this technology, the company can achieve many commercial benefits."
    
    const commands = [
        {
            command: ["(Can you) read (the) blog (please)", "(Can you) read (the) block (please)" ],
            callback: () => {
                resetTranscript();
                speak({text: "Title "+title});
                resetTranscript();
                speak({text: content});
                resetTranscript();
          
            }
        },
        {   
            command: ["Stop", "Stop *", "Cancel", "Cancel *", "Stop reading (blog)", "Stop reading (block)" ],
            callback: () => {
              cancel();
              resetTranscript();
          
            }
            
        }
    ]
    const { resetTranscript }  = useSpeechRecognition({ commands });
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <>
            
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-page-card">
                                <Link to="/blogs" className="d-flex align-items-center">
                                    <HiOutlineArrowSmLeft /> Go back to Blogs
                                </Link>
                                <h3 className="title">
                                   {title} 
                                </h3>
                                <img src={blog4} className="img-fluid" alt="blog" />
                                <p>
                                   {content} 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogContent4