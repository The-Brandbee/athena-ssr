import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-ig-feed/dist/index.css'
import Play from '../img/play.png';
import Fancybox from "./fancybox.js"; 

const PastEvents = () => {
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://delos.athenaeducation.co.in/api/eventsbanner/');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div className="col-md-12">
   
            {
                posts.map(post => (
                    <div key={post.id} > 
                        <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href={post.url}>
                            <div className='Past-Events-middle-middle-frame'>
                                <div className='Past-Events-middle-middle-frame-left'>
                                    <img src={"https://delos.athenaeducation.co.in/" + post.image} />
                                </div>
                                <div className='Past-Events-middle-middle-frame-middle'>
                                    <div className='Past-Events-middle-middle-frame-middle-cont'>
                                        <h4>{post.heading}</h4>
                                        <p><span>Speaker :</span> {post.description}</p>
                                    </div>
                                </div>
                                <div className='Past-Events-middle-middle-frame-right'>
                                    <img src={Play} />
                                </div>
                            </div>
                            </a>
                            </Fancybox>
                    </div>
                    
                ))
            }
         
        </div>
    );
};
   
export default PastEvents;