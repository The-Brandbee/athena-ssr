import React, { useState, useEffect } from 'react';
import Posts from '../component/Post';
import Cal from '../img/cla-b.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Search from '../img/search.png';
import axios from 'axios';
import Press1 from '../img/press/1.jpg';

const NewPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://delos.athenaeducation.co.in/api/news/');
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

                        <div className="presscoverage-main-frame-middle MEDIA-PAGE">
                        <div className="presscoverage-main-frame-middle-left">
                        <div className="presscoverage-main-frame-middle-left-heading">

                        <h2>
                        {post.heading}
                        </h2> 
                        </div>
                        <div className="presscoverage-main-frame-middle-left-heading-middle">

                        <h5><img src={Cal} />  {post.date}</h5>
                        </div>

                        </div>
                        <div className="presscoverage-main-frame-middle-right">
                        <img src={"https://delos.athenaeducation.co.in/" + post.image} />
                        <div className='track-your-college-left-link'>
                        <a className='footer-top-map-img-button-link ' target="_blank" href={post.url}> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                        </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NewPost;