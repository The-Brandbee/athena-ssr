import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class UpcomingEventsAPI extends Component {

    state = {
        loading: false,
        data: [],
        headline: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        console.log('app mounted');
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5')
            .then(data => data.json())
            .then(data => this.setState({ data: data.articles, loading: false }, () => console.log(data.articles)))
    }

    render() {
        return (
            <div className="about container">
                <h1 className="text-left"><b>Latest News</b></h1>
                {this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map((post, indx) => {
                            return (
                                <Carousel responsive={responsive}>
                                <div className="card text-left mt-5" key={indx}>
                                    <img className="media-img card-img-top" src={post.urlToImage} alt="Alt text"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.description}</p>
                                        <a href={post.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                    </div>
                                </div>
                                </Carousel>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default UpcomingEventsAPI;