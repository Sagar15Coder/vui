import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import blog1 from "../images/vui-tech.webp";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BlogContent1 = ({speak, cancel}) => {
    
    const title = "Voice User Interface";
    const content = `To take the user experience to the next level, speech recognition 
                    can be embedded or implemented in a web application to build Voice User Interface (VUI) 
                    that allows users to navigate and use online services using voice commands and voice search.
                    To instruct the user or provide guidance, speech synthesis can also be embedded 
                    in an application to produce artificial human speech.`
    
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
                                <img src={blog1} className="img-fluid" alt="blog" />
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

export default BlogContent1

