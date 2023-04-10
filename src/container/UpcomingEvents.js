import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-ig-feed/dist/index.css'
import Play from '../img/play.png';
import Fancybox from "./fancybox.js"; 
import Map from '../img/map.png';
import Clock from '../img/clock.png';
import Cal from '../img/cla.png';
import { Link } from "react-router-dom";
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png'; 

function UpcomingEvents() {
    const responsive = { 
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://delos.athenaeducation.co.in/api/events');
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
       <>
       <Carousel responsive={responsive}>
            {
                posts.map(post => ( 
                   
                    <div key={post.id} > 
                     
                         <div className='upcoming-Events-mian-middle-frame'>
                            <div className='upcoming-Events-mian-middle-frame-image'>
                            <img src={"https://delos.athenaeducation.co.in/" + post.image} />
                            </div>
                            <div className='upcoming-Events-mian-middle-frame-bottom'>
                                <h4>{post.eventname}</h4>
                               
                                <div className=''>
                                <ul>
                                    <li>
                                        <img src={Cal} />
                                        <span>TBD</span>
                                    </li>
                                    <li>
                                        <img src={Clock} />
                                        <span>TBD</span>
                                    </li>
                                    <li>
                                        <img src={Map} />
                                        <span>{post.place}</span>
                                    </li>
                                </ul>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                     
                ))
            }
         </Carousel>
         </>
    );
};
   
export default UpcomingEvents;