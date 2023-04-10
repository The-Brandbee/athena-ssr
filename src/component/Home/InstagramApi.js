import React from 'react';
import axios from 'axios';
import SliderInsta from "./SliderInsta.js";

class Instagram extends React.Component {
    state = {
        images: [],
    };
    componentDidMount() {
        let token = 'IGQVJWSGhCa3UzVUo3c3JOU2c5ZAXJOUy05R0FuYUs0WG5Sano5ZAmI3X19TWFhqOVlqRklmMEJPQUluUEE1dXZAOV3JXdXpEWERrQ3dqOFRNNW5PWXJQTzBkNnFKTDFOZAnFLU3l2U2ZAwQUgwWmJlTVdKQQZDZD';
        let num_photos = 100;
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data[0].images);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="Instagram-bottom-section">
                <SliderInsta images={this.state.images} />
            </div>
        )
    }
}

export default Instagram;